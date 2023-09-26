import Post from "@models/post";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const { prompt, tag, userId } = await req.json();
  try {
    await connectToDB();
    const newPost = new Post({ prompt, tag, creator: userId });
    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response("Failed to create", { status: 500 });
  }
};
