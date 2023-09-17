const Article = require("../model/post");
const Comment = require("../model/comment");

class Reply{
    async createReply(req, res){
        try{
            const post = await Article.findById(req.params.postId);
            if(!post){
                throw new Error("Article Not Found!");
            } else {
                const comment = await Comment.findById(req.params.commentId);

                if(!comment){
                    throw new Error("Comment not found!");
                }
                const reply = await new Comment({
                    content: req.body.content,
                    author: "testUser", //req.user.id,
                    post: req.params.postId
                }).save();
                comment.comments.push(reply);
                await comment.save();
                await post.save();
                return res.redirect(`/articles/${req.params.postId}/`);
            }
        } catch(error){
            console.log(error);
            return res.send(error);
        }
    }
}

const reply = new Reply();
module.exports = reply;