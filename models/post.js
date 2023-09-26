const { Schema, model, models } = require("mongoose");

const PostSchema = new Schema({
  prompt: {
    type: String,
    required: [true, "Prompt is required!"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required!"],
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required!"],
  },
});

const Post = models.Post || model("Post", PostSchema);
export default Post;
