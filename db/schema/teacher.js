const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  email: {
    type: String,
  },
   
  password: {
    type: String,

  },
  name: {
    type: String,
   
  },
  studentId: {
    type: String,
   
    unique: true // Ensure studentId is unique
  }
});
const TeacherModel=mongoose.model('TeacherModel', TeacherSchema);
module.exports = {TeacherModel}
