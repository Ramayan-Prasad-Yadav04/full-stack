const mongoose = require("mongoose");
const Listing = require("../models/listings");
const data = require("./data");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(data.data);
  console.log("Data was initialized successfully");
  mongoose.connection.close(); // Close connection after seeding
};

main()
  .then(() => {
    console.log("Connected to DB");
    initDB(); // <-- Run after connection is ready
  })
  .catch((err) => {
    console.log("DB Connection Error:", err);
  });
