import React, { useState } from 'react';
import { crossBrowserTheory, crossBrowserQuestions, crossBrowserTools, crossBrowserResources } from '../Data/Data';
import { useNavigate } from 'react-router-dom';

const sections = [
  { id: 'basics', label: 'Basics & Fundamentals' },
  { id: 'strategies', label: 'Testing Strategies' },
  { id: 'automation', label: 'Automation Approaches' },
  { id: 'future', label: 'Future Considerations' },
  { id: 'tools', label: 'Testing Tools' },
  { id: 'resources', label: 'Resources' }
];

const CrossBrowserTesting = () => {
  const [activeView, setActiveView] = useState('theory');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [userAnswers, setUserAnswers] = useState({});
  const [selectedQuestionId, setSelectedQuestionId] = useState(1);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('basics');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleAnswerClick = (selected) => {
    setSelectedAnswer(selected);
    setShowExplanation(true);

    if (selected === crossBrowserQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < crossBrowserQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedQuestionId(nextQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setShowExplanation(false);
    setSelectedAnswer(null);
    setAnsweredQuestions(new Set());
    setUserAnswers({});
    setSelectedQuestionId(1);
  };

  const renderTheory = () => (
    <div className="space-y-8 font-serif">
      <div className="sticky top-10 z-10 bg-white shadow-md py-4 mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex justify-between items-center space-x-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-purple-600 text-white'
                    : 'text-purple-600 hover:bg-blue-50'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
          
          <div className="md:hidden">
            <select
              value={activeSection}
              onChange={(e) => scrollToSection(e.target.value)}
              className="w-full p-2 border rounded-lg text-blue-600"
            >
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <section id="basics">
        <h2 className="text-2xl font-bold mb-4">Basics & Fundamentals</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3">Definition</h3>
          <p className="text-gray-700 mb-4">{crossBrowserTheory.basics.definition.mainConcept}</p>
          <div className="whitespace-pre-line text-gray-600">
            {crossBrowserTheory.basics.definition.detailedExplanation}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Business Impact</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {crossBrowserTheory.basics.importance.businessImpact.map((impact, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-semibold text-blue-600 mb-2">{impact.aspect}</h4>
                <p className="text-gray-600">{impact.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="strategies">
        <h2 className="text-2xl font-bold mb-4">Testing Strategies</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Browser Differences</h3>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Browser Engines</h3>
            <p className="text-gray-700 mb-4">{crossBrowserTheory.basics.browserDifferences.engineTypes.explanation}</p>
            
            <div className="grid gap-4 md:grid-cols-2">
              {crossBrowserTheory.basics.browserDifferences.engineTypes.types.map((engine, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-semibold text-blue-600 mb-2">{engine.name}</h4>
                  <p className="text-gray-600">{engine.details}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Common Issues:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {crossBrowserTheory.basics.browserDifferences.engineTypes.commonIssues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Rendering Variations</h3>
            <p className="text-gray-700 mb-4">{crossBrowserTheory.basics.browserDifferences.renderingVariations.explanation}</p>
            
            <div className="grid gap-4 md:grid-cols-2">
              {crossBrowserTheory.basics.browserDifferences.renderingVariations.details.map((detail, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-semibold text-blue-600 mb-2">{detail.aspect}</h4>
                  <p className="text-gray-600">{detail.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="automation">
        <h2 className="text-2xl font-bold mb-4">Automation Approaches</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <p className="text-gray-700 mb-6">{crossBrowserTheory.basics.responsiveDesign.explanation}</p>
            
            <div className="space-y-6">
              {crossBrowserTheory.basics.responsiveDesign.principles.detailedConcepts.map((concept, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{concept.name}</h3>
                  <p className="text-gray-700 mb-3">{concept.explanation}</p>
                  
                  {concept.implementation && (
                    <div className="bg-gray-50 p-3 rounded mb-3">
                      <p className="text-gray-600">{concept.implementation}</p>
                    </div>
                  )}
                  
                  {concept.bestPractices && (
                    <div>
                      <h4 className="font-semibold mb-2">Best Practices:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {concept.bestPractices.map((practice, i) => (
                          <li key={i}>{practice}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {concept.examples && (
                    <div>
                      <h4 className="font-semibold mb-2">Examples:</h4>
                      <div className="bg-gray-50 p-3 rounded">
                        <code className="text-sm">
                          {concept.examples.map((example, i) => (
                            <div key={i}>{example}</div>
                          ))}
                        </code>
                      </div>
                    </div>
                  )}
                  
                  {concept.advantages && (
                    <div>
                      <h4 className="font-semibold mb-2">Advantages:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {concept.advantages.map((advantage, i) => (
                          <li key={i}>{advantage}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {concept.strategy && (
                    <div>
                      <h4 className="font-semibold mb-2">Strategy:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {concept.strategy.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Breakpoints</h3>
              <p className="text-gray-700 mb-4">{crossBrowserTheory.basics.responsiveDesign.principles.breakpoints.explanation}</p>
              
              <div className="grid gap-4 md:grid-cols-2">
                {crossBrowserTheory.basics.responsiveDesign.principles.breakpoints.commonSizes.map((size, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-semibold text-blue-600 mb-2">{size.range}</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {size.considerations.map((consideration, i) => (
                        <li key={i}>{consideration}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Best Practices:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {crossBrowserTheory.basics.responsiveDesign.principles.breakpoints.bestPractices.map((practice, index) => (
                    <li key={index}>{practice}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="future">
        <h2 className="text-2xl font-bold mb-4">Future Considerations</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Emerging Technologies</h3>
          <p className="text-gray-700 mb-4">{crossBrowserTheory.futureConsiderations.emergingTechnologies.explanation}</p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="space-y-2">
              {crossBrowserTheory.futureConsiderations.emergingTechnologies.technologies.map((tech, index) => (
                <li key={index} className="text-gray-700">
                  <span className="font-semibold">{tech.split(': ')[0]}:</span>{' '}
                  {tech.split(': ')[1]}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">AI Evolution</h3>
          <p className="text-gray-700 mb-6">{crossBrowserTheory.futureConsiderations.aiEvolution.explanation}</p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-blue-600 mb-3">Testing Capabilities</h4>
              <ul className="space-y-2">
                {crossBrowserTheory.futureConsiderations.aiEvolution.testing.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    <span className="font-semibold">{item.split(': ')[0]}:</span>{' '}
                    {item.split(': ')[1]}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-blue-600 mb-3">Maintenance Improvements</h4>
              <ul className="space-y-2">
                {crossBrowserTheory.futureConsiderations.aiEvolution.maintenance.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    <span className="font-semibold">{item.split(': ')[0]}:</span>{' '}
                    {item.split(': ')[1]}
                  </li>
                ))}
              </ul>
            </div>
            <button 
              onClick={() => navigate('/ai-qa')}
              className="group flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold p-3 md:p-4 rounded-lg hover:bg-blue-50 transition-all text-sm md:text-base"
            >
              <span>Learn More About AI in QA</span>
              <svg 
                className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" 
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
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Industry Trends</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {crossBrowserTheory.futureConsiderations.industryTrends.map((trend, index) => (
              <div key={index} className="border rounded-lg p-4">
                <p className="text-gray-700">
                  <span className="font-semibold">{trend.split(': ')[0]}:</span>{' '}
                  {trend.split(': ')[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools">
        <h2 className="text-2xl font-bold mb-4">Testing Tools</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {crossBrowserTools.testingTools.automationFrameworks.map((framework) => (
            <div key={framework.name} className="border rounded-lg p-4">
              <h4 className="font-semibold text-blue-600 mb-2">{framework.name}</h4>
              <p className="text-gray-700 mb-3">{framework.details.description}</p>
              
              <div className="mb-3">
                <h5 className="font-semibold mb-1">Key Features:</h5>
                <ul className="list-disc list-inside text-gray-600">
                  {framework.details.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-3">
                <h5 className="font-semibold mb-1">Best For:</h5>
                <p className="text-gray-600">{framework.details.bestFor}</p>
              </div>

              <div>
                <h5 className="font-semibold mb-1">Limitations:</h5>
                <ul className="list-disc list-inside text-gray-600">
                  {framework.details.limitations.map((limitation, index) => (
                    <li key={index}>{limitation}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {renderResources()}
    </div>
  );

  const renderQuiz = () => (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Questions Overview</h3>
        <div className="grid grid-cols-5 gap-2">
          {crossBrowserQuestions.map((_, index) => (
            <button
              key={index + 1}
              onClick={() => {
                if (answeredQuestions.has(index + 1) || index + 1 === currentQuestion + 1) {
                  setSelectedQuestionId(index + 1);
                  setCurrentQuestion(index);
                }
              }}
              className={`
                w-10 h-10 rounded-lg flex items-center justify-center font-semibold
                ${answeredQuestions.has(index + 1) 
                  ? 'bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer' 
                  : index + 1 === currentQuestion + 1
                    ? 'bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
                ${selectedQuestionId === index + 1 ? 'ring-2 ring-blue-500' : ''}
              `}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">Progress</h4>
          <div className="flex justify-between text-sm">
            <span>Answered: {answeredQuestions.size}</span>
            <span>Remaining: {crossBrowserQuestions.length - answeredQuestions.size}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div 
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${(answeredQuestions.size / crossBrowserQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              You scored {score} out of {crossBrowserQuestions.length}
            </h2>
            <button
              onClick={resetQuiz}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retry Quiz
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <span className="text-sm text-gray-500">
                Question {currentQuestion + 1}/{crossBrowserQuestions.length}
              </span>
            </div>
            <h2 className="text-xl font-bold mb-4">
              {crossBrowserQuestions[currentQuestion].question}
            </h2>
            <div className="space-y-3">
              {crossBrowserQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleAnswerClick(option);
                    setAnsweredQuestions(prev => new Set(prev).add(currentQuestion + 1));
                    setUserAnswers(prev => ({
                      ...prev,
                      [currentQuestion + 1]: {
                        selected: option,
                        correct: option === crossBrowserQuestions[currentQuestion].correctAnswer
                      }
                    }));
                  }}
                  className={`w-full p-3 text-left rounded-lg transition-colors ${
                    showExplanation
                      ? option === crossBrowserQuestions[currentQuestion].correctAnswer
                        ? 'bg-green-100 border-green-500'
                        : option === userAnswers[currentQuestion + 1]?.selected
                          ? 'bg-red-100 border-red-500'
                          : 'bg-gray-100'
                      : 'bg-gray-100 hover:bg-gray-200'
                  } border`}
                >
                  {option}
                </button>
              ))}
            </div>
            {showExplanation && (
              <div className="mt-4">
                <p className="text-gray-700 mb-4">
                  {crossBrowserQuestions[currentQuestion].explanation}
                </p>
                <button
                  onClick={handleNextQuestion}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next Question
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const renderResources = () => (
    <section id="resources" className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Resources & Documentation</h2>

      <div className="space-y-6">
        {crossBrowserResources.officialDocs.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{section.category}</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {section.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border rounded-lg hover:border-blue-500 transition-colors"
                >
                  <h4 className="font-semibold mb-2">{link.name}</h4>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">Learning Resources</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {crossBrowserResources.tutorials.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-3">{section.category}</h4>
              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 border rounded-lg hover:border-blue-500 transition-colors"
                  >
                    <h5 className="font-medium mb-1">{link.name}</h5>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">Community & Forums</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {crossBrowserResources.communityResources[0].links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg hover:border-blue-500 transition-colors"
            >
              <h4 className="font-semibold mb-2">{link.name}</h4>
              <p className="text-sm text-gray-600">{link.description}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">Development Tools</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-semibold mb-3">Browser DevTools</h4>
            <div className="space-y-3">
              {crossBrowserResources.tools.browserDevTools.map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 border rounded-lg hover:border-blue-500 transition-colors"
                >
                  <h5 className="font-medium mb-1">{tool.name}</h5>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Preprocessors</h4>
            <div className="space-y-3">
              {crossBrowserResources.tools.preprocessors.map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 border rounded-lg hover:border-blue-500 transition-colors"
                >
                  <h5 className="font-medium mb-1">{tool.name}</h5>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">Learning Paths</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {crossBrowserResources.learningPaths.map((path, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-3">{path.level}</h4>
              <div className="space-y-3">
                {path.resources.map((resource, resourceIndex) => (
                  <a
                    key={resourceIndex}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 border rounded-lg hover:border-blue-500 transition-colors"
                  >
                    <h5 className="font-medium mb-1">{resource.name}</h5>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">Specifications & Standards</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {crossBrowserResources.specifications.map((spec, index) => (
            <a
              key={index}
              href={spec.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg hover:border-blue-500 transition-colors"
            >
              <h4 className="font-semibold mb-2">{spec.name}</h4>
              <p className="text-sm text-gray-600">{spec.description}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">AI Testing Resources</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {crossBrowserResources.aiResources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg hover:border-blue-500 transition-colors"
            >
              <h4 className="font-semibold mb-2">{resource.name}</h4>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6 flex justify-center gap-4">
          <button
            onClick={() => setActiveView('theory')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeView === 'theory'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}
          >
            Theory
          </button>
          <button
            onClick={() => setActiveView('quiz')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeView === 'quiz'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}
          >
            Quiz
          </button>
        </div>
        {activeView === 'theory' ? renderTheory() : renderQuiz()}
      </div>
    </div>
  );
};

export default CrossBrowserTesting;