import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { theoryContent, developmentMethodologiesContent, testingTypesContent, LevelsQAquiz } from '../Data/Data';

const TestingLevels = () => {
  const [activeTab, setActiveTab] = useState('levels');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(LevelsQAquiz.length).fill(null));
  const [submittedAnswers, setSubmittedAnswers] = useState(Array(LevelsQAquiz.length).fill(false));
  const [feedback, setFeedback] = useState("");
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(Array(LevelsQAquiz.length).fill(false));
  const [warningMessage, setWarningMessage] = useState("");
  const [showScore, setShowScore] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

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
    const isCorrect = userAnswers[currentQuestionIndex] === LevelsQAquiz[currentQuestionIndex].correctAnswer;
    
    const updatedAnswered = [...answeredQuestions];
    updatedAnswered[currentQuestionIndex] = true;
    setAnsweredQuestions(updatedAnswered);
    
    const updatedSubmitted = [...submittedAnswers];
    updatedSubmitted[currentQuestionIndex] = true;
    setSubmittedAnswers(updatedSubmitted);
    
    setFeedback(isCorrect ? "Correct!" : `Incorrect. The correct answer is: ${LevelsQAquiz[currentQuestionIndex].correctAnswer}`);
    setAnswerCorrect(isCorrect);

    if (updatedSubmitted.every(answer => answer === true)) {
      setShowScore(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < LevelsQAquiz.length - 1) {
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
        if (userAnswers[index] === LevelsQAquiz[index].correctAnswer) {
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
    setUserAnswers(Array(LevelsQAquiz.length).fill(null));
    setSubmittedAnswers(Array(LevelsQAquiz.length).fill(false));
    setAnsweredQuestions(Array(LevelsQAquiz.length).fill(false));
    setFeedback("");
    setAnswerCorrect(false);
    setWarningMessage("");
    setShowScore(false);
  };

  const renderTheory = () => {
    return (
      <div className="max-w-7xl mx-auto p-4">
        {theoryContent.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 font-serif">{section.title}</h2>
            <p className="text-gray-700 mb-8 text-lg font-serif italic">{section.introduction}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.subsections.map((subsection, subIndex) => (
                <div 
                  key={subIndex} 
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                    {subsection.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-serif">{subsection.description}</p>

                  {subsection.keyPoints && (
                    <div className="mb-4">
                      <h4 className="text-lg font-serif font-medium text-blue-800 mb-2">Key Points:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {subsection.keyPoints.map((point, index) => (
                          <li key={index} className="text-gray-600 font-serif">{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {subsection.examples && (
                    <div className="mb-4">
                      <h4 className="text-lg font-serif font-medium text-blue-800 mb-2">Examples:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {subsection.examples.map((example, index) => (
                          <li key={index} className="text-gray-600 font-serif">{example}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {subsection.theory && (
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                      <div className="space-y-2">
                        <p className="text-gray-600 font-serif"><span className="font-bold">Scope:</span> {subsection.theory.scope}</p>
                        <p className="text-gray-600 font-serif"><span className="font-bold">Purpose:</span> {subsection.theory.purpose}</p>
                        <p className="text-gray-600 font-serif"><span className="font-bold">Granularity:</span> {subsection.theory.granularity}</p>
                        <p className="text-gray-600 font-serif"><span className="font-bold">Performed By:</span> {subsection.theory.performedBy}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderTestingTypes = () => {
    return (
      <div className="max-w-7xl mx-auto p-4 font-serif">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 font-serif">{testingTypesContent.title}</h2>
        <p className="text-gray-700 mb-8 text-lg font-serif italic">{testingTypesContent.introduction}</p>
  
        {testingTypesContent.subsections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">{section.title}</h3>
            <p className="text-gray-600 mb-6 font-serif">{section.description}</p>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.types.map((type, typeIndex) => (
                <div key={typeIndex} className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-serif font-semibold text-gray-800 mb-4">{type.name}</h4>
                  <p className="text-gray-600 mb-4 font-serif">{type.description}</p>
  
                  {type.keyPoints && (
                    <div className="mb-4">
                      <h5 className="text-lg font-serif font-medium text-blue-800 mb-2">Key Points:</h5>
                      <ul className="list-disc list-inside space-y-2">
                        {type.keyPoints.map((point, index) => (
                          <li key={index} className="text-gray-600 font-serif">{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
  
                  {type.subtypes ? (
                    <div className="mt-4">
                      <h5 className="text-lg font-serif font-medium text-blue-800 mb-2">Subtypes:</h5>
                      {type.subtypes.map((subtype, subtypeIndex) => (
                        <div key={subtypeIndex} className="mb-6 bg-gray-50 p-4 rounded-lg">
                          <h6 className="font-semibold text-gray-800 mb-2">{subtype.name}</h6>
                          <p className="text-gray-600 mb-3">{subtype.description}</p>
                          {subtype.keyPoints && (
                            <div className="mb-3">
                              <h6 className="font-medium text-blue-800 mb-1">Key Points:</h6>
                              <ul className="list-disc list-inside">
                                {subtype.keyPoints.map((point, idx) => (
                                  <li key={idx} className="text-gray-600">{point}</li>
                                ))}
                              </ul>
                            </div>
                          )}
  
                          {subtype.metrics && (
                            <div className="mb-3">
                              <h6 className="font-medium text-blue-800 mb-1">Metrics:</h6>
                              <ul className="list-disc list-inside">
                                {subtype.metrics.map((metric, idx) => (
                                  <li key={idx} className="text-gray-600">{metric}</li>
                                ))}
                              </ul>
                            </div>
                          )}
  
                          {subtype.focus && (
                            <div className="mb-3">
                              <h6 className="font-medium text-blue-800 mb-1">Focus Areas:</h6>
                              <ul className="list-disc list-inside">
                                {subtype.focus.map((item, idx) => (
                                  <li key={idx} className="text-gray-600">{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
  
                          {subtype.theory && (
                            <div className="mt-3">
                              <div className="space-y-2">
                                <p className="text-gray-600"><span className="font-bold">Scope:</span> {subtype.theory.scope}</p>
                                <p className="text-gray-600"><span className="font-bold">Purpose:</span> {subtype.theory.purpose}</p>
                                <p className="text-gray-600"><span className="font-bold">Granularity:</span> {subtype.theory.granularity}</p>
                                <p className="text-gray-600"><span className="font-bold">Performed By:</span> {subtype.theory.performedBy}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    type.theory && (
                      <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                        <div className="space-y-2">
                          <p className="text-gray-600 font-serif"><span className="font-bold">Scope:</span> {type.theory.scope}</p>
                          <p className="text-gray-600 font-serif"><span className="font-bold">Purpose:</span> {type.theory.purpose}</p>
                          <p className="text-gray-600 font-serif"><span className="font-bold">Granularity:</span> {type.theory.granularity}</p>
                          <p className="text-gray-600 font-serif"><span className="font-bold">Performed By:</span> {type.theory.performedBy}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          {testingTypesContent.subsections[testingTypesContent.subsections.length - 1].types.map((type, typeIndex) => (
            <div key={typeIndex} className="mb-6">
              {type.categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-6">
                  <h5 className="text-md font-serif font-semibold text-gray-800 mb-3">{category.category}</h5>
                  {category.techniques.map((technique, techniqueIndex) => (
                    <div key={techniqueIndex} className="mb-4">
                      <h6 className="font-semibold text-gray-800">{technique.name}</h6>
                      <p className="text-gray-600 font-serif">{technique.description}</p>
                      <p className="text-gray-600 font-serif"><span className="font-bold">Purpose:</span> {technique.purpose}</p>
                      <p className="text-gray-600 font-serif"><span className="font-bold">Performed By:</span> {technique.performedBy}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };
  

  const renderMethodologies = () => {
    return (
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 font-serif">{developmentMethodologiesContent.title}</h2>
        <p className="text-gray-700 mb-8 text-lg font-serif italic">{developmentMethodologiesContent.introduction}</p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {developmentMethodologiesContent.subsections.map((methodology, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">{methodology.title}</h3>
              <p className="text-gray-600 mb-6 font-serif">{methodology.description}</p>

              {methodology.keyPrinciples && (
                <div className="mb-4">
                  <h4 className="text-lg font-serif font-medium text-blue-800 mb-2">Key Principles:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {methodology.keyPrinciples.map((principle, idx) => (
                      <li key={idx} className="text-gray-600 font-serif">{principle}</li>
                    ))}
                  </ul>
                </div>
              )}

              {methodology.theory && (
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    <p className="text-gray-600 font-serif"><span className="font-bold">Scope:</span> {methodology.theory.scope}</p>
                    <p className="text-gray-600 font-serif"><span className="font-bold">Purpose:</span> {methodology.theory.purpose}</p>
                    <p className="text-gray-600 font-serif"><span className="font-bold">Granularity:</span> {methodology.theory.granularity}</p>
                    <p className="text-gray-600 font-serif"><span className="font-bold">Performed By:</span> {methodology.theory.performedBy}</p>
                  </div>
                </div>
              )}

              {methodology.frameworks && (
                <div className="mt-4">
                  <h4 className="text-lg font-serif font-medium text-blue-800 mb-2">Frameworks:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {methodology.frameworks.map((framework, idx) => (
                      <li key={idx} className="text-gray-600 font-serif">{framework}</li>
                    ))}
                  </ul>
                </div>
              )}

              {methodology.practices && (
                <div className="mt-4">
                  <h4 className="text-lg font-serif font-medium text-blue-800 mb-2">Best Practices:</h4>
                  {methodology.practices.map((practice, practiceIndex) => (
                    <div key={practiceIndex} className="mb-3">
                      <h5 className="font-medium text-gray-800">{practice.name}</h5>
                      <p className="text-gray-600 font-serif">{practice.description}</p>
                      {practice.steps && (
                        <ol className="list-decimal list-inside space-y-2 text-gray-600 font-serif">
                          {practice.steps.map((step, stepIndex) => (
                            <li key={stepIndex}>{step}</li>
                          ))}
                        </ol>
                      )}
                      {practice.theory && (
                        <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-600 font-serif"><span className="font-bold">Scope:</span> {practice.theory.scope}</p>
                          <p className="text-gray-600 font-serif"><span className="font-bold">Purpose:</span> {practice.theory.purpose}</p>
                          <p className="text-gray-600 font-serif"><span className="font-bold">Granularity:</span> {practice.theory.granularity}</p>
                          <p className="text-gray-600 font-serif"><span className="font-bold">Performed By:</span> {practice.theory.performedBy}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex justify-center flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row space-x-8">
              <button
                onClick={() => setActiveTab('levels')}
                className={`${
                  activeTab === 'levels'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Testing Levels
              </button>
              <button
                onClick={() => setActiveTab('types')}
                className={`${
                  activeTab === 'types'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Testing Types
              </button>
              <button
                onClick={() => setActiveTab('methodologies')}
                className={`${
                  activeTab === 'methodologies'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Methodologies
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className={`${
                  activeTab === 'quiz'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Quiz
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'levels' && renderTheory()}
        {activeTab === 'types' && renderTestingTypes()}
        {activeTab === 'methodologies' && renderMethodologies()}
        {activeTab === 'quiz' && (
          <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row h-screen">
            <div className="w-full md:w-2/4 bg-slate-800 p-4 overflow-y-auto">
              <h2 className="text-xl font-bold text-lime-50 mb-4 text-center">Questions</h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-2">
                {LevelsQAquiz.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestionIndex(index)}
                    className={`w-8 h-8 rounded-full font-semibold text-white ${
                      submittedAnswers[index]
                        ? userAnswers[index] === LevelsQAquiz[index].correctAnswer
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
              <h2 className="text-2xl font-bold mb-6 text-center">Testing Levels Quiz</h2>
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
                          {((calculateStats().correct / LevelsQAquiz.length) * 100).toFixed(1)}%
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
                  <h3 className="text-lg font-semibold mb-4">{LevelsQAquiz[currentQuestionIndex].question}</h3>
                  <div className="mb-4">
                    {LevelsQAquiz[currentQuestionIndex].options.map((option, idx) => (
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
                    {feedback && currentQuestionIndex < LevelsQAquiz.length - 1 && (
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
      </div>
    </div>
  );
};

export default TestingLevels;