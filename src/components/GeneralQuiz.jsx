import React, { useState } from "react";
import { GeneralQ } from "../Data/Data";
import { useNavigate } from "react-router-dom";

const ISTQBQAQuiz = () => {
  const questions = GeneralQ;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [feedback, setFeedback] = useState("");
  const [answerCorrect, setAnswerCorrect] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSubmit = () => {
    const isCorrect = userAnswers[currentQuestionIndex] === currentQuestion.correctAnswer;
    setFeedback(isCorrect ? "Correct!" : `Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`);
    setAnswerCorrect(isCorrect);
  };

  const handleNextQuestion = () => {
    setFeedback("");
    setAnswerCorrect(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleAnswerSelect = (option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = option;
    setUserAnswers(updatedAnswers);
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
    setFeedback("");
    setAnswerCorrect(false);
  };

  const navigate = useNavigate();
  return (
    <div className="flex flex-row h-screen font-poppins">
        <div className="w-1/4 bg-slate-800 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold text-lime-50 mb-4 text-center">Questions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {questions.map((_, index) => (
            <button
                key={index}
                onClick={() => handleQuestionClick(index)}
                className={`w-10 h-10 rounded-full font-semibold text-white ${
                userAnswers[index] === questions[index].correctAnswer
                    ? "bg-green-500"
                    : userAnswers[index] !== null
                    ? "bg-red-500"
                    : "bg-gray-400"
                } hover:opacity-80 transition-all`}
            >
                {index + 1}
            </button>
            ))}
        </div>
        </div>
      <div className="w-3/4 bg-blue-50 p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">QA Quiz</h2>
        <div className="bg-white p-4 rounded shadow-lg">
          <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>
          <div className="mb-4">
            {currentQuestion.options.map((option, idx) => (
              <label key={idx} className="block mb-2">
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  checked={userAnswers[currentQuestionIndex] === option}
                  onChange={() => handleAnswerSelect(option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
          {feedback && (
            <div
              className={`mt-4 p-2 border rounded text-center ${
                answerCorrect ? "bg-green-300 text-slate-800" : "bg-pink-300 text-slate-700"
              }`}
            >
              {feedback}
            </div>
          )}
          <div className="mt-4 gap-4 flex flex-row justify-center">
            <button
              onClick={handleAnswerSubmit}
              className="bg-pink-600 text-white p-2 rounded hover:bg-purple-400 transition-all"
            >
              Submit Answer
            </button>
            {answerCorrect && currentQuestionIndex < questions.length - 1 && (
              <button
                onClick={handleNextQuestion}
                className="bg-blue-600 text-white p-2 rounded hover:bg-green-400 transition-all"
              >
                Next Question
              </button>
            )}
          </div>
          <button
            className="mt-6 sm:absolute bottom-10 right-10 bg-purple-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition-all"
            onClick={() => navigate("/mood")}
          >
            Bored? Test my mood app, it's full of bugs!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ISTQBQAQuiz;
