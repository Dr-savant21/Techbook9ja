const router = require("express").Router();
const errorHandler = require("../middleware/errorHandler");

router.use(errorHandler.err404, errorHandler.err500);

module.exports = router;