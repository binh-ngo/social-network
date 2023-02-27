const router = require("express").Router();
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts).post(createThought);

router
    .route("/:id")
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// add reaction to thoughts
router.route("/:thoughtId/reactions").post(addReaction);

// remove reaction to thoughts
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;