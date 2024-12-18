import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Modal from '../components/Modal';
import { QADataPrinciples, helpModalDataP, QADataPrinciplesQuiz } from '../Data/Data';
import { useNavigate, Link } from 'react-router-dom';

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
      data-testid={`principles-card-${card.id}`}
      className="bg-white border flex justify-center flex-col border-gray-300 p-2 m-1 rounded cursor-pointer shadow"
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: '200px',
        textAlign: 'center',
        fontSize: '12px',
        fontFamily: 'Poppins',
      }}
    >
      <h4 className="font-bold">{card.title}</h4>
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
      data-testid={`principles-drop-zone-${index}`}
      className={`border-dashed border-2 p-4 m-1 rounded h-20 flex items-center justify-center ${
        isOver ? 'bg-lime-100' : 'bg-gray-100'
      }`}
    >
      {currentCard ? (
        <div data-testid={`dropped-principle-${currentCard.id}`} onClick={() => onReturn(currentCard, index)} className="cursor-pointer w-20 sm:w-40 flex flex-col justify-center">
          <h4 data-testid={`dropped-title-${currentCard.id}`} className="text-[8px] sm:text-xs font-poppins font-semibold mb-2">{currentCard.title}</h4>
          <p data-testid="return-hint" className="text-[8px] sm:text-xs text-purple-500">(Click to return)</p>
        </div>
      ) : (
        <p data-testid={`empty-drop-zone-${index}`} className="text-gray-400">Drop Here</p>
      )}
    </div>
  );
};

