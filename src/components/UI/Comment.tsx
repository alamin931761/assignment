import { TComment } from "@/types";

const Comment = ({ comment }: { comment: TComment }) => {
  // Destructure the comment object to extract individual properties
  const { id, name, email, body } = comment;

  return (
    <div className="border-2 border-dashed hover:border-solid border-red-500 rounded-[10px] p-4 transition duration-1000 ease-in-out">
      {/* Render the name of the commenter */}
      <h2 className="font-light">
        <span className="font-semibold">Name:</span> {name}
      </h2>

      {/* Render the email of the commenter */}
      <h3 className="my-2 font-light">
        <span className="font-semibold">Email: </span> {email}
      </h3>

      {/* Render the content of the comment */}
      <p className="font-light">
        <span className="font-semibold">Comment:</span> {body}
      </p>
    </div>
  );
};

export default Comment;
