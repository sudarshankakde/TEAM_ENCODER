import React, { useState } from 'react';
import '../statics/courseForm.css'
export default function CourseForm (){
  const [formData, setFormData] = useState({
    course_title: '',
    instructor: '',
    description: '',
    duration: '',
    language: '',
    level: '',
    topics_covered: [''],
    requirements: [''],
    syllabus: [
      {
        topic: '',
        quiz: [
          {
            question: '',
            options: ['', '', '', ''],
            correctAnswer: ''
          }
        ]
      }
    ],
    learning_outcomes: [''],
    certification: {
      type: '',
      cost: '',
      requirements: ''
    }
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'topics_covered' || name === 'requirements') {
      const newValues = [...formData[name]];
      newValues[index] = value;
      setFormData({ ...formData, [name]: newValues });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleQuizChange = (e, questionIndex, optionIndex) => {
    const { name, value } = e.target;
    const newSyllabus = [...formData.syllabus];
    newSyllabus[questionIndex].quiz[0][name][optionIndex] = value;
    setFormData({ ...formData, syllabus: newSyllabus });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data here
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Upload Course</h2>
      <form onSubmit={handleSubmit}>
        {/* Course Details */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Course Title</label>
          <input
            type="text"
            name="course_title"
            value={formData.course_title}
            onChange={handleChange}
            className="form-input w-full"
          />
        </div>
        {/* Other fields go here */}
        {/* Example: Instructor */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Instructor</label>
          <input
            type="text"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            className="form-input w-full"
          />
        </div>
        {/* Example: Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-textarea w-full"
            rows="3"
          />
        </div>
        {/* Example: Duration */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="form-input w-full"
          />
        </div>
        {/* Example: Language */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Language</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="form-input w-full"
          />
        </div>
        {/* Example: Level */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Level</label>
          <input
            type="text"
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="form-input w-full"
          />
        </div>
        {/* Example: Topics Covered */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Topics Covered</label>
          {formData.topics_covered.map((topic, index) => (
            <input
              key={index}
              type="text"
              name="topics_covered"
              value={topic}
              onChange={(e) => handleChange(e, index)}
              className="form-input w-full mb-2"
              placeholder="Enter topic"
            />
          ))}
          <button
            type="button"
            onClick={() => setFormData({ ...formData, topics_covered: [...formData.topics_covered, ''] })}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Add Topic
          </button>
        </div>
        {/* Example: Requirements */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Requirements</label>
          {formData.requirements.map((requirement, index) => (
            <input
              key={index}
              type="text"
              name="requirements"
              value={requirement}
              onChange={(e) => handleChange(e, index)}
              className="form-input w-full mb-2"
              placeholder="Enter requirement"
            />
          ))}
          <button
            type="button"
            onClick={() => setFormData({ ...formData, requirements: [...formData.requirements, ''] })}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Add Requirement
          </button>
        </div>
        {/* Example: Syllabus */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Syllabus</label>
          {formData.syllabus.map((topic, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                name="topic"
                value={topic.topic}
                onChange={(e) => handleQuizChange(e, index)}
                className="form-input w-full mb-2"
                placeholder="Enter topic"
              />
              {/* Quiz */}
              {topic.quiz.map((question, qIndex) => (
                <div key={qIndex} className="mb-2">
                  <label className="block text-gray-700 font-semibold mb-1">Question</label>
                  <input
                    type="text"
                    name="question"
                    value={question.question}
                    onChange={(e) => handleQuizChange(e, index, qIndex)}
                    className="form-input w-full mb-1"
                    placeholder="Enter question"
                  />
                  {/* Options */}
                  {question.options.map((option, oIndex) => (
                    <input
                      key={oIndex}
                      type="text"
                      name="options"
                      value={option}
                      onChange={(e) => handleQuizChange(e, index, qIndex)}
                      className="form-input w-full mb-1"
                      placeholder={`Enter option ${oIndex + 1}`}
                    />
                  ))}
                  {/* Correct Answer */}
                  <label className="block text-gray-700 font-semibold mb-1">Correct Answer</label>
                  <select
                    name="correctAnswer"
                    value={question.correctAnswer}
                    onChange={(e) => handleQuizChange(e, index, qIndex)}
                    className="form-select w-full mb-2"
                  >
                    {question.options.map((option, oIndex) => (
                      <option key={oIndex} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}
              {/* Add Quiz */}
              <button
                type="button"
                onClick={() => setFormData({ ...formData, syllabus: [...formData.syllabus, { topic: '', quiz: [{ question: '', options: ['', '', '', ''], correctAnswer: '' }] }] })}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Add Quiz
              </button>
            </div>
          ))}
        </div>
        {/* Learning Outcomes */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Learning Outcomes</label>
          {formData.learning_outcomes.map((outcome, index) => (
            <input
              key={index}
              type="text"
              name="learning_outcomes"
              value={outcome}
              onChange={(e) => handleChange(e, index)}
              className="form-input w-full mb-2"
              placeholder="Enter learning outcome"
            />
          ))}
          <button
            type="button"
            onClick={() => setFormData({ ...formData, learning_outcomes: [...formData.learning_outcomes, ''] })}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Add Learning Outcome
          </button>
        </div>
     </form>
     </div>  
)}