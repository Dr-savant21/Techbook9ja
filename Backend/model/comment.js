const { Schema, model } = require('mongoose');
const Populate = require("../utils/autoPopulate");

const commentSchema = new Schema({
  content: { type: String, required: true },
  author: { type: String, required: true }, //{ type: Schema.Types.ObjectId, ref: "User" },
  post: { type: Schema.Types.ObjectId, ref: "Article" },
  comments: [this],
}, { timestamps: true });
commentSchema
.pre('findOne', Populate('author'))
.pre('find', Populate('author'))
.pre('findOne', Populate('comments'))
.pre('find', Populate('comments'));

const Comment = model('Comment', commentSchema);
module.exports = Comment;