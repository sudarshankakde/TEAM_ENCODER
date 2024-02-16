import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import CourseDetails from "./Pages/CourseDetails";
import CoursePage from "./Pages/CoursePage";
import CourseForm from "./Pages/CourseForm";

import  SignUp from "./Pages/singup";
import  SignIn  from "./Pages/SignIn";

function App() {
  return (
    <div className="bg-gray-100">
    <BrowserRouter basename="" >
      
      <Navbar />
      <Routes>
          <Route path=""  element={<Home/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/courseDetail/:id" element={<CourseDetails/>} />
          <Route path="/course/:id/video/:videoId" element={<CoursePage/>} />  
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/addCourse" element={<CourseForm/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/singUp" element={<SignUp/>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
