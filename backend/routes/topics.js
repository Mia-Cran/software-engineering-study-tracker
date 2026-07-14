const router = require("express").Router();
const auth = require("../middleware/auth");

const { 
    getTopics, 
    createTopic, 
    getTopicById, 
    deleteTopic,
    updateTopic,
} = require("../controllers/topics");

router.get("/", getTopics);
router.post("/", auth, createTopic);
router.get("/:id", getTopicById);
router.put("/:id", updateTopic);
router.delete("/:id", deleteTopic);
router.patch("/:id", updateTopic);

module.exports = router;