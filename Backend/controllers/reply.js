const Article = require("../model/post");
const Comment = require("../model/comment");
const mongoose = require("mongoose");

// async function findReplies(comments, CommentId) {
    
//     for (const comment of comments) {
//       // Check if the current comment matches the desired parentCommentId
//       if (comment._id.toString() === CommentId) {
//         return comment; // Return the Mongoose model instance
//       }
  
//       // Recursively search for replies within this comment's replies
//       if (comment.replies && comment.replies.length > 0) {
//         const nestedReplies = await findReplies(comment.replies, CommentId);
//         if (nestedReplies) {
//           return nestedReplies; // Return the Mongoose model instance
//         }
//       }
//     }
// }
  
  

class Reply{
    async createReply(req, res){
        try{
            const { postId, commentId } = req.params;
            const post = await Article.findById(postId);
            if(!post){
                throw new Error("Article not found!");
            } else {
                const foundComment = post.comments.find(comment => comment._id.toString() === commentId);
                if (foundComment){
                    const reply = await new Comment({
                        content: req.body.content,
                        author: "testUser", //req.user.id,
                        post: req.params.postId,
                    }).save();
                    foundComment.replies.push(reply);
                    await foundComment.save();
                    return res.redirect(`/articles/${postId}/`);
                }
                throw new Error("Comment not found!");
            }
        } catch(error){
            console.log(error);
            return res.send(error);
        }
    }

    // async createReply(req, res){
    //     try{
    //         const { postId, commentId } = req.params;
    //         const post = await Article.findById(postId);
    //         if(!post){
    //             throw new Error("Article not found!");
    //         } else {
    //             const parentComment = await findReplies(post.comments, commentId);
    //             if (parentComment){
    //                 const reply = await new Comment({
    //                     content: req.body.content,
    //                     author: "testUser", //req.user.id,
    //                     post: req.params.postId,
    //                 }).save();
    //                 parentComment.replies.push(reply);
    //                 const commentModel = new Comment(parentComment);
    //                 await commentModel.save();
    //                 return res.redirect(`/articles/${postId}/`);
    //             }
    //             throw new Error("Comment not found!");
    //         }
    //     } catch(error){
    //         console.log(error);
    //         return res.send(error);
    //     }
    // }

    async updateReply(req, res) {
        try {
            const { postId, commentId, replyId } = req.params;
            const post = await Article.findById(postId);
      
            if (!post) {
                throw new Error("Article not found!");
            } else {
                const reply = await Comment.findByIdAndUpdate(
                    replyId,
                    {
                        content: req.body.content
                    },
                    {
                        new: true
                    }
                );
                console.log(reply);
                if (reply) {
                    const comment = post.comments.find((comment) => comment._id.toString() === commentId);
      
                    if (comment) {
                        console.log(comment);
                        await comment.set({ replies: [reply] }).save();
                        return res.redirect(`/articles/${postId}/`);
                    } else {
                        throw new Error('Reply not found!');
                    }
                }
      
                throw new Error("Comment not found!");
            }
        } catch (error) {
            console.error(error);
            return res.send(error.message);
        }
    }
      
      

    async deleteReply(req, res){
        try {
            const { postId, commentId, replyId } = req.params;
            const post = await Article.findById(postId);
            if(!post){
                throw new Error("Article not found!");
            } else {
                const foundComment = post.comments.find(comment => comment._id.toString() === commentId);
                if (foundComment){
                    const reply = foundComment.replies.find(comment => comment._id.toString() === replyId);
                    if(reply){
                        foundComment.replies.pull(reply);
                        const model = new Comment(reply);
                        await model.deleteOne();
                        await foundComment.save();
                        return res.redirect(`/articles/${postId}/`);
                    } else {
                        throw new Error('Reply not found!');
                    }
                }
                throw new Error("Comment not found!");
            }

        } catch(error){
            console.log(error);
            return res.send(error);
        }
    }
}

const reply = new Reply();
module.exports = reply;