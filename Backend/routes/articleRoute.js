const upload = require("../config/multer");
const articleController = require("../controllers/articleController");
const router = require("express").Router();

router.post("/add", upload.mediaUpload.any(), articleController.createArticle);
router.delete("/delete", articleController.deleteArticle);
router.patch("/:postId", upload.mediaUpload.any(), articleController.updateArticle);
router.get("/:postId", articleController.getArticle);
router.get("/", articleController.getArticles);



module.exports = router;