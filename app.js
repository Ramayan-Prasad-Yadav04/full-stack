require("dotenv").config();
const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const session = require('express-session');
const flash = require('connect-flash');
const sessionOption ={
  secret: "MysuperSecret" ,
  resave : false,
 saveUninitialized: true,
 cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
  }
}
const ExpressError = require("./utiles/ExpressError");
const { listingSchema } = require("./schema");

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wanderlust";

const listingsRouter = require("./routes/listings.js");
const reviewsRouter = require("./routes/reviews.js");

// EJS & View Engine Setup
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware Configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Database Connection
async function main() {
  await mongoose.connect(DB_URL);
}

app.use(session(sessionOption));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

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

// Modular Routes
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);

// 404 Catch-All Middleware
app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

// Centralized Error-Handling Middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  let title = "Internal Server Error";
  let type = "danger";

  if (err.name === "CastError") {
    statusCode = 400;
    title = "Invalid ID Format";
    message = `We couldn't locate any resource with the ID "${err.value}". Please verify the URL.`;
    type = "warning";
  } else if (err.name === "ValidationError") {
    statusCode = 400;
    title = "Validation Failed";
    message = Object.values(err.errors)
      .map((el) => el.message)
      .join(", ");
    type = "warning";
  } else if (statusCode === 400) {
    title = "Invalid Input Data";
    type = "warning";
  } else if (statusCode === 404) {
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