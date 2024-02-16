const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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

  }
});
const StudentModel=mongoose.model('StudentModel', studentSchema);
module.exports = {StudentModel}
