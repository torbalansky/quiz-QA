import React, { useState } from "react";
import { GeneralQ } from "../Data/Data";
import { useNavigate } from "react-router-dom";

const calculateStats = (userAnswers, questions) => {
  return userAnswers.reduce(
    (stats, answer, index) => {
      if (answer === questions[index].correctAnswer) {
        stats.correct += 1;
      } else if (answer !== null) {
        stats.wrong += 1;
      }
      return stats;
    },
    { correct: 0, wrong: 0 }
  );
};

const ISTQBQAQuiz = () => {
  const questions = GeneralQ;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [feedback, setFeedback] = useState("");
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [submittedAnswers, setSubmittedAnswers] = useState(Array(questions.length).fill(false));
  const [answeredQuestions, setAnsweredQuestions] = useState(Array(questions.length).fill(false));
  const [warningMessage, setWarningMessage] = useState("");

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSubmit = () => {
    if (!userAnswers[currentQuestionIndex]) {
      setWarningMessage("Please select an answer before submitting!");
      return;
    }
    
    setWarningMessage("");
    const isCorrect = userAnswers[currentQuestionIndex] === currentQuestion.correctAnswer;
    
    const updatedAnswered = [...answeredQuestions];
    updatedAnswered[currentQuestionIndex] = true;
    setAnsweredQuestions(updatedAnswered);
    
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = userAnswers[currentQuestionIndex];
    setUserAnswers(updatedAnswers);
    
    const updatedSubmitted = [...submittedAnswers];
    updatedSubmitted[currentQuestionIndex] = true;
    setSubmittedAnswers(updatedSubmitted);
    
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

  const areAllQuestionsAnswered = () => {
    return submittedAnswers.every(submitted => submitted === true);
  };

  const handleRetake = () => {
    setUserAnswers(Array(questions.length).fill(null));
    setSubmittedAnswers(Array(questions.length).fill(false));
    setAnsweredQuestions(Array(questions.length).fill(false));
    setCurrentQuestionIndex(0);
    setFeedback("");
    setAnswerCorrect(false);
  };

  return (
    <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row h-screen font-poppins">
      <div className="w-full md:w-1/2 bg-slate-800 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold text-lime-50 mb-4 text-center">Questions</h2>
        <div className="grid grid-cols-6 md:grid-cols-10 gap-2">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => handleQuestionClick(index)}
              className={`w-8 h-8 rounded-full font-semibold text-white ${
                submittedAnswers[index]
                  ? userAnswers[index] === questions[index].correctAnswer
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-slate-500"
              } hover:opacity-80 transition-all`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-slate-700 rounded-lg">
          <h3 className="text-lime-50 font-semibold mb-2">Statistics</h3>
          <div className="flex justify-between text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-lime-50">Correct: {calculateStats(userAnswers, questions).correct}</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-lime-50">Wrong: {calculateStats(userAnswers, questions).wrong}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/4 bg-blue-50 p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">QA Quiz</h2>
        {areAllQuestionsAnswered() ? (
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-6">Quiz Completed! 🎉</h2>
            <div className="mb-6">
              <p className="text-lg mb-4">Here are your final results:</p>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-500">
                    {calculateStats(userAnswers, questions).correct}
                  </p>
                  <p className="text-gray-600">Correct</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-500">
                    {calculateStats(userAnswers, questions).wrong}
                  </p>
                  <p className="text-gray-600">Wrong</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-500">
                    {((calculateStats(userAnswers, questions).correct / questions.length) * 100).toFixed(1)}%
                  </p>
                  <p className="text-gray-600">Score</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleRetake}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retake Quiz
            </button>
          </div>
        ) : (
          <div className="bg-white p-4 rounded shadow-lg">
            <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>
            <div className="mb-4">
              {currentQuestion.options.map((option, idx) => (
                <label 
                  key={idx} 
                  className={`block mb-2 ${
                    answeredQuestions[currentQuestionIndex] ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    value={option}
                    checked={userAnswers[currentQuestionIndex] === option}
                    onChange={() => handleAnswerSelect(option)}
                    disabled={answeredQuestions[currentQuestionIndex]}
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
              {feedback && currentQuestionIndex < questions.length - 1 && (
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
        )}
      </div>
    </div>
  );
};

export default ISTQBQAQuiz;