const TestingPrinciples = () => {
  const [activeTab, setActiveTab] = useState('theory');
  const [draggableCards, setDraggableCards] = useState(QADataPrinciples);
  const [dropZones, setDropZones] = useState(Array(7).fill(null));
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(QADataPrinciplesQuiz.length).fill(null));
  const [submittedAnswers, setSubmittedAnswers] = useState(Array(QADataPrinciplesQuiz.length).fill(false));
  const [feedback, setFeedback] = useState("");
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(Array(QADataPrinciplesQuiz.length).fill(false));
  const [warningMessage, setWarningMessage] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

  const validateTask = () => {
    const selectedIds = dropZones.map((zone) => (zone ? zone.id : null));
    const correctIds = QADataPrinciples.filter((principle) => principle.correct).map((p) => p.id);

    if (JSON.stringify(selectedIds.sort()) === JSON.stringify(correctIds.sort())) {
      setIsTaskCompleted(true);
    } else {
      alert('Incorrect selection. Please try again.');
    }
  };

  const resetGame = () => {
    setDraggableCards(QADataPrinciplesQuiz);
    setDropZones(Array(7).fill(null));
    setIsTaskCompleted(false);
  };

  const navigate = useNavigate();

  const calculateStats = () => {
    let correct = 0;
    let wrong = 0;
    submittedAnswers.forEach((isSubmitted, index) => {
      if (isSubmitted) {
        if (userAnswers[index] === QADataPrinciplesQuiz[index].correctAnswer) {
          correct++;
        } else {
          wrong++;
        }
      }
    });
    return { correct, wrong };
  };

  const areAllQuestionsAnswered = () => {
    return answeredQuestions.every(answered => answered);
  };

  const handleAnswerSelect = (option) => {
    if (answeredQuestions[currentQuestionIndex]) return;
    
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = option;
    setUserAnswers(newAnswers);
    setWarningMessage("");
  };

  const handleAnswerSubmit = () => {
    if (!userAnswers[currentQuestionIndex]) {
      setWarningMessage("Please select an answer before submitting.");
      return;
    }

    const isCorrect = userAnswers[currentQuestionIndex] === QADataPrinciplesQuiz[currentQuestionIndex].correctAnswer;
    
    setAnswerCorrect(isCorrect);
    setFeedback(isCorrect ? "Correct! Well done!" : "Incorrect. Try again!");
    
    const newSubmittedAnswers = [...submittedAnswers];
    newSubmittedAnswers[currentQuestionIndex] = true;
    setSubmittedAnswers(newSubmittedAnswers);

    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestionIndex] = true;
    setAnsweredQuestions(newAnsweredQuestions);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QADataPrinciplesQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFeedback("");
    }
  };

  const handleRetake = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(QADataPrinciplesQuiz.length).fill(null));
    setSubmittedAnswers(Array(QADataPrinciplesQuiz.length).fill(false));
    setAnsweredQuestions(Array(QADataPrinciplesQuiz.length).fill(false));
    setFeedback("");
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
          onClick={() => setActiveTab('practice')}
          className={`px-6 py-2 font-semibold transition-all duration-300 ${
            activeTab === 'practice'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
        >
          Practice Task
        </button>
      </div>

      {activeTab === 'theory' && (
        <div className="p-6 bg-white rounded-lg shadow-lg font-serif">
          <h2 className="text-2xl font-bold mb-6 text-purple-800">The 7 Fundamental Principles of Software Testing</h2>
          
          <div className="space-y-8">
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">1. Testing Shows the Presence of Defects</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  Testing can show that defects are present, but cannot prove that there are no defects. This principle emphasizes the limitations and true purpose of testing.
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Testing reduces the probability of undiscovered defects remaining in the software</li>
                  <li>Even if no defects are found, testing is not a proof of correctness</li>
                  <li>Proper testing increases confidence in the software quality</li>
                  <li>The absence of detected defects doesn't mean the software is perfect</li>
                </ul>
                <div className="mt-4 bg-blue-100 p-3 rounded">
                  <h4 className="font-semibold mb-2">Real-World Example:</h4>
                  <p className="text-gray-700">
                    Consider a calculator app that has been tested with thousands of calculations. Even if all tests pass, there might still be edge cases or specific number combinations that could produce incorrect results. The testing proved the presence of correct functionality in the tested scenarios but cannot guarantee correctness in all possible scenarios.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">2. Exhaustive Testing is Impossible</h3>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  Testing everything (all combinations of inputs and preconditions) is not feasible except for trivial cases. This principle helps in understanding the need for strategic testing approaches.
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Risk analysis and priorities should be used to focus testing efforts</li>
                  <li>Testing should be focused on the most critical areas</li>
                  <li>Consider both positive and negative test scenarios</li>
                  <li>Use boundary value analysis and equivalence partitioning</li>
                  <li>Focus on high-risk and high-use paths through the software</li>
                </ul>
                <div className="mt-4 bg-purple-100 p-3 rounded">
                  <h4 className="font-semibold mb-2">Mathematical Perspective:</h4>
                  <p className="text-gray-700">
                    Consider a simple login form with a password field that accepts 8 characters. Even with just lowercase letters (26), the possible combinations are 26⁸ = 208 billion combinations. Adding uppercase letters, numbers, and special characters makes exhaustive testing practically impossible.
                  </p>
                </div>
                <div className="mt-4 bg-purple-100 p-3 rounded">
                  <h4 className="font-semibold mb-2">Strategic Approach:</h4>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>Identify critical functionality through risk analysis</li>
                    <li>Use test design techniques to reduce test cases while maintaining coverage</li>
                    <li>Focus on both typical and edge cases</li>
                    <li>Consider user patterns and common usage scenarios</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">3. Early Testing Saves Cost and Time</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  Testing activities should start as early as possible in the software development life cycle. This principle emphasizes the economic and practical benefits of early defect detection.
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Early testing helps reduce costs and time</li>
                  <li>Defects found early are cheaper to fix</li>
                  <li>Requirements and design issues can be caught before implementation</li>
                  <li>Prevents defect multiplication and reduces technical debt</li>
                </ul>
                <div className="mt-4 bg-green-100 p-3 rounded">
                  <h4 className="font-semibold mb-2">Cost Multiplication Factor:</h4>
                  <p className="text-gray-700">
                    Studies have shown that the cost of fixing a defect increases exponentially throughout the development lifecycle:
                  </p>
                  <ul className="list-disc ml-6 text-gray-600 mt-2">
                    <li>Requirements Phase: 1x cost</li>
                    <li>Design Phase: 3-6x cost</li>
                    <li>Development Phase: 10x cost</li>
                    <li>Testing Phase: 15-40x cost</li>
                    <li>Production Phase: 40-1000x cost</li>
                  </ul>
                </div>
                <div className="mt-4 bg-green-100 p-3 rounded">
                  <h4 className="font-semibold mb-2">Early Testing Activities:</h4>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>Requirements review and validation</li>
                    <li>Design review and verification</li>
                    <li>Static code analysis</li>
                    <li>Unit testing during development</li>
                    <li>Continuous integration and testing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">4. Defect Clustering</h3>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  A small number of modules usually contain most of the defects discovered. This principle helps in optimizing testing efforts by focusing on problematic areas.
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Follows the Pareto principle (80/20 rule)</li>
                  <li>Helps in focusing testing efforts on problematic areas</li>
                  <li>Based on complexity, changes, and historical data</li>
                  <li>Requires good defect tracking and analysis</li>
                </ul>
                <div className="mt-4 bg-yellow-100 p-3 rounded">
                  <h4 className="font-semibold mb-2">Common Clustering Factors:</h4>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>Complex functionality</li>
                    <li>Code that has changed frequently</li>
                    <li>New features or technologies</li>
                    <li>Integration points</li>
                    <li>Areas with previous defects</li>
                  </ul>
                </div>
                <div className="mt-4 bg-yellow-100 p-3 rounded">
                  <h4 className="font-semibold mb-2">Practical Application:</h4>
                  <p className="text-gray-700">
                    By identifying defect clusters, teams can:
                  </p>
                  <ul className="list-disc ml-6 text-gray-600 mt-2">
                    <li>Prioritize testing efforts</li>
                    <li>Allocate resources effectively</li>
                    <li>Improve code quality in problematic areas</li>
                    <li>Implement preventive measures</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">5. Pesticide Paradox</h3>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  If the same tests are repeated over and over again, they will eventually stop finding new defects. Like pesticides becoming ineffective over time, tests need to be regularly updated.
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Test cases need to be regularly reviewed and updated</li>
                  <li>New and different tests need to be written to find different defects</li>
                  <li>Testing techniques and approaches should evolve</li>
                  <li>Important for maintaining testing effectiveness</li>
                </ul>
                <div className="mt-4 bg-pink-100 p-3 rounded">
                  <h4 className="font-semibold mb-2">Overcoming the Paradox:</h4>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>Regularly review and update test cases</li>
                    <li>Use different testing techniques and approaches</li>
                    <li>Implement new testing tools and methodologies</li>
                    <li>Consider new user scenarios and use cases</li>
                    <li>Stay updated with new testing practices</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">6. Testing is Context Dependent</h3>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  Testing is done differently in different contexts. The approach to testing an e-commerce site will differ from testing a medical device.
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Different testing approaches for different types of software</li>
                  <li>Testing strategy depends on requirements, resources, and risks</li>
                  <li>Safety-critical systems require more rigorous testing</li>
                  <li>Context influences test techniques and methods</li>
                </ul>
                <div className="mt-4 bg-orange-100 p-3 rounded">
                  <h4 className="font-semibold mb-2">Contextual Factors:</h4>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>Industry requirements and regulations</li>
                    <li>User expectations and needs</li>
                    <li>Technical environment and constraints</li>
                    <li>Project timeline and budget</li>
                    <li>Team skills and experience</li>
                  </ul>
                </div>
                <div className="mt-4 bg-orange-100 p-3 rounded">
                  <h4 className="font-semibold mb-2">Example Scenarios:</h4>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>Healthcare: Focus on accuracy and security</li>
                    <li>E-commerce: Emphasis on usability and performance</li>
                    <li>Gaming: Focus on user experience and graphics</li>
                    <li>Financial: Security and data integrity priority</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">7. Absence-of-Errors Fallacy</h3>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  Finding and fixing defects does not help if the system built does not meet user needs and expectations. A technically perfect system might still be unusable or unsuitable for its intended purpose.
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>A bug-free system might still be unusable</li>
                  <li>Testing should verify user requirements</li>
                  <li>Focus on both verification and validation</li>
                  <li>Consider user experience and business value</li>
                </ul>
                <div className="mt-4 bg-red-100 p-3 rounded">
                  <h4 className="font-semibold mb-2">Key Considerations:</h4>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>User satisfaction is paramount</li>
                    <li>Business requirements must be met</li>
                    <li>Usability is as important as functionality</li>
                    <li>Value delivery is the ultimate goal</li>
                  </ul>
                </div>
                <div className="mt-4 bg-red-100 p-3 rounded">
                  <h4 className="font-semibold mb-2">Validation Activities:</h4>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>User acceptance testing</li>
                    <li>Beta testing</li>
                    <li>Usability testing</li>
                    <li>Customer feedback analysis</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Practical Application</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  Understanding and applying these principles helps in:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Creating effective test strategies</li>
                  <li>Managing stakeholder expectations</li>
                  <li>Optimizing testing resources and effort</li>
                  <li>Improving overall software quality</li>
                  <li>Making informed decisions about testing activities</li>
                </ul>
                <div className="mt-4 bg-gray-100 p-3 rounded">
                  <h4 className="font-semibold mb-2">Implementation Strategy:</h4>
                  <ol className="list-decimal ml-6 text-gray-600 space-y-2">
                    <li>Understand the project context and requirements</li>
                    <li>Plan testing activities early in the project</li>
                    <li>Identify high-risk areas and potential defect clusters</li>
                    <li>Design diverse test cases and update them regularly</li>
                    <li>Balance technical testing with user-centered validation</li>
                    <li>Maintain clear communication with stakeholders</li>
                    <li>Continuously improve testing processes based on feedback</li>
                  </ol>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row h-screen">
          <div className="w-full md:w-1/4 bg-slate-800 p-4 overflow-y-auto">
            <h2 className="text-xl font-bold text-lime-50 mb-4 text-center">Questions</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 gap-2">
              {QADataPrinciplesQuiz.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`w-10 h-10 rounded-full font-semibold text-white ${
                    submittedAnswers[index]
                      ? userAnswers[index] === QADataPrinciplesQuiz[index].correctAnswer
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
            <h2 className="text-2xl font-bold mb-6 text-center">Testing Principles Quiz</h2>
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
                        {((calculateStats().correct / QADataPrinciplesQuiz.length) * 100).toFixed(1)}%
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
                <h3 className="text-lg font-semibold mb-4">{QADataPrinciplesQuiz[currentQuestionIndex].question}</h3>
                <div className="mb-4">
                  {QADataPrinciplesQuiz[currentQuestionIndex].options.map((option, idx) => (
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
                  {feedback && currentQuestionIndex < QADataPrinciplesQuiz.length - 1 && (
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

      {activeTab === 'practice' && (
        <DndProvider backend={HTML5Backend}>
          <Modal isOpen={isModalOpen} onClose={closeModal} modalData={helpModalDataP} />
          {!isTaskCompleted ? (
            <div data-testid="principles-quiz-container" className="p-6">
              <h1 data-testid="quiz-title" className="text-center text-xl md:text-3xl font-bold mb-4 mt-2">7 Principles of Testing</h1>
              <h2 className="text-center mb-2 font-poppins">
                Drag and drop the <strong>true</strong> principles of testing into the drop zones.
                <button
                  data-testid="help-button"
                  onClick={openModal}
                  className="bg-blue-500 text-slate-100 py-1 px-2 m-2 rounded-md hover:bg-blue-700 transition-all duration-300"
                >
                  Need Help?
                </button>
              </h2>

              <div className="flex">
                <div data-testid="draggable-cards-container" className="w-3/5 flex flex-wrap justify-center overflow-auto h-[60vh] p-1 border-r border-gray-300">
                  {draggableCards.map((card) => (
                    <DraggableCard key={card.id} card={card} />
                  ))}
                </div>

                <div data-testid="drop-zones-container" className="w-2/5 flex flex-wrap justify-center overflow-auto p-2 font-poppins">
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
              </div>
              <div className="flex justify-center mt-6 gap-4">
                <button
                  data-testid="submit-button"
                  onClick={validateTask}
                  className="bg-slate-600 text-lime-200 p-2 rounded w-40  hover:bg-lime-300 hover:text-slate-500 transition-all duration-300"
                >
                  Submit
                </button>
                <button
                  data-testid="reset-button"
                  onClick={resetGame}
                  className="bg-violet-400 text-lime-200 p-2 rounded w-40  hover:bg-pink-400 transition-all duration-300"
                >
                  Start Over
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
              <div className="text-4xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-green-600 mb-4">Excellent Work!</h2>
              <p className="text-gray-600 mb-6 text-center">
                You've successfully completed the Testing Principles task! Would you like to explore more testing concepts?
              </p>
              <div className="flex gap-4">
                <Link
                  to="/ageestimator"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next Challenge
                </Link>
                <button
                  onClick={() => {
                    setIsTaskCompleted(false);
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

export default TestingPrinciples;
