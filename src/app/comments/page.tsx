import Container from "@/components/Shared/Container";
import Comment from "@/components/UI/Comment";
import { TComment } from "@/types";
import { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Comments",
  description: "",
};

const commentsPage = async () => {
  // Fetch comments from the API
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments",
    { cache: "no-store" }
  );
  const comments = await response.json();

  return (
    <Container>
      <div className="h-screen">
        {/* Header for the comments section */}
        <h2 className="text-center text-base lg:text-[26px] font-semibold text-baltic-sea my-5">
          Comments
        </h2>

        {/* Grid layout to display comments in a responsive manner */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {comments.map((comment: TComment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default commentsPage;
