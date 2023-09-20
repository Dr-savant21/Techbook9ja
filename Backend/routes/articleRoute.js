const upload = require("../config/multer");
const articleController = require("../controllers/articleController");
const comment = require("../controllers/comment");
const reply = require("../controllers/reply")
const router = require("express").Router();

router.post("/add", upload.mediaUpload.any(), articleController.createArticle);
router.delete("/delete", articleController.deleteArticle);
router.put("/:postId", upload.mediaUpload.any(), articleController.updateArticle);
router.get("/:postId", articleController.getArticle);
router.get("/", articleController.getArticles);
router.post("/:postId/comment", comment.createComment);
router.post("/:postId/comment/:commentId/like", comment.likeComment);
router.delete("/:postId/comment/:commentId/", comment.deleteComment);
router.put("/:postId/comment/:commentId", comment.updateComment);
router.post("/:postId/comment/:commentId/reply", reply.createReply);
router.put("/:postId/comment/:commentId/reply/:replyId", reply.updateReply);
router.delete("/:postId/comment/:commentId/reply/:replyId", reply.deleteReply);



module.exports = router;