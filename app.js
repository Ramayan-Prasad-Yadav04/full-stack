const express = require("express");
const app = express();
require("dotenv").config();
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;
const Listing = require("./models/listings");
const methodOverride = require("method-override");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "/public")))

// EJS Setup
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Database Connection
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

// Routes
app.get("/", (req, res) => {
  res.redirect("/listings");
});

// Index Route
app.get("/listings", async (req, res) => {
  try {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  } catch (err) {
    res.status(500).send("Database error: " + err.message);
  }
});

// New Route (Form)
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Create Route (Save to DB)
app.post("/listings", async (req, res) => {
  try {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  } catch (err) {
    console.error("Error creating listing:", err);
    res.status(500).send("Failed to create listing: " + err.message);
  }
});

// Show Route
app.get("/listings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).send("Listing not found");
    }
    res.render("listings/show.ejs", { listing });
  } catch (err) {
   ; res.status(500).send("Error fetching listing details: " + err.message);
  }
});


// Edit form
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

//update Route
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

// Destroy Route
// 2. ROUTES COME AFTER
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndDelete(id);
  console.log(listing);
  res.redirect("/listings");
});



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});