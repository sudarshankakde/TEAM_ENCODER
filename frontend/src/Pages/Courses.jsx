import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { getAllCourses } from "../apis";

function Courses() {
  const [data,setdata]=useState([])
  const callapi=async()=>{
    const res=await getAllCourses()
    return setdata(res.courses);
    }
  useEffect(()=>{
  callapi()
  },[])

  console.log(data);
  return (
    <div className="py-10">
      <div className="flex md:flex-row  flex-col w-[95vw] gap-5 items-stretch justify-center flex-wrap  flex-row  mx-auto ">
        {
          (data).map((cource,index)=>{
            return <Cards
            title={cource.course_title}
            thumbnail="https://sudharshankakde.pythonanywhere.com/DataBase/Images/BlogImages/social-3.png"
            instructor={cource.instructor}
            duration={cource.duration}
            level={cource.level}
            id={cource._id}
            
          />
          })
        }
        {
          (data).map((cource,index)=>{
            return <Cards
            title={cource.course_title}
            thumbnail="https://sudharshankakde.pythonanywhere.com/DataBase/Images/BlogImages/social-3.png"
            instructor={cource.instructor}
            duration={cource.duration}
            level={cource.level}
            id={cource._id}
            
          />
          })
        }
        {
          (data).map((cource,index)=>{
            return <Cards
            title={cource.course_title}
            thumbnail="https://sudharshankakde.pythonanywhere.com/DataBase/Images/BlogImages/social-3.png"
            instructor={cource.instructor}
            duration={cource.duration}
            level={cource.level}
            id={cource._id}
            
          />
          })
        }
        {
          (data).map((cource,index)=>{
            return <Cards
            title={cource.course_title}
            thumbnail="https://sudharshankakde.pythonanywhere.com/DataBase/Images/BlogImages/social-3.png"
            instructor={cource.instructor}
            duration={cource.duration}
            level={cource.level}
            id={cource._id}
            
          />
          })
        }
      </div>
    </div>
  );
}

export default Courses;
