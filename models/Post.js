const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, // connect post user
    ref: "users" // Referring to users collection
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  // User will be added to a list if liked or removed so user cannot like more than once
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId, // connect post user
        ref: "users" // Referring to users collection
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId, // connect post user
        ref: "users" // Referring to users collection
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
