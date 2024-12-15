import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { QADataSTLC } from '../Data/Data';
import { useNavigate, Link } from 'react-router-dom';
import Modal from './Modal';
import { helpModalData } from '../Data/Data';
import { STLCQuizData } from '../Data/Data';

const ItemType = {
  CARD: 'card',
};

const DraggableCard = ({ card }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.CARD,
    item: { id: card.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="bg-white border flex justify-center flex-col border-gray-300 p-3 m-2 rounded cursor-pointer shadow"
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: '150px',
        height: '100px',
        textAlign: 'center',
      }}
    >
      <div className="flex justify-center mb-2 text-2xl text-purple-900">{card.data.icon}</div>
      <h4 className="font-poppins text-md">{card.data.title}</h4>
    </div>
  );
};

const DropZone = ({ index, onDrop, currentCard, onReturn }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.CARD,
    drop: (item) => onDrop(item, index),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`border-dashed border-2 p-4 m-2 rounded h-32 w-36 flex items-center justify-center ${
        isOver ? 'bg-lime-100' : 'bg-gray-100'
      }`}
    >
      {currentCard ? (
        <div
          className="text-center cursor-pointer"
          onClick={() => onReturn(currentCard, index)}
        >
          <div className="flex justify-center mb-2 text-xl text-purple-900">{currentCard.data.icon}</div>
          <h4 className="text-sm font-bold">{currentCard.data.title}</h4>
          <p className="text-xs text-purple-500">(Click to return)</p>
        </div>
      ) : (
        <p className="text-gray-400">Drop Here</p>
      )}
    </div>
  );
};

