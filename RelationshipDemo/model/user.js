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

const userSchema = new mongoose.Schema({
  username: String,
  address: [
    {
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
  try {
    const user1 = new User({
      username: "Ramayan Prasad Yadav",
      address: [
        {
          location: "wrs colony",
          city: "Raipur",
        },
      ],
    });

    const result = await user1.save();
    console.log("User saved successfully:", result);
  } catch (err) {
    console.error("Error saving user:", err);
  }
};