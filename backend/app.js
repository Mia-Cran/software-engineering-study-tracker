const express = require("express");
const topicRoutes = require("./routes/topics");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.use("/topics", topicRoutes);

module.exports = app;