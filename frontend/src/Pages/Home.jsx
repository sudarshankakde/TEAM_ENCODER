import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";

import { getAllCourses } from "../apis";
import Courses from "./Courses";
import CourseForm from "./CourseForm";
function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
  };
  
  return (
    <div>
      <header className=" py-[20vh] flex flex-col justify-center items-center  gap-10">
        <div className="  text-center flex gap-5 flex-col">
          <h1 className="text-5xl font-sans font-semibold ">
            Start your journey
          </h1>
          <p className="px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            libero non sit commodi.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mb-4 relative flex items-center "
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            className="border border-gray-300 p-2 md:w-[40vw] w-[70vw] rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-transparent text-blue-500 absolute right-0 top-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </form>
      </header>
      <div className="flex md:flex-row  flex-col w-[95vw] gap-5 items-stretch justify-center flex-wrap  mx-auto ">
      <Courses/>
      <CourseForm/>
      </div>
    </div>
  );
}

export default Home;
