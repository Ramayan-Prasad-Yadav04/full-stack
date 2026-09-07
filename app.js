require("dotenv").config();
const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");

const Listing = require("./models/listings");
const ExpressError = require("./utiles/ExpressError");
const wrapAsync = require("./utiles/wrapAsync");
const { listingSchema } = require("./schema");

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wanderlust";

// EJS & View Engine Setup
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware Configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Joi Schema Validation Middleware
const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Database Connection
async function main() {
  await mongoose.connect(DB_URL);
}

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });

// ==========================================
// ROUTES
// ==========================================

// Root Route
app.get("/", (req, res) => {
  res.redirect("/listings");
});

// Index Route
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  })
);

// New Form Route (Must precede /listings/:id)
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Create Route
app.post(
  "/listings",
  validateListing,
  wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  })
);

// Show Route
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/show.ejs", { listing });
  })
);

// Edit Form Route
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/edit.ejs", { listing });
  })
);

// Update Route
app.put(
  "/listings/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const updatedListing = await Listing.findByIdAndUpdate(
      id,
      { ...req.body.listing },
      { runValidators: true, new: true }
    );

    if (!updatedListing) {
      throw new ExpressError(404, "Listing not found");
    }
    res.redirect(`/listings/${id}`);
  })
);

// Destroy Route
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    if (!deletedListing) {
      throw new ExpressError(404, "Listing not found");
    }
    res.redirect("/listings");
  })
);

// 404 Catch-All Middleware (Express 5 safe)
app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

// Centralized Error-Handling Middleware (Multi-theming & categorised metadata)
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  let title = "Internal Server Error";
  let type = "danger"; // 'warning', 'info', 'danger'

  // 1. Invalid MongoDB ObjectId format
  if (err.name === "CastError") {
    statusCode = 400;
    title = "Invalid ID Format";
    message = `We couldn't locate any resource with the ID "${err.value}". Please verify the URL.`;
    type = "warning";
  }

  // 2. Mongoose Schema Validation Error
  else if (err.name === "ValidationError") {
    statusCode = 400;
    title = "Validation Failed";
    message = Object.values(err.errors)
      .map((el) => el.message)
      .join(", ");
    type = "warning";
  }

  // 3. Joi Validation Error (ExpressError with 400)
  else if (statusCode === 400) {
    title = "Invalid Input Data";
    type = "warning";
  }

  // 4. Resource / Route Not Found (404)
  else if (statusCode === 404) {
    title = "Page or Resource Not Found";
    message =
      message === "Something went wrong"
        ? "The page or listing you are looking for does not exist or has been removed."
        : message;
    type = "info";
  }

  res.status(statusCode).render("error.ejs", {
    statusCode,
    title,
    message,
    type,
  
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});