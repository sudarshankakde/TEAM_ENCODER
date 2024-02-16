
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { TeacherModel } = require('./schema/teacher');
const { StudentModel } = require('./schema/student');
const { CourseModel } = require('./schema/course');






//to upload course

 const UploadCourse=async(req,res) => {
    try {
        const courseData = req.body;
        const course=new CourseModel(req.body);
        await course.save();
        res.status(201).json({ message: 'Course data uploaded successfully', courseData });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

// to get all corcess
 const GetCourse=async(req,res) => {
    try {
        const courses= await CourseModel.find();
        res.status(201).json({ courses});
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

const GetCourseByid=async(req,res) => {
 let id= req.params.id;
  try {
      const courses= await CourseModel.findById(id);
      res.status(201).json(courses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
}

// Sign up for students
 const StudentSignUp = async (req, res) => {
  try {
    const { email, password, name, studentId } = req.body;
    const existingStudent = await StudentModel.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: 'Student already exists' });
    }
  
    const newStudent = new StudentModel({ email, password, name, studentId });
    await newStudent.save();
    res.status(201).json({ message: 'Student signed up successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Sign up for teachers
 const TeacherSignUp = async (req, res) => {
  try {
    const { email, password, name, teacherId } = req.body;
    const existingTeacher = await TeacherModel.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ message: 'Teacher already exists' });
    }
    const newTeacher = new TeacherModel({ email, password, name, teacherId });
    await newTeacher.save();
    res.status(201).json({ message: 'Teacher signed up successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Sign in for students
 const StudentSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await StudentModel.findOne({ email:email,password:password });
    if (student) {
      return res.status(200).json({ message: 'login succesful',data:student });
    }else{
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    // const isPasswordValid = await bcrypt.compare(password, student.password);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Sign in for teachers
 const TeacherSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const teacher = await TeacherModel.findOne({ email });
    if (teacher) {
      return res.status(404).json({ message: 'Teacher not found',data: teacher});
    }else{
      return res.status(401).json({ message: 'Invalid credentials' });
    } 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports={TeacherSignIn,StudentSignIn,TeacherSignUp,StudentSignUp,UploadCourse,GetCourse,GetCourseByid}