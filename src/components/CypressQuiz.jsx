import React, { useState } from 'react';
import { CypressQ } from '../Data/Data';
import { SiCypress } from 'react-icons/si';

const CypressQuiz = () => {
  const [activeTab, setActiveTab] = useState('theory');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(CypressQ.length).fill(null));
  const [submittedAnswers, setSubmittedAnswers] = useState(Array(CypressQ.length).fill(false));
  const [feedback, setFeedback] = useState("");
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(Array(CypressQ.length).fill(false));
  const [warningMessage, setWarningMessage] = useState("");

  const currentQuestion = CypressQ[currentQuestionIndex];

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
    if (currentQuestionIndex < CypressQ.length - 1) {
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
        if (userAnswers[index] === CypressQ[index].correctAnswer) {
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
    setUserAnswers(Array(CypressQ.length).fill(null));
    setSubmittedAnswers(Array(CypressQ.length).fill(false));
    setAnsweredQuestions(Array(CypressQ.length).fill(false));
    setFeedback("");
    setAnswerCorrect(false);
    setWarningMessage("");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex mb-6 border-b">
        <button
          className={`px-6 py-3 ${
            activeTab === 'theory'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('theory')}
        >
          Theory
        </button>
        <button
          className={`px-6 py-3 ${
            activeTab === 'quiz'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('quiz')}
        >
          Quiz
        </button>
      </div>

      {activeTab === 'theory' ? (
        <div className="p-6 bg-white rounded-lg shadow-lg font-serif">
          <h2 className="text-2xl font-bold mb-4">Cypress Testing Framework</h2>
          
          <div className="mb-8 flex justify-end">
            <a 
              href="https://docs.cypress.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center gap-2 shadow-md"
            >
              <SiCypress className="h-5 w-5" />
              Visit Official Cypress Documentation
            </a>
          </div>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">What is Cypress?</h3>
            <p className="text-gray-700 mb-4">
              Cypress is a next-generation front-end testing tool built for the modern web. 
              Unlike Selenium, Cypress runs in the same run-loop as your application, enabling 
              real-time testing with direct access to all objects.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Key Advantages:</h4>
              <ul className="list-disc pl-6">
                <li>Time Travel: View snapshots at each step of your test</li>
                <li>Automatic Waiting: No need for explicit waits or sleeps</li>
                <li>Real-time Reloads: Tests reload as you make changes</li>
                <li>Consistent Results: Flake-resistant architecture</li>
                <li>Debug-ability: Clear error messages and stack traces</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Cypress Architecture</h3>
            <p className="text-gray-700 mb-4">
              Unlike traditional testing tools, Cypress:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Executes in the same run loop as your application</li>
              <li>Has direct access to the DOM and application context</li>
              <li>Can control network traffic and modify web browser behavior</li>
              <li>Alters clock time and functions</li>
            </ul>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Key Architectural Features:</h4>
              <ul className="list-disc pl-6">
                <li>No Selenium or WebDriver dependency</li>
                <li>Runs inside the browser</li>
                <li>Native access to all application objects</li>
                <li>Complete control over network traffic</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Installation and Setup</h3>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm">
                {`
# Install Cypress via npm
npm install cypress --save-dev

# Install Cypress via yarn
yarn add cypress --dev

# Open Cypress Test Runner
npx cypress open

# Run Cypress tests headlessly
npx cypress run
                `}
              </pre>
            </div>
            <p className="text-gray-700 mb-4">Project Structure:</p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <pre className="text-sm">
                {`
cypress/
  ├── fixtures/          # Test data files
  │   └── example.json
  ├── e2e/              # Test files
  │   └── spec.cy.js
  ├── support/          # Support files
  │   ├── commands.js   # Custom commands
  │   └── e2e.js       # Global configuration
  ├── downloads/        # Downloaded files
  ├── screenshots/      # Test failure screenshots
  ├── videos/          # Test execution videos
  └── cypress.config.js # Configuration file
                `}
              </pre>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Writing Tests</h3>
            <p className="text-gray-700 mb-4">
              Cypress uses Mocha's BDD syntax for organizing tests:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm">
                {`
describe('My First Test Suite', () => {
  before(() => {
    // runs once before all tests
  })

  beforeEach(() => {
    // runs before each test
    cy.visit('/my-page')
  })

  it('should perform some action', () => {
    cy.get('.selector')
      .should('be.visible')
      .click()
  })

  after(() => {
    // runs once after all tests
  })
})
                `}
              </pre>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Core Concepts</h3>
            
            <h4 className="font-semibold mt-4 mb-2">1. Commands and Chaining</h4>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm">
                {`
// Commands are chainable
cy.get('.button')
  .should('be.visible')
  .and('contain', 'Submit')
  .click()

// Handling async operations
cy.get('.list')
  .find('li')
  .should('have.length', 3)
  .first()
  .should('contain', 'First Item')
                `}
              </pre>
            </div>

            <h4 className="font-semibold mt-4 mb-2">2. Assertions</h4>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm">
                {`
// Implicit Assertions
cy.get('.element').should('exist')
cy.get('.element').should('be.visible')
cy.get('.element').should('have.class', 'active')

// Explicit Assertions
expect(true).to.be.true
assert.equal(4, '4', 'numbers are equal')
                `}
              </pre>
            </div>

            <h4 className="font-semibold mt-4 mb-2">3. Network Requests</h4>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm">
                {`
// Intercepting Network Requests
cy.intercept('GET', '/api/users', { fixture: 'users.json' })
cy.intercept('POST', '/api/login').as('loginRequest')

// Waiting for Requests
cy.wait('@loginRequest')
  .its('response.statusCode')
  .should('eq', 200)
                `}
              </pre>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Best Practices</h3>
            
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Selectors</h4>
              <ul className="list-disc pl-6">
                <li>Use data-cy attributes for test elements</li>
                <li>Avoid using CSS classes or IDs that might change</li>
                <li>Keep selectors simple and specific</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Test Organization</h4>
              <ul className="list-disc pl-6">
                <li>Group related tests in describe blocks</li>
                <li>Use before/beforeEach for setup</li>
                <li>Keep tests independent</li>
                <li>Don't share state between tests</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Custom Commands</h4>
              <pre className="text-sm">
                {`
// In cypress/support/commands.js
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.get('[data-cy=email]').type(email)
  cy.get('[data-cy=password]').type(password)
  cy.get('[data-cy=submit]').click()
})

// In your test
cy.login('user@example.com', 'password')
                `}
              </pre>
            </div>
          </section>

          {/* Advanced Topics */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Advanced Topics</h3>

            <h4 className="font-semibold mt-4 mb-2">1. Fixtures and Aliases</h4>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm">
                {`
// Loading test data
cy.fixture('users.json').as('usersData')
cy.get('@usersData').then((users) => {
  // use the data
})
                `}
              </pre>
            </div>

            <h4 className="font-semibold mt-4 mb-2">2. Environment Variables</h4>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm">
                {`
// cypress.config.js
module.exports = defineConfig({
  e2e: {
    env: {
      apiUrl: 'http://localhost:3000/api',
      user: 'testuser'
    }
  }
})

// Usage in tests
cy.visit(Cypress.env('apiUrl'))
                `}
              </pre>
            </div>

            <h4 className="font-semibold mt-4 mb-2">3. Plugins</h4>
            <div className="bg-gray-100 p-4 rounded-lg">
              <pre className="text-sm">
                {`
// cypress.config.js
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })
    }
  }
})
                `}
              </pre>
            </div>
          </section>
        </div>
      ) : (
        <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row h-screen font-serif">
          <div className="w-full md:w-1/4 bg-slate-800 p-4 overflow-y-auto">
            <h2 className="text-xl font-bold text-lime-50 mb-4 text-center">Questions</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 gap-2">
              {CypressQ.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`w-10 h-10 rounded-full font-semibold text-white ${
                    submittedAnswers[index]
                      ? userAnswers[index] === CypressQ[index].correctAnswer
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
            <h2 className="text-2xl font-bold mb-6 text-center">Cypress Quiz</h2>
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
                        {((calculateStats().correct / CypressQ.length) * 100).toFixed(1)}%
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
                  {feedback && currentQuestionIndex < CypressQ.length - 1 && (
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
  );
};

export default CypressQuiz;