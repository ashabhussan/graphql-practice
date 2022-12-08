const { Schema, model } = require('../configs/db.config');

const postSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
});

const Post = model('Post', postSchema);

module.exports = Post;
