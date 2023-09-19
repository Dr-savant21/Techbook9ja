const express = require("express");
const commentController = require("../controllers/comment");
const replyController = require("../controllers/reply");
const router = express.Router();

// Creates new comment for a specific article
router.post("/:articleId/comment", commentController.createComment);

// Updates a comment for a specific article
router.put("/:articleId/comment/:commentId", commentController.updateComment);

// Creates a reply to a specific comment on an article
router.post("/:articleId/comment/:commentId/reply", replyController.createReply);

module.exports = router;
