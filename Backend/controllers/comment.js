const Article = require("../model/post");
const Comment = require("../model/comment");


class CommentController {
    async createComment(req, res){
        try{
            const post = await Article.findById(req.params.postId);
            if(!post){
                throw new Error("Article Not Found!");
            }
            const comment = new Comment({
                content: req.body.content,
                author: "testUser", //req.user.id,
                post: req.params.postId
            });
            await comment.save();
            post.comments.push(comment);
            await post.save();
            return res.redirect(`/articles/${req.params.postId}/`)
        } catch(error){
            console.log(error);
            return res.send(error);
        }               
    }

    async updateComment(req, res){
        try{
            const { postId, commentId } = req.params;
            const post = await Article.findById(postId);
            if(!post){
                throw new Error("Article Not Found!");
            } else {
                const comment = await Comment.findById(commentId);
                if(!comment){
                    throw new Error("Comment Not Found!");
                } else {
                    await comment.set(req.body).save();
                    // await post.set({comment: req.body.content}).save();
                    return res.redirect(`/articles/${postId}/`)
                }
            }
        } catch(error) {
            return res.json({error});
        }
    }

    async deleteComment(req, res) {
        try {
            const { postId, commentId } = req.params;
          
            // Find the comment by its _id
            const comment = await Comment.findById(commentId);
      
            if (!comment) {
                throw new Error("Comment not found!");
            }
      
            // Delete the comment and its associated replies
            await Comment.deleteOne({ _id: commentId });
      
            // Delete associated replies using the comment's _id
            await Comment.deleteMany({ _id: { $in: comment.replies } });
      
            return res.redirect(`/articles/${postId}/`);
        } catch (error) {
          console.error(error);
          return res.send(error.message);
        }
      }
      

    async likeComment(req, res){
        try {
            const { postId, commentId } = req.params;
            const user = "user"
            const post = await Article.findById(postId);
            if(!post){
                throw new Error("Article Not Found!");
            } else {
                const comment = await Comment.findById(commentId);
                if (comment){
                    if (comment.likes.includes(user)) {
                        comment.likes.pull(user);
                    } else {
                        comment.likes.push(user);
                    }
                    await comment.save();
                    return res.redirect(`/articles/${postId}/`);
                }
                throw new Error("Comment Not Found!");
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
const comment = new CommentController();
module.exports = comment;