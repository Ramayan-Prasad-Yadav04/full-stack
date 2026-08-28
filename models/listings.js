const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqjFblsZZWvU6cuM6Mw3yPS6KY5xStURH5GMaXvdn8MTFk5GA3TnLlRDd&s=10",
    set: (v) =>
      v === ""
        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqjFblsZZWvU6cuM6Mw3yPS6KY5xStURH5GMaXvdn8MTFk5GA3TnLlRDd&s=10"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;