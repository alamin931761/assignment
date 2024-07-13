// Define the type for a blog post
export type TBlog = {
  _id: number;
  title: string;
  description: string;
  hashtags: string[];
};

// Define the type for a comment
export type TComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
