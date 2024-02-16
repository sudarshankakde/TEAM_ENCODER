import React, { useState } from "react";

function QuizApp(props) {
  const quizData = props.data;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };
  const handleNextQuestion = () => {
    if (selectedAnswer == quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
    setSelectedAnswer("");
  };

  const handleSubmitQuiz = () => {
    if (selectedAnswer == quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setQuizCompleted(true);
  };

  return (
    <div className="max-w-[100%] mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      {quizCompleted ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Quiz completed!</h2>
          <p>
            Your score: {score}/{quizData.length}
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">
            Question {currentQuestion + 1}
          </h2>
          <p className="mb-4 text-lg">{quizData[currentQuestion].question}</p>
          <ul className="mb-4">
            {quizData[currentQuestion].options.map((option, index) => (
              <li key={index} className="mb-2">
                <label className="flex flex-row items-start ">
                  <input
                    type="radio"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleAnswerSelect(option)}
                    className="form-radio text-indigo-600 h-5 w-5 mr-2"
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          {currentQuestion !== quizData.length - 1 && (
            <button
              onClick={handleNextQuestion}
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 m-2"
            >
              Next
            </button>
          )}

          {currentQuestion === quizData.length - 1 && (
            <button
              onClick={handleSubmitQuiz}
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 m-2"
            >
              Submit
            </button>
          )}
          {currentQuestion >= 1 && (
            <button
              onClick={handlePreviousQuestion}
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 m-2"
            >
              Prev
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizApp;
