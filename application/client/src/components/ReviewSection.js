import React, { useState } from "react";
import "./styles/review_section.css";
import Comment from "./Comment";
function ReviewSection() {
  let [reviews, setReviews] = useState([]);
  let [userInput, setUserInput] = useState("");
  let [id, setID] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
    setID(++id);
    setReviews([...reviews, { content: userInput, id }]);
    setUserInput("");
  };

  return (
    <>
      {reviews.map((r) => {
        return <Comment review={r} />;
      })}
      <div className="review_container">
        <form onSubmit={handleSubmit}>
          <textarea
            className="leave_review"
            placeholder="Leave a review"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          ></textarea>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </>
  );
  //
}

export default ReviewSection;
