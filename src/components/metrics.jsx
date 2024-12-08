import React, { useState } from "react";
import { InlineMath } from "react-katex";
import { useNavigate } from "react-router-dom";
import "katex/dist/katex.min.css";

const MetricsQuizGame = () => {
  const metrics = {
    totalTestCases: 200,
    executedTestCases: 160,
    passedTestCases: 140,
    failedTestCases: 20,
    blockedTestCases: 10,
    defectsFound: 25,
    defectsFixed: 22,
    defectsRejected: 3,
    postReleaseDefects: 5,
    customerSatisfactionScore: 4.5,
    automationCoverage: 70,
    truePositive: 50,
    trueNegative: 70,
    falsePositive: 10,
    falseNegative: 30,
  };

  const metricDescriptions = {
    totalTestCases: "The total number of test cases designed for this project.",
    executedTestCases: "The number of test cases that have been executed.",
    passedTestCases: "The number of test cases that passed during execution.",
    failedTestCases: "The number of test cases that failed during execution.",
    blockedTestCases: "The number of test cases that could not be executed due to blockers.",
    defectsFound: "The number of defects identified during testing.",
    defectsFixed: "The number of defects that have been fixed.",
    defectsRejected: "The number of reported defects that were rejected.",
    postReleaseDefects: "The number of defects found after release.",
    customerSatisfactionScore:
      "A score (1-5) reflecting customer satisfaction with the project.",
    automationCoverage:
      "The percentage of test cases automated compared to total test cases.",
    truePositive:
      "True Positives (TP): The number of positive cases correctly identified.",
    trueNegative:
      "True Negatives (TN): The number of negative cases correctly identified.",
    falsePositive:
      "False Positives (FP): The number of negative cases incorrectly identified as positive.",
    falseNegative:
      "False Negatives (FN): The number of positive cases incorrectly identified as negative.",
  };

  const calculatePercentage = (partial, total) =>
    total ? ((partial / total) * 100).toFixed(2) : "0.00";

  const calculateSensitivity = (TP, FN) =>
    TP + FN === 0 ? "0.00" : (TP / (TP + FN)).toFixed(2);

  const calculateSpecificity = (TN, FP) =>
    TN + FP === 0 ? "0.00" : (TN / (TN + FP)).toFixed(2);

  const questions = [
    {
      question: "1. What is the percentage of test cases executed?",
      formula: "Executed\\ Test\\ Cases \\div Total\\ Test\\ Cases \\times 100",
      correctAnswer: calculatePercentage(
        metrics.executedTestCases,
        metrics.totalTestCases
      ),
    },
    {
      question: "2. What is the percentage of test cases passed?",
      formula: "Passed\\ Test\\ Cases \\div Executed\\ Test\\ Cases \\times 100",
      correctAnswer: calculatePercentage(
        metrics.passedTestCases,
        metrics.executedTestCases
      ),
    },
    {
      question: "3. What is the defect density?",
      formula: "Defects\\ Found \\div Executed\\ Test\\ Cases",
      correctAnswer: (metrics.defectsFound / metrics.executedTestCases).toFixed(
        2
      ),
    },
    {
      question: "4. What is the defect removal efficiency (DRE)?",
      formula: "Defects\\ Fixed \\div Defects\\ Found \\times 100",
      correctAnswer: calculatePercentage(
        metrics.defectsFixed,
        metrics.defectsFound
      ),
    },
    {
      question: "5. What is the defect rejection ratio?",
      formula: "Defects\\ Rejected \\div Defects\\ Found \\times 100",
      correctAnswer: calculatePercentage(
        metrics.defectsRejected,
        metrics.defectsFound
      ),
    },
    {
      question: "6. What is the Sensitivity?",
      formula: "Sensitivity = \\frac{TP}{TP + FN}",
      correctAnswer: calculateSensitivity(
        metrics.truePositive,
        metrics.falseNegative
      ),
    },
    {
      question: "7. What is the Specificity?",
      formula: "Specificity = \\frac{TN}{TN + FP}",
      correctAnswer: calculateSpecificity(
        metrics.trueNegative,
        metrics.falsePositive
      ),
    },
    {
      question: "8. What is the customer satisfaction score?",
      formula: "A score (1-5)\\ reflecting\\ customer\\ satisfaction\\ with\\ the\\ project.",
      correctAnswer: metrics.customerSatisfactionScore.toFixed(1),
    },
    {
      question: "9. What is the automation coverage percentage?",
      formula: "Automation\\ Coverage \\div Total\\ Test\\ Cases \\times 100",
      correctAnswer: calculatePercentage(
        metrics.automationCoverage,
        metrics.totalTestCases
      ),
    },
    {
      question: "10. What is the post-release defect count?",
      formula: "The\\ number\\ of\\ defects\\ identified\\ after\\ the\\ product\\ release.",
      correctAnswer: metrics.postReleaseDefects.toFixed(0),
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [showFormula, setShowFormula] = useState(true);
  const [metricKey, setMetricKey] = useState("");

  const currentQuestion = questions[currentQuestionIndex];
  const navigate = useNavigate();

  const handleAnswerSubmit = () => {
    if (parseFloat(userAnswer).toFixed(0) === parseFloat(currentQuestion.correctAnswer).toFixed(0)) {
      setFeedback("Correct!");
      setAnswerCorrect(true);
    } else {
      setFeedback("Incorrect.");
      setAnswerCorrect(false);
    }
  };  

  const handleNextQuestion = () => {
    setUserAnswer("");
    setFeedback("");
    setAnswerCorrect(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleMetricClick = (key) => {
    setMetricKey(key);
    setModalContent(metricDescriptions[key]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent("");
    setMetricKey("");
  };

  const handleGoToQuestion = (index) => {
    setUserAnswer("");
    setFeedback(""); 
    setAnswerCorrect(false);
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="flex flex-col sm:flex-row h-max font-poppins">
      <div className="w-full sm:w-1/3 h-full bg-slate-800 p-4 text-white overflow-y-auto">
        <h2 className="text-xl font-bold text-center mb-4 text-lime-50">Metrics</h2>
        <ul className="space-y-3 font-poppins">
          {Object.entries(metrics).map(([key, value]) => (
            <li
              key={key}
              className="cursor-pointer hover:bg-slate-500 p-1"
              onClick={() => handleMetricClick(key)}
            >
              <strong className="text-lime-100">{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full sm:w-2/3 bg-blue-50 p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Metrics Quiz</h2>

        <p className="text-center text-sm sm:text-base mb-4">
          To answer the questions, use the metrics listed on the left. If you're not sure what a metric means, 
          you can click on any of the metrics to read more about them.
        </p>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-4">Questions</h4>
          <div className="flex flex-wrap sm:flex-nowrap space-x-4 justify-center sm:justify-start">
            {questions.map((q, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded ${currentQuestionIndex === index ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => handleGoToQuestion(index)}
              >
                Q{index + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow-lg">
          <h3 className="text-lg font-semibold">{currentQuestion.question}</h3>
          {showFormula && (
            <div className="mt-2">
              <InlineMath>{currentQuestion.formula}</InlineMath>
            </div>
          )}
          <button
            onClick={() => setShowFormula(!showFormula)}
            className="m-4 bg-transparent text-blue-600 p-2"
          >
            {showFormula ? "Hide Formula" : "Show Formula"}
          </button>

          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="border p-2 rounded mb-4 w-full sm:w-1/2"
            placeholder="Enter your answer"
          />

          <div className="flex flex-col sm:flex-row justify-center sm:justify-center items-center">
            <button
              onClick={handleAnswerSubmit}
              className="bg-green-600 text-white p-2 rounded mb-4 sm:mb-0 sm:mr-2"
            >
              Submit
            </button>
            {currentQuestionIndex < questions.length - 1 && (
              <button
                onClick={handleNextQuestion}
                className="bg-blue-600 text-white p-2 sm:ml-2 rounded mb-4 sm:mb-0"
              >
                Next
              </button>
            )}
          </div>

          {feedback && (
            <div className={`p-2 mt-2 text-center font-bold ${answerCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
              {feedback}
            </div>
          )}

          <button
            className="mt-6 sm:absolute bottom-10 right-10 bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition-all"
            onClick={() => navigate("/morequiza")}
          >
            Go to Next Section
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center font-poppins">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
              <h3 className="text-lg font-semibold mb-4">{metricKey}</h3>
              <p>{modalContent}</p>
              <button
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400 transition-all"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricsQuizGame;
