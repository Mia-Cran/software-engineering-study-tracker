const express = require("express");
const cors = require("cors");
const topicRoutes = require("./routes/topics");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.use("/topics", topicRoutes);

module.exports = app;