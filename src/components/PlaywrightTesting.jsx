import React, { useState } from 'react';
import { PlaywrightQ } from '../Data/Data';
import { SiMicrosoft } from 'react-icons/si';
import { CoreConcepts } from '../Data/Data';
import ReactMarkdown from 'react-markdown';

const PlaywrightQuiz = () => {
  const [activeTab, setActiveTab] = useState('core');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(PlaywrightQ.length).fill(null));
  const [submittedAnswers, setSubmittedAnswers] = useState(Array(PlaywrightQ.length).fill(false));
  const [feedback, setFeedback] = useState("");
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(Array(PlaywrightQ.length).fill(false));
  const [warningMessage, setWarningMessage] = useState("");

  const currentQuestion = PlaywrightQ[currentQuestionIndex];

  const handleAnswerSelect = (option) => {
    if (answeredQuestions[currentQuestionIndex]) return;
    
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = option;
    setUserAnswers(newAnswers);
    setWarningMessage("");
  };

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
    
    const updatedSubmitted = [...submittedAnswers];
    updatedSubmitted[currentQuestionIndex] = true;
    setSubmittedAnswers(updatedSubmitted);
    
    setFeedback(isCorrect ? "Correct!" : `Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`);
    setAnswerCorrect(isCorrect);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < PlaywrightQ.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFeedback("");
      setAnswerCorrect(false);
    }
  };

  const handleRetake = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(PlaywrightQ.length).fill(null));
    setSubmittedAnswers(Array(PlaywrightQ.length).fill(false));
    setAnsweredQuestions(Array(PlaywrightQ.length).fill(false));
    setFeedback("");
    setAnswerCorrect(false);
    setWarningMessage("");
  };

  const calculateStats = () => {
    let correct = 0;
    let wrong = 0;
    
    submittedAnswers.forEach((submitted, index) => {
      if (submitted) {
        if (userAnswers[index] === PlaywrightQ[index].correctAnswer) {
          correct++;
        } else {
          wrong++;
        }
      }
    });
    
    return { correct, wrong };
  };

  const areAllQuestionsAnswered = () => {
    return submittedAnswers.every(answer => answer === true);
  };

  const tabContents = {
    core: {
      title: "Core Concepts",
      content: (
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <ReactMarkdown>
            {CoreConcepts.introduction.content.trim()}
          </ReactMarkdown>
        </div>
      ),
    },
    automation: {
      title: "Web Automation",
      content: (
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <ReactMarkdown>
            {CoreConcepts.automation.content.trim()}
          </ReactMarkdown>
        </div>
      ),
    },
    testing: {
      title: "Writing Tests",
      content: (
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <ReactMarkdown>
            {CoreConcepts.testing.content.trim()}
          </ReactMarkdown>
        </div>
      ),
    },
    performance: {
      title: "Performance",
      content: (
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <ReactMarkdown>
            {CoreConcepts.performance.content.trim()}
          </ReactMarkdown>
        </div>
      ),
    },
    learning: {
      title: "Learning & Documentation",
      content: (
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <ReactMarkdown>
            {CoreConcepts.learning.content.trim()}
          </ReactMarkdown>
        </div>
      ),
    },
    quiz: {
      title: "Quiz",
      content: (
        <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row h-screen font-serif">
          <div className="w-full md:w-[70%] bg-slate-800 p-2 overflow-y-auto">
            <h2 className="text-xl font-bold text-lime-50 mb-4 text-center">Questions</h2>
            <div className="grid grid-cols-6 sm:grid-cols-16 md:grid-cols-12 gap-2">
              {PlaywrightQ.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`w-8 h-8 rounded-full font-semibold text-white ${
                    submittedAnswers[index]
                      ? userAnswers[index] === PlaywrightQ[index].correctAnswer
                        ? "bg-green-500"
                        : "bg-red-500"
                      : "bg-gray-400"
                  } hover:opacity-80 transition-all`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-slate-700 rounded-lg">
              <div className="flex justify-between text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-lime-50">Correct: {calculateStats().correct}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-lime-50">Wrong: {calculateStats().wrong}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4 bg-blue-50 p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Playwright Quiz</h2>
            {areAllQuestionsAnswered() ? (
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-6">Quiz Completed! 🎉</h2>
                <div className="mb-6">
                  <p className="text-lg mb-4">Here are your final results:</p>
                  <div className="flex justify-center gap-8">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-500">
                        {calculateStats().correct}
                      </p>
                      <p className="text-gray-600">Correct</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-red-500">
                        {calculateStats().wrong}
                      </p>
                      <p className="text-gray-600">Wrong</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-500">
                        {((calculateStats().correct / PlaywrightQ.length) * 100).toFixed(1)}%
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
                      className={`block mb-2 ${answeredQuestions[currentQuestionIndex] ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
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

                {warningMessage && (
                  <div className="text-red-500 text-center p-2 bg-red-50 rounded-md mb-2">
                    {warningMessage}
                  </div>
                )}

                <div className="mt-4 gap-4 flex flex-row justify-center">
                  <button
                    onClick={handleAnswerSubmit}
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-400 transition-all"
                  >
                    Submit Answer
                  </button>
                  {feedback && currentQuestionIndex < PlaywrightQ.length - 1 && (
                    <button
                      onClick={handleNextQuestion}
                      className="bg-green-600 text-white p-2 rounded hover:bg-green-400 transition-all"
                    >
                      Next Question
                    </button>
                  )}
                </div>

                {feedback && (
                  <div className={`mt-4 p-3 rounded ${answerCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {feedback}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex text-sm mb-6 border-b overflow-x-auto">
        {Object.keys(tabContents).map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 whitespace-nowrap font-semibold ${
              activeTab === tab 
                ? "border-b-2 border-blue-500 text-purple-600 text-lg" 
                : "text-slate-700 hover:text-slate-800 transition-colors"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tabContents[tab].title}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg font-serif">
        {activeTab === 'quiz' ? (
          tabContents[activeTab].content
        ) : (
          <div className="p-6">
            <h2 className="text-xl font-bold text-blue-600 border-b-4 border-blue-300 pb-2 mb-6">
              {tabContents[activeTab].title}
            </h2>
            {tabContents[activeTab].content}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaywrightQuiz;
