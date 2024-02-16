import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import QuizApp from "../components/quize";

function CoursePage() {
  const { id, videoId } = useParams();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection((prevOpenSection) =>
      prevOpenSection === index ? null : index
    );
  };
  const course = {
    course_title: "Introduction to Data Science",
    instructor: "Dr. John Smith",
    description:
      "This course provides an introduction to the field of data science...",
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
        quiz: [
          {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4'
  }
        ],
      },
      {
        video_url: "",
        topic: "Data Wrangling",
        quiz: [
          {
            question: "What is data analysis?",
            options: ["op1", "op2", "op3", "op4"],
            correctAnswer: "op2",
          },
        ],
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
  };
  if (!course) {
    return <div>Course not found</div>;
  }
 

  return (
    <>
      <div className="flex md:flex-row flex-col gap-4 my-10">
        <div className="flex flex-col ">
          <iframe
            src="https://www.youtube.com/embed/vA-AAeqkpxM"
            title="JavaScript  Chapter 1 - Practice Set | JavaScript Tutorial in Hindi #5"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="md:w-[1002px] w-screen md:h-[514px] h-52"
          ></iframe>
          <div className=" my-5 px-4">
            <h2 className="text-2xl font-semibold">Quiz :</h2>
            <QuizApp data={course.syllabus[videoId].quiz}/>
          </div>
        </div>
        <div className=" flex flex-col gap-2 h-[75vh] overflow-y-auto overflow-x-hidden">
          {course.syllabus.map((e, index) => {
            return (
              <Link
                to={`/course/1/video/${index}`}
                key={index}
                className="bg-blue-300 w-[500px]  rounded-lg  p-3 capitalize text-lg font-normal "
              >
                {e.topic}
              </Link>
            );
          })}
          {course.syllabus.map((e, index) => {
            return (
              <Link
                to={`/course/1/video/${index}`}
                key={index}
                className="bg-blue-300 w-[500px]  rounded-lg  p-3 capitalize text-lg font-normal "
              >
                {e.topic}
              </Link>
            );
          })}
          {course.syllabus.map((e, index) => {
            return (
              <Link
                to={`/course/1/video/${index}`}
                key={index}
                className="bg-blue-300 w-[500px]  rounded-lg  p-3 capitalize text-lg font-normal "
              >
                {e.topic}
              </Link>
            );
          })}
          {course.syllabus.map((e, index) => {
            return (
              <Link
                to={`/course/1/video/${index}`}
                key={index}
                className="bg-blue-300 w-[500px]  rounded-lg  p-3 capitalize text-lg font-normal "
              >
                {e.topic}
              </Link>
            );
          })}
          {course.syllabus.map((e, index) => {
            return (
              <Link
                to={`/course/1/video/${index}`}
                key={index}
                className="bg-blue-300 w-[500px]  rounded-lg  p-3 capitalize text-lg font-normal "
              >
                {e.topic}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CoursePage;
