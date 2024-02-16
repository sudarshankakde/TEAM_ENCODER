import React from "react";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg m-4 w-[300px] flex flex-col  items-start justify-between">
      <img
        className="w-full h-40 object-cover"
        src={props.thumbnail}
        alt={props.title}
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 capitalize">{props.title}</div>
        <p className="text-gray-700 text-base capitalize">{props.instructor}</p>
      </div>

      <div className="px-6 py-1 flex flex-row justify-between items-center w-full">
        <p className="text-gray-700 text-base">{props.duration}</p>
        <span className="inline-block capitalize bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {props.level}
        </span>
      </div>
      <Link
        to={`/courseDetail/${props.id}`}
        className=" px-6 py-3 mt-5 w-full text-end ml-auto flex flex-row justify-center items-center gap-2 bg-gray-200 hover:bg-blue-300"
      >
        Go To Course{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      
      </Link>
    </div>
  );
}

export default Cards;
