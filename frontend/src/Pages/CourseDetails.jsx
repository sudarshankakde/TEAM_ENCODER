import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOneCourses } from "../apis";

function CourseDetails() {

  const { id } = useParams();
  const courseDetailsdata = {
    1: {
      course_title: "Introduction to Data Science",
      instructor: "Dr. John Smith",
      description:
        "This course provides an introduction to the field of data science... Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quo vero neque consectetur, velit obcaecati voluptatem molestiae ex nemo minus! Alias voluptates cumque recusandae quas itaque non repudiandae vero necessitatibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quo vero neque consectetur, velit obcaecati voluptatem molestiae ex nemo minus! Alias voluptates cumque recusandae quas itaque non repudiandae vero necessitatibus?",
      duration: "12 days",
      language: "English",
      level: "Intermediate",
      topics_covered: [
        "Data analysis",
        "Machine learning",
        "Data visualization",
        "Statistical methods",
      ],
      requirements: [
        "Basic understanding of statistics",
        "Some programming experience (Python recommended)",
      ],
      syllabus: [
        {
          video: "",
          topic: "Introduction to Data Science",
        },
        {
          video_url: "",
          topic: "Data Wrangling",
        },
      ],
      learning_outcomes: [
        "Understand the fundamentals of data science",
        "Apply data analysis techniques using Python",
        "Create data visualizations to communicate insights",
        "Build basic machine learning models",
      ],
      certification: {
        type: "Verified",
        cost: "$49",
        requirements: "Complete all assignments and pass the final exam",
      },
    },
    2: {
      title: "Advanced JavaScript",
      description: "Deep dive into advanced JavaScript concepts.",
    },
  };

  const[coursedata,setcoursedata]=useState(courseDetailsdata);

  const callapi=async(id)=>{
    let res=await getOneCourses(id);
    return setcoursedata(res);
  }
 
 
 useEffect(()=>{
    let res= callapi(id);
    setcoursedata(res)
 },[])
  console.log(coursedata,"gsgsgsgsg");
 

  return (
    <div className="py-16 px-5">
      <div className="flex md:flex-row flex-col gap-4">
        <img
          src="https://sudharshankakde.pythonanywhere.com/DataBase/Images/BlogImages/1_6De3_rvIoAjZ6D5WBinW_Q.png"
          alt={coursedata.title}
          className="md:w-[50vw] md:h-[50vh] w-full h-[50vw] rounded-lg"
        />
        <div className="flex flex-col text-start mx-4">
          <h1 className="text-3xl font-semibold">{coursedata.course_title}</h1>
          <h3 className="font-semibold opacity-75 text-lg my-1">
            By - {coursedata.instructor}
          </h3>
          <div className=" flex flex-row opacity-80 mt-2 gap-3">
            <span className="flex  justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              </svg>
              {coursedata.duration}
            </span>
            <span className="flex  justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clipboard2-pulse-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5" />
                <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M9.98 5.356 11.372 10h.128a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.479-.356l-.94-3.135-1.092 5.096a.5.5 0 0 1-.968.039L6.383 8.85l-.936 1.873A.5.5 0 0 1 5 11h-.5a.5.5 0 0 1 0-1h.191l1.362-2.724a.5.5 0 0 1 .926.08l.94 3.135 1.092-5.096a.5.5 0 0 1 .968-.039Z" />
              </svg>{" "}
              {coursedata.level}
            </span>
            <span className="flex  justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-translate"
                viewBox="0 0 16 16"
              >
                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
              </svg>
              {coursedata.language}
            </span>
          </div>
          <hr className="my-4" />
          <p className="">{coursedata.description} </p>
          <hr className="my-4" />
          <div className="flex md:flex-row md:gap-0 gap-5 flex-col justify-between items-start">
            <span>
              <h3 className="text-lg font-semibold">Topic Covered:</h3>
              <ul className="ml-5 capitalize">
                {coursedata.learning_outcomes &&(coursedata.topics_covered).map((data) => {
                  return <li className="list-item list-decimal">{data}</li>;
                })}
              </ul>
            </span>
            <span>
              <h3 className="text-lg font-semibold capitalize">
                requirements:
              </h3>
              <ul className="ml-5 capitalize">
                {coursedata.learning_outcomes &&(coursedata.requirements).map((data) => {
                  return <li className="list-item list-decimal">{data}</li>;
                })}
              </ul>
            </span>
          </div>
          <hr className="my-4" />
          <div className="flex md:flex-row md:gap-0 gap-5 flex-col justify-between items-start  ">
            <span>
              <h3 className="text-lg font-semibold capitalize">
                {" "}
                learning outcomes:
              </h3>
              <ul className="ml-5 capitalize">
                {coursedata.learning_outcomes && (coursedata.learning_outcomes).map((data) => {
                  return <li className="list-item list-decimal">{data}</li>;
                })}
              </ul>
            </span>
          </div>
          <div className="flex md:justify-end  items-center">
          <Link
            to={`/course/${id}/video/0`}
            className=" text-center  bg-blue-300 md:w-[20vw] px-3 py-2 rounded-md my-5 flex flex-row justify-center items-center gap-5 hover:bg-blue-400 transition-all duration-100 ease-in"
          >
            Go To Course <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
