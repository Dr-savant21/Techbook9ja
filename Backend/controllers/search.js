const Article = require("../model/post");

class SearchController {
  async performSearch(req, res) {
    try {
      // Retrieve the search query from the request query parameters
      const { query, page = 1, limit = 10 } = req.query;

      const searchResults = await Article.find(
        {
          $text: { $search: query },
        },
        null,
        {
          skip: (page - 1) * limit,
          limit: parseInt(limit),
        }
      );

      // Count the total number of matching articles
      const totalResults = await Article.countDocuments({
        $text: { $search: query },
      });

      // Respond with the search results and pagination information
      return res.json({
        results: searchResults,
        totalResults,
        page: parseInt(page),
        limit: parseInt(limit),
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

const searchController = new SearchController();
module.exports = searchController;