const QuizSTLC = () => {
  const [activeTab, setActiveTab] = useState('theory');
  const initialCards = [...QADataSTLC].sort(() => Math.random() - 0.5);
  const [draggableCards, setDraggableCards] = useState(initialCards);
  const [dropZones, setDropZones] = useState(Array(QADataSTLC.length).fill(null));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(STLCQuizData.length).fill(null));
  const [submittedAnswers, setSubmittedAnswers] = useState(Array(STLCQuizData.length).fill(false));
  const [feedback, setFeedback] = useState("");
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(Array(STLCQuizData.length).fill(false));
  const [warningMessage, setWarningMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDrop = (item, zoneIndex) => {
    if (dropZones[zoneIndex]) return;

    const card = draggableCards.find((card) => card.id === item.id);
    setDropZones((zones) => {
      const newZones = [...zones];
      newZones[zoneIndex] = card;
      return newZones;
    });
    setDraggableCards((cards) => cards.filter((card) => card.id !== item.id));
  };

  const handleReturn = (card, zoneIndex) => {
    setDraggableCards((cards) => [...cards, card]);
    setDropZones((zones) => {
      const newZones = [...zones];
      newZones[zoneIndex] = null;
      return newZones;
    });
  };

  const validateOrder = () => {
    const currentOrder = dropZones.map((zone) => (zone ? zone.id : null)).join(',');
    const correctOrder = QADataSTLC.map((node) => node.id).join(',');

    if (currentOrder === correctOrder) {
      setShowSuccess(true);
    } else {
      alert('Incorrect Order. Please Try Again.');
    }
  };

  const resetGame = () => {
    setDraggableCards(initialCards);
    setDropZones(Array(QADataSTLC.length).fill(null));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
    const isCorrect = userAnswers[currentQuestionIndex] === STLCQuizData[currentQuestionIndex].correctAnswer;
    
    const updatedAnswered = [...answeredQuestions];
    updatedAnswered[currentQuestionIndex] = true;
    setAnsweredQuestions(updatedAnswered);
    
    const updatedSubmitted = [...submittedAnswers];
    updatedSubmitted[currentQuestionIndex] = true;
    setSubmittedAnswers(updatedSubmitted);
    
    setFeedback(isCorrect ? "Correct!" : `Incorrect. The correct answer is: ${STLCQuizData[currentQuestionIndex].correctAnswer}`);
    setAnswerCorrect(isCorrect);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < STLCQuizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFeedback("");
      setAnswerCorrect(false);
    }
  };

  const calculateStats = () => {
    let correct = 0;
    let wrong = 0;
    
    submittedAnswers.forEach((submitted, index) => {
      if (submitted) {
        if (userAnswers[index] === STLCQuizData[index].correctAnswer) {
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

  const handleRetake = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(STLCQuizData.length).fill(null));
    setSubmittedAnswers(Array(STLCQuizData.length).fill(false));
    setAnsweredQuestions(Array(STLCQuizData.length).fill(false));
    setFeedback("");
    setAnswerCorrect(false);
    setWarningMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="flex mb-6 border-b text-center flex-row justify-center">
        <button
          onClick={() => setActiveTab('theory')}
          className={`px-6 py-2 font-semibold transition-all duration-300 ${
            activeTab === 'theory'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
        >
          Theory
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-6 py-2 font-semibold transition-all duration-300 ${
            activeTab === 'quiz'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
        >
          Quiz
        </button>
        <button
          onClick={() => setActiveTab('dragdrop')}
          className={`px-6 py-2 font-semibold transition-all duration-300 ${
            activeTab === 'dragdrop'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
        >
          Practice Task
        </button>
      </div>

      {activeTab === 'theory' && (
        <div className="p-6 bg-white rounded-lg shadow-lg font-serif">
          <h2 className="text-2xl font-bold mb-6">Software Testing Life Cycle (STLC)</h2>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">What is STLC?</h3>
            <p className="text-gray-700 mb-4">
              The Software Testing Life Cycle (STLC) is a systematic approach to testing software. 
              It consists of specific steps that need to be executed in a specific order to ensure 
              the quality of the software being tested. Each phase has specific goals and deliverables.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">STLC Phases</h3>
            
            <div className="space-y-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold text-purple-900 mb-2">1. Requirement Analysis</h4>
                <p className="text-gray-700">
                  In this phase, the QA team studies the requirements from a testing point of view to identify testable requirements.
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Review requirements documents</li>
                  <li>Identify types of tests to be performed</li>
                  <li>Gather details about testing priorities and focus</li>
                  <li>Prepare Requirement Traceability Matrix (RTM)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">2. Test Planning</h4>
                <p className="text-gray-700">
                  This phase involves defining the test strategy and creating detailed test plans.
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Estimate effort and cost of testing</li>
                  <li>Determine test tools and environment</li>
                  <li>Define test objectives and scope</li>
                  <li>Create test schedule and resource planning</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-900 mb-2">3. Test Case Development</h4>
                <p className="text-gray-700">
                  The team creates detailed test cases and test scripts that will be used during testing.
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Create test cases and test scripts</li>
                  <li>Create test data</li>
                  <li>Review and baseline test cases</li>
                  <li>Create test case traceability matrix</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-900 mb-2">4. Test Environment Setup</h4>
                <p className="text-gray-700">
                  Setting up the software and hardware environment needed for test execution.
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Understand architecture and environment setup</li>
                  <li>Setup test environment and test data</li>
                  <li>Perform smoke test on the build</li>
                  <li>Environment readiness sign-off</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold text-red-900 mb-2">5. Test Execution</h4>
                <p className="text-gray-700">
                  The actual testing phase where test cases are executed.
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Execute tests as per plan</li>
                  <li>Document test results</li>
                  <li>File bugs and verify fixes</li>
                  <li>Retest and regression testing</li>
                </ul>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-bold text-pink-900 mb-2">6. Test Cycle Closure</h4>
                <p className="text-gray-700">
                  Evaluate cycle completion criteria and complete testing documentation.
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Test closure report preparation</li>
                  <li>Test metrics analysis</li>
                  <li>Document lessons learned</li>
                  <li>Sign-off on testing phase</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Key Deliverables</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="list-disc ml-6 text-gray-700">
                <li><span className="font-semibold">Requirement Phase:</span> RTM, Automation Feasibility Report</li>
                <li><span className="font-semibold">Planning Phase:</span> Test Plan, Test Strategy</li>
                <li><span className="font-semibold">Development Phase:</span> Test Cases, Test Scripts</li>
                <li><span className="font-semibold">Execution Phase:</span> Test Results, Defect Reports</li>
                <li><span className="font-semibold">Closure Phase:</span> Test Closure Report, Test Metrics</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Best Practices</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="list-disc ml-6 text-gray-700">
                <li>Ensure requirements are clear and testable before starting</li>
                <li>Maintain traceability throughout the cycle</li>
                <li>Follow a risk-based testing approach</li>
                <li>Automate regression test cases where possible</li>
                <li>Regular monitoring and reporting of testing progress</li>
                <li>Document lessons learned for future test cycles</li>
              </ul>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row h-screen">
          <div className="w-full md:w-1/4 bg-slate-800 p-4 overflow-y-auto">
            <h2 className="text-xl font-bold text-lime-50 mb-4 text-center">Questions</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 gap-2">
              {STLCQuizData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`w-10 h-10 rounded-full font-semibold text-white ${
                    submittedAnswers[index]
                      ? userAnswers[index] === STLCQuizData[index].correctAnswer
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
              <h3 className="text-lime-50 font-semibold mb-2">Statistics</h3>
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
            <h2 className="text-2xl font-bold mb-6 text-center">STLC Quiz</h2>
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
                        {((calculateStats().correct / STLCQuizData.length) * 100).toFixed(1)}%
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
                <h3 className="text-lg font-semibold mb-4">{STLCQuizData[currentQuestionIndex].question}</h3>
                <div className="mb-4">
                  {STLCQuizData[currentQuestionIndex].options.map((option, idx) => (
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
                
                {warningMessage && (
                  <div className="text-red-500 text-center p-2 bg-red-50 rounded-md mb-2">
                    {warningMessage}
                  </div>
                )}
                
                <div className="mt-4 gap-4 flex flex-row justify-center">
                  <button
                    onClick={handleAnswerSubmit}
                    className="bg-pink-600 text-white p-2 rounded hover:bg-purple-400 transition-all"
                  >
                    Submit Answer
                  </button>
                  {feedback && currentQuestionIndex < STLCQuizData.length - 1 && (
                    <button
                      onClick={handleNextQuestion}
                      className="bg-blue-600 text-white p-2 rounded hover:bg-green-400 transition-all"
                    >
                      Next Question
                    </button>
                  )}
                </div>
                
                {feedback && (
                  <div className={`mt-4 p-3 rounded ${
                    answerCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {feedback}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'dragdrop' && (
        <DndProvider backend={HTML5Backend}>
          {!showSuccess ? (
            <div className="p-6">
              <h1 className="text-center text-md md:text-xl font-bold mb-6 mt-4">
                Software Test Life Cycle (STLC)
              </h1>

              <Modal isOpen={isModalOpen} onClose={closeModal} modalData={helpModalData} />

              <h2 className="font-poppins md:px-32 px-8 py-4">
                In this task, you will need to put in the right order the stages of the STLC. 
                Drag and drop the cards and place them in the fields below. Once you're ready, click 
                the 'Submit Order' button.
                <button
                  onClick={openModal}
                  className="bg-blue-500 text-slate-100 py-1 px-2 m-2 rounded-md hover:bg-blue-700 transition-all duration-300"
                >
                  Need Help?
                </button>
              </h2>

              <div className="flex flex-wrap mb-4 justify-center">
                {draggableCards.map((card) => (
                  <DraggableCard key={card.id} card={card} />
                ))}
              </div>

              <div className="flex flex-wrap justify-center">
                {dropZones.map((zone, index) => (
                  <DropZone
                    key={index}
                    index={index}
                    onDrop={handleDrop}
                    currentCard={zone}
                    onReturn={handleReturn}
                  />
                ))}
              </div>

              <div className="flex justify-center mb-6 mt-4 gap-4">
                <button
                  onClick={validateOrder}
                  className="bg-slate-600 text-lime-200 p-2 rounded w-40 hover:bg-lime-300 hover:text-slate-500 transition-all duration-300"
                >
                  Submit Order
                </button>
                <button
                  onClick={resetGame}
                  className="bg-violet-400 text-lime-200 p-2 rounded w-40 hover:bg-pink-400 transition-all duration-300"
                >
                  Start Over
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
              <div className="text-4xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-green-600 mb-4">Great Job!</h2>
              <p className="text-gray-600 mb-6 text-center">
                You've successfully completed the STLC ordering task! Would you like to try another challenge?
              </p>
              <div className="flex gap-4">
                <Link
                  to="/quizprinciples"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next Challenge
                </Link>
                <button
                  onClick={() => {
                    setShowSuccess(false);
                    resetGame();
                  }}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Try Again
                </button>
                <Link
                  to="/"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Back to Dashboard
                </Link>
              </div>
            </div>
          )}
        </DndProvider>
      )}
    </div>
  );
};

export default QuizSTLC;
