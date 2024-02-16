const express = require('express');
const connectDB = require('./db/conn');
const cors = require('cors');
const { UploadCourse, TeacherSignUp, StudentSignUp, TeacherSignIn, StudentSignIn, GetCourse } = require('./db/controller');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
// apis

app.post('/uploadcourse', UploadCourse);
app.post("/teacher/signup",TeacherSignUp);
app.post("/student/signup",StudentSignUp);
app.post("/teacher/signin",TeacherSignIn);
app.post("/student/signin",StudentSignIn);
app.get("/allcources",GetCourse)
connectDB()

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});