import React from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-[0.5]">
      {Array.from(Array(5).keys()).map((star) => {
        return (
          <span key={star} className="text-yellow-500">
            {rating > star + 2 ? (
              <i className="fa-solid fa-star"></i>
            ) : rating >= star + 1.5 && rating < star + 2 ? (
              <i className="fa-solid fa-star-half-stroke"></i>
            ) : (
              <i className="fa-regular fa-star "></i>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
