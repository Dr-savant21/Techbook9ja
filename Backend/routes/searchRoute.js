const express = require("express");
const searchController = require("../controllers/search");
const router = express.Router();

// Route for performing a search
router.get("/search", searchController.performSearch);

module.exports = router;
