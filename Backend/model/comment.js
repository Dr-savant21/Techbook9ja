const mongoose = require('mongoose');
const Populate = require("../utils/autoPopulate");

const replySchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: String, required: true }, //{ type: Schema.Types.ObjectId, ref: "User" },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Article" },
  likes: [{ type: String }],
});

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: String, required: true }, //{ type: Schema.Types.ObjectId, ref: "User" },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Article" },
  likes: [{ type: String }],
  replies: [this],
}, { timestamps: true });
commentSchema
  .pre('findOne', Populate('author'))
  .pre('find', Populate('author'))
  .pre('findOne', Populate('replies'))
  .pre('find', Populate('replies'));

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;