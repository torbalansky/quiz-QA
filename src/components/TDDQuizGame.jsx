import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { tddExercises } from '../Data/Data';

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

const TDDQuizGame = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [feedback, setFeedback] = useState('');
  const [exerciseCompleted, setExerciseCompleted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    setShowMenu(false);
  });

  const currentExerciseData = tddExercises[currentExercise];
  const currentStepData = currentExerciseData.steps[currentStep];

  const validateAnswers = () => {
    const blanks = currentStepData.blanks;
    return blanks.every(blank => 
      selectedAnswers[blank.id] === blank.correct
    );
  };

  const handleAnswerSelect = (blankId, value) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [blankId]: value
    }));
  };

  const moveToNextExercise = () => {
    if (currentExercise < tddExercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setCurrentStep(0);
      setSelectedAnswers({});
      setFeedback('');
      setExerciseCompleted(false);
    }
  };

  const handleComplete = () => {
    if (validateAnswers()) {
      if (currentStep < currentExerciseData.steps.length - 1) {
        setCurrentStep(currentStep + 1);
        setSelectedAnswers({});
        setFeedback(`Good job! Moving to ${currentExerciseData.steps[currentStep + 1].type}`);
      } else {
        setExerciseCompleted(true);
        setFeedback('Congratulations! Exercise completed. Ready for the next one!');
      }
    } else {
      setFeedback('Try again. Check your selections.');
    }
  };

  const renderCodeTemplate = () => {
    let template = currentStepData.template;
    currentStepData.blanks.forEach(blank => {
      const selectedValue = selectedAnswers[blank.id] || '____';
      template = template.replace(`[${blank.id}]`, selectedValue);
    });
    return template;
  };

  const handleExerciseSelect = (index) => {
    setCurrentExercise(index);
    setCurrentStep(0);
    setSelectedAnswers({});
    setFeedback('');
    setExerciseCompleted(false);
    setShowMenu(false);
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 relative pb-16">
      <div className="bg-white shadow-md p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-xl font-bold text-center sm:text-left">TDD Practice Arena</h1>
          <div ref={menuRef} className="relative w-full sm:w-auto">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full sm:w-auto"
            >
              Select Exercise
            </button>
            
            {showMenu && (
              <div className="absolute top-12 right-0 left-0 sm:left-auto bg-white shadow-lg rounded-lg p-4 z-50 w-full sm:w-80">
                <h2 className="text-lg font-semibold mb-2">Choose an Exercise:</h2>
                <div className="space-y-2">
                  {tddExercises.map((exercise, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleExerciseSelect(index);
                        setShowMenu(false);
                      }}
                      className={`w-full text-left p-2 rounded hover:bg-gray-100 transition-colors ${
                        currentExercise === index ? 'bg-blue-100' : ''
                      }`}
                    >
                      {index + 1}. {exercise.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 sm:p-6 font-poppins">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold">
                {currentExerciseData.title} - {currentStepData.type}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {currentExerciseData.description}
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                <h4 className="text-blue-800 font-semibold mb-2">Jest Testing Tips:</h4>
                <pre className="whitespace-pre-wrap text-sm text-blue-700 font-mono">
                  {currentExerciseData.codeNote}
                </pre>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold">Requirements:</h4>
              <ul className="list-disc pl-5 text-sm sm:text-base">
                {currentExerciseData.requirements.map((req, index) => (
                  <li key={index} className="mb-1">{req}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold">Example Behavior:</h4>
              <div className="bg-gray-50 p-3 sm:p-4 rounded text-sm sm:text-base">
                {currentExerciseData.testCases.map((test, index) => (
                  <div key={index} className="mb-2">
                    <span className="font-medium">{test.description}:</span>
                    <br />
                    <span className="text-sm">Input: {test.input} → Expected: <span className="font-mono">{test.expected.toString()}</span></span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold">Hints:</h4>
              <div className="bg-blue-50 p-3 sm:p-4 rounded">
                {currentExerciseData.hints.map((hint, index) => (
                  <div key={index} className="flex items-start space-x-2 mb-2 text-sm sm:text-base">
                    <span className="text-blue-500">💡</span>
                    <span>{hint}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">
                Exercise {currentExercise + 1} of {tddExercises.length}
              </h3>
            </div>

            <pre className="w-full h-48 sm:h-64 font-mono text-sm p-3 sm:p-4 border rounded bg-gray-50 overflow-auto">
              {renderCodeTemplate()}
            </pre>

            <div className="mt-4 space-y-2">
              {currentStepData.blanks.map((blank, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  <label className="font-mono text-sm sm:w-24">{blank.id}:</label>
                  <select
                    value={selectedAnswers[blank.id] || ''}
                    onChange={(e) => handleAnswerSelect(blank.id, e.target.value)}
                    className="border rounded p-1 w-full sm:w-auto text-sm"
                  >
                    <option value="">Select...</option>
                    {blank.options.map((option, i) => (
                      <option key={i} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">
              <button
                onClick={handleComplete}
                className="bg-blue-500 text-white px-4 py-2 rounded text-sm sm:text-base w-full sm:w-auto"
              >
                {currentStep < currentExerciseData.steps.length - 1 ? 'Next Step' : 'Complete'}
              </button>
              
              {exerciseCompleted && (
                <button
                  onClick={moveToNextExercise}
                  className="bg-green-500 text-white px-4 py-2 rounded text-sm sm:text-base w-full sm:w-auto"
                >
                  Next Exercise
                </button>
              )}
              
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setSelectedAnswers({});
                  setFeedback('');
                  setExerciseCompleted(false);
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded text-sm sm:text-base w-full sm:w-auto"
              >
                Reset
              </button>
            </div>

            {feedback && (
              <div className={`mt-4 p-3 sm:p-4 rounded text-sm sm:text-base ${
                feedback.includes('Congratulations') ? 'bg-green-100' : 'bg-yellow-100'
              }`}>
                {feedback}
              </div>
            )}

            <div className="mt-4 bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / currentExerciseData.steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <button
          className="bg-purple-700 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-600 transition-all flex items-center space-x-2"
          onClick={() => navigate("/ai-qa")}
        >
          <span>Bored? Learn more about AI in QA!</span>
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
    
  );
};

export default TDDQuizGame;