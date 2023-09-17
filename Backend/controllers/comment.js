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
            post.comment.push(comment);
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
                    return res.redirect(`/articles/${req.params.id}/`)
                }
            }
        } catch(error) {
            return res.json({error});
        }
    }

    async deleteComment(req, res){
        try{
            const { postId, commentId } = req.params;
            const post = await Article.findById(postId);
            if(!post){
                throw new Error("Article Not Found!");
            } else {
                await Comment.findByIdAndDelete(commentId);
                return res.redirect(`/articles/${req.params.id}/`)
            }
        } catch(error){
         return res.json({error});   
        }
    }
}
const comment = new CommentController();
module.exports = comment;