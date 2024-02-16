const mongoose = require('mongoose');


const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: [String],
  correctAnswer: {
    type: String,
    required: true
  }
});
// Define schema for syllabus items
const syllabusSchema = new mongoose.Schema({
  video: String,
  topic: String,
  quiz:[questionSchema]
});

// Define schema for certification
const certificationSchema = new mongoose.Schema({
  type: String,
  cost: String,
  requirements: String
});




// Define main course schema
const courseSchema = new mongoose.Schema({
  course_title: { type: String, required: true },
  instructor: { type: String, required: true },
  description: { type: String, required: true },
  duration: String,
  start_date: Date,
  end_date: Date,
  language: String,
  level: String,
  topics_covered: [String],
  requirements: [String],
  syllabus: [syllabusSchema],
  learning_outcomes: [String],
  certification: certificationSchema
});
const CourseModel =mongoose.model('CourseModel', courseSchema);
module.exports ={CourseModel}
