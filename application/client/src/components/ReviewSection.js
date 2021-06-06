import React, { useState } from "react";
import "./styles/review_section.css";
function ReviewSection() {
  let [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(review);
    setReview("");
  };

  return (
    <div className="review_container">
      <form onSubmit={handleSubmit}>
        <textarea
          className="leave_review"
          placeholder="Leave a review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewSection;
