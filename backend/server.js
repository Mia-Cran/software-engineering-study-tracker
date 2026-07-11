const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const PORT = 3001;

mongoose
  .connect("mongodb://127.0.0.1:27017/study_tracker_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});