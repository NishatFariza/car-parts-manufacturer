import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({ reviewUser }) => {
  const { name, img, review, rating } = reviewUser;

  return (
    <div className="w-11/12 sm:w-auto mx-auto border rounded-xl shadow duration-500 cursor-pointer bg-white">
      <div className="rounded-2xl flex justify-center items-center pt-10">
        <img className="rounded-full w-[80px] h-[80px]" src={img} alt="" />
      </div>
      <div className="lg:py-10 lg:px-6 py-10 px-6 text-center ">
        <h4>{name}</h4>
        <Rating
          initialRating={rating}
          emptySymbol={<FontAwesomeIcon icon={faStar} />}
          fullSymbol={
            <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
          }
          readonly
        ></Rating>
        <p title={review} className="text-stone-600">
          {review.length >= 150 ? `${review.slice(0, 150)}...` : review}
        </p>
      </div>
    </div>
  );
};

export default Review;
