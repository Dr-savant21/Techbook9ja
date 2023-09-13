const express = require("express")
const router = express.Router()
const errorRoutes = require("./errorRoute");
const articleRoutes = require("./articleRoute");

router
  .get("/test",(req,res) => {
  res.send("Server seems to be working")
})
  .use("/articles", articleRoutes)
  .use(errorRoutes);

module.exports = router;