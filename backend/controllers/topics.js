const Topic = require("../models/topic");

const getTopics = (req, res) => {
  Topic.find({})
    .then((topics) => {
      res.send(topics);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Error getting topics" });
    });
};

const getTopicById = (req, res) => {
  const { id } = req.params;

  Topic.findById(id)
    .then((topic) => {
      if (!topic) {
        return res.status(404).send({ message: "Topic not found" });
      }

      return res.send(topic);
    })
    .catch((err) => {
      console.error(err);

      if (err.name === "CastError") {
        return res.status(400).send({ message: "Invalid topic id" });
      }

      return res.status(500).send({ message: "Error getting topic" });
    });
};

const deleteTopic = (req, res) => {
  const { id } = req.params;

  Topic.findByIdAndDelete(id)
    .then((topic) => {
      if (!topic) {
        return res.status(404).send({ message: "Topic not found" });
      }

      return res.send({ message: "Topic deleted" });
    })
    .catch((err) => {
      console.error(err);

      if (err.name === "CastError") {
        return res.status(400).send({ message: "Invalid topic id" });
      }

      return res.status(500).send({ message: "Error deleting topic" });
    });
};

const updateTopic = (req, res) => {
  const { id } = req.params;

  Topic.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((topic) => {
      if (!topic) {
        return res.status(404).send({ message: "Topic not found" });
      }

      return res.send(topic);
    })
    .catch((err) => {
      console.error(err);

      if (err.name === "CastError") {
        return res.status(400).send({ message: "Invalid topic id" });
      }

      return res.status(500).send({ message: "Error updating topic" });
    });
};

const createTopic = (req, res) => {
  const {
    term,
    simpleDefinition,
    beginnerDefinition,
    technicalDefinition,
    category,
    difficulty,
  } = req.body;

  Topic.create({
    term,
    simpleDefinition,
    beginnerDefinition,
    technicalDefinition,
    category,
    difficulty,
    owner: "000000000000000000000000",
  })
    .then((topic) => {
      res.status(201).send(topic);
    })
    .catch((err) => {
      console.error(err);

      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Invalid topic data" });
      }

      return res.status(500).send({ message: "Error creating topic" });
    });
};

module.exports = {
  getTopics,
  createTopic,
  getTopicById,
  deleteTopic,
  updateTopic,
};
