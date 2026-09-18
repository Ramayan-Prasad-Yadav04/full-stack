const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main()
  .then(async () => {
    console.log("Successfully connected");
    await addUser();
  })
  .catch((err) => console.log(err));

  const orderSchema = new Schema({
    item: String,
    price:Number,
    
  })

const customerSchema = new Schema({
    user: String,
    orders: [
        {}
    ]
})