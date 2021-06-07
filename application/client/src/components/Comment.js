import React from "react";

function Comment({ review }) {
  console.log(review);
  return (
    <div className="individual__review">
      <div>{review.content}</div>
    </div>
  );
}

export default Comment;
