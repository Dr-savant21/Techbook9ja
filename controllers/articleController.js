const Article = require("../models/post");
const cloudinaryConfig = require("../config/cloudinary")
const fs = require('fs').promises;

class ArticleController {

  async createArticle(req, res){

    try{
      const {
        title,
        content,
        category,
        subcategories
      } = req.body;
      const author = "test" //req.user.id || "test";
      const contentPath = {
        path: './media_files/content.txt'
      }
    
      if(!content){
        throw new Error("Article content cannot be empty!");
      }
      fs.writeFile(contentPath.path, content, 'utf8', (err) => {
        if (err) throw new Error("Content cannot be written to file");
      });

      const media = req.files;
      media.push(content);

      if(media.length <= 1){
        throw new Error("An Article must have two Images");
      } else {
        const mediaDetails = await cloudinaryConfig.createMedia(media);
        if (!mediaDetails){
          throw new Error("There was a problem uploading the media");
        }
        // Create article in the database
        await new Article({
          title,
          media: mediaDetails,
          author,
          category: {
            name: category,
            subcategories: [subcategories]
          }
        }).save();
        return res.json({
          success: true,
          message: "Article successfully Uploaded!"
        });
      }
    } catch(error){
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  async getArticles(req, res){
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
  
    try {
      const totalCount = await Article.countDocuments();
      const totalPages = Math.ceil(totalCount / pageSize);
      const sort = { updatedAt: -1 };
  
      const posts = await Article.find({ status: 'approved' })
        .populate('author')
        .sort(sort)
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .exec();
  
      res.json({
        page,
        pageSize,
        totalItems: totalCount,
        totalPages,
        data: posts,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getArticle(req, res){
    try{
      const post = await Article.findById(req.params.id).populate('comment').lean();
      if(!post){
        throw new Error("Post not found");
      } else {
        return res
        .status(200)
        .json({ post });
      }
    } catch(err){
      console.log(`ERROR GETTING ARTICLE BY ID: ${err}`);
      return res.json({err});
    }          
  }

  async updateArticle(req, res){
    try{
      const post = await Article.findById(req.params.postId);
      if (!post){
        throw new Error(" Article not found!");
      } else {
        const {
          title,
          content,
          category,
          subcategories
        } = req.body;
        const contentPath = {
          path: './media_files/content.txt'
        }
      
        if(content){
          fs.writeFile(contentPath.path, content, 'utf8', (err) => {
            if (err) throw new Error("Content cannot be written to file");
          });
        }
  
        let media = req.files || [];
        media.push(content);

        const mediaDetails = await cloudinaryConfig.createMedia(media);
        if (!mediaDetails){
          throw new Error("There was a problem uploading the image(s)");
        }
        // await cloudinaryConfig.deleteMedia();
        await post.set({
          title,
          media: mediaDetails,
          category: {
            name: category,
            subcategories: [subcategories]
          }
        }).save();
        return res.status(200).send("Article Updated!");
      }
    } catch(error){
      console.log(`${error} ERROR UPDATING ARTICLES`);
      return res.json({ error });
    }
  }

  async deleteArticle(req, res){
    try{
      await Article.findByIdAndDelete(req.params.id);
      return res.send("Article Deleted!");
    } catch(error){
      console.log(`${error} ERROR DELETING ARTICLES`);
      return res.json({ error });
    }
  }
}

const articleController  = new ArticleController()
module.exports = articleController;