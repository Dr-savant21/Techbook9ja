const mongoose = require('mongoose');

// Define a schema for categories
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subcategories: [{ type: String, required: true }],
});

// Define a schema for articles
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    // content: {
    //     type: String,
    //     required: true,
    // },
    media: [
        {
            imageName: {
                type : String,
                required : true
            },
            imageId: {
                type: String,
                required: true
            },
            imageUrl: {
                type: String,
                required: true
            }
        }
    ],
    author: {
        type: String,
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User",
        // required: true
    },
    comment: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    status: {
        type: String,
        required: true,
        default: "submitted",
        enum: ["submitted", "under review", "rejected", "edits required", "approved"]
    },
    category: [categorySchema], // An array of category documents
},
{
    timestamps: true,
}
);

articleSchema
  .pre('findOne', Populate('author'))
  .pre('find', Populate('author'));
// Create a model for articles
const Article = mongoose.model('Article', articleSchema);
module.exports = Article;