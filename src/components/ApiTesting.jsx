import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { apiQuestions } from '../Data/Data';

const APITesting = () => {
  const [activeTab, setActiveTab] = useState('theory');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [selectedQuestionId, setSelectedQuestionId] = useState(1);
  const [userAnswers, setUserAnswers] = useState({});

  const apiTheoryExtended = [
    {
      title: "Introduction to API Testing",
      content: "API (Application Programming Interface) testing is a type of software testing that involves testing application programming interfaces directly and as part of integration testing to determine if they meet expectations for functionality, reliability, performance, and security. It is crucial for ensuring seamless communication between different software components and systems.",
      examples: [
        "Validating response data structure",
        "Verifying correct HTTP status codes",
        "Testing error handling scenarios",
        "Checking response times and performance"
      ],
      importance: "Essential for ensuring reliable communication between different software components and systems.",
      testingTypes: [
        { name: "Functionality Testing", description: "Verifies if the API functions as expected" },
        { name: "Performance Testing", description: "Tests response time and resource usage" },
        { name: "Security Testing", description: "Checks for vulnerabilities and secure access" },
        { name: "Integration Testing", description: "Tests API interaction with other components" }
      ]
    },
    {
      title: "HTTP Methods",
      content: "HTTP methods define the type of operation to be performed on a resource. Understanding these methods is fundamental to API testing:",
      methods: [
        { name: "GET", description: "Retrieve data from a specified resource", idempotent: true },
        { name: "POST", description: "Create new resources or submit data", idempotent: false },
        { name: "PUT", description: "Update existing resources (complete update)", idempotent: true },
        { name: "PATCH", description: "Partial update of existing resources", idempotent: false },
        { name: "DELETE", description: "Remove specified resources", idempotent: true },
        { name: "HEAD", description: "Same as GET but retrieves only headers", idempotent: true },
        { name: "OPTIONS", description: "Describes communication options for the resource", idempotent: true }
      ],
      bestPractices: [
        "Use appropriate method for each operation",
        "Ensure idempotency for PUT requests",
        "Keep GET requests free of side effects",
        "Use POST for complex operations",
        "Use PATCH for partial updates"
      ]
    },
    {
      title: "Status Codes",
      categories: [
        {
          name: "2xx Success",
          codes: [
            { code: "200", meaning: "OK - Request successful" },
            { code: "201", meaning: "Created - Resource successfully created" },
            { code: "204", meaning: "No Content - Request successful, no content to return" }
          ]
        },
        {
          name: "3xx Redirection",
          codes: [
            { code: "301", meaning: "Moved Permanently" },
            { code: "302", meaning: "Found - Temporary redirect" },
            { code: "304", meaning: "Not Modified - Client can use cached data" }
          ]
        },
        {
          name: "4xx Client Errors",
          codes: [
            { code: "400", meaning: "Bad Request - Invalid syntax" },
            { code: "401", meaning: "Unauthorized - Authentication required" },
            { code: "403", meaning: "Forbidden - No permission" },
            { code: "404", meaning: "Not Found - Resource doesn't exist" },
            { code: "429", meaning: "Too Many Requests - Rate limit exceeded" }
          ]
        },
        {
          name: "5xx Server Errors",
          codes: [
            { code: "500", meaning: "Internal Server Error" },
            { code: "502", meaning: "Bad Gateway" },
            { code: "503", meaning: "Service Unavailable" },
            { code: "504", meaning: "Gateway Timeout" }
          ]
        }
      ]
    },
    {
      title: "API Authentication & Security",
      content: "Security mechanisms to control API access are critical for protecting data and ensuring only authorized users can access certain resources.",
      methods: [
        {
          name: "API Keys",
          description: "Simple token included in request header or query string",
          usage: "Best for public APIs with low security requirements",
          advantages: ["Simple to implement", "Easy to manage"],
          disadvantages: ["Less secure than other methods", "Limited functionality"]
        },
        {
          name: "Basic Auth",
          description: "Username and password encoded in Base64",
          usage: "Simple but should only be used with HTTPS",
          advantages: ["Easy to implement", "Widely supported"],
          disadvantages: ["Credentials sent with every request", "Limited security"]
        },
        {
          name: "Bearer Tokens",
          description: "Token (usually JWT) included in Authorization header",
          usage: "Common in OAuth 2.0 implementations",
          advantages: ["Secure", "Can contain user information"],
          disadvantages: ["More complex to implement", "Token management required"]
        },
        {
          name: "OAuth 2.0",
          description: "Framework for token-based authentication and authorization",
          usage: "Complex applications with different permission levels",
          advantages: ["Very secure", "Flexible permissions", "Industry standard"],
          disadvantages: ["Complex implementation", "More overhead"]
        },
        {
          name: "JWT",
          description: "JSON Web Tokens for stateless authentication",
          usage: "Modern web applications and microservices",
          advantages: ["Stateless", "Self-contained", "Efficient"],
          disadvantages: ["Token size", "Can't revoke individual tokens"]
        }
      ],
      securityBestPractices: [
        "Implement rate limiting to prevent abuse",
        "Use HTTPS for all API endpoints",
        "Validate all input data",
        "Implement proper error handling",
        "Use secure authentication methods",
        "Regular security audits",
        "Keep dependencies updated"
      ]
    },
    {
      title: "API Headers",
      content: "Common HTTP headers used in API requests and responses are crucial for defining the nature of the request and the expected response:",
      headers: [
        {
          name: "Content-Type",
          description: "Specifies the format of the request/response body",
          examples: ["application/json", "application/xml", "multipart/form-data"]
        },
        {
          name: "Accept",
          description: "Indicates the expected response format",
          examples: ["application/json", "application/xml"]
        },
        {
          name: "Authorization",
          description: "Contains authentication credentials",
          examples: ["Bearer <token>", "Basic <credentials>"]
        },
        {
          name: "Cache-Control",
          description: "Directives for caching mechanisms",
          examples: ["no-cache", "max-age=3600"]
        }
      ]
    },
    {
      title: "API Testing Best Practices",
      practices: [
        {
          category: "Test Planning",
          items: [
            "Define clear test objectives",
            "Create comprehensive test cases",
            "Plan for positive and negative scenarios",
            "Consider security testing requirements",
            "Include performance testing scenarios"
          ]
        },
        {
          category: "Test Execution",
          items: [
            "Validate response structure and data types",
            "Check error handling and status codes",
            "Test with different input combinations",
            "Verify API performance under load",
            "Test API versioning compatibility"
          ]
        },
        {
          category: "Security Testing",
          items: [
            "Test authentication mechanisms",
            "Verify authorization rules",
            "Check for common vulnerabilities",
            "Validate data encryption",
            "Test rate limiting functionality"
          ]
        },
        {
          category: "Documentation",
          items: [
            "Use tools like Swagger/OpenAPI",
            "Keep documentation up-to-date",
            "Include example requests and responses",
            "Document error scenarios",
            "Maintain version history"
          ]
        }
      ]
    },
    {
      title: "Advanced API Concepts",
      topics: [
        {
          name: "HATEOAS",
          description: "Hypertext As The Engine Of Application State - A constraint of REST architecture that provides information about available API actions in responses",
          importance: "Enables self-discoverable APIs"
        },
        {
          name: "API Versioning",
          description: "Strategies for managing API changes while maintaining backward compatibility",
          methods: [
            "URL versioning (/v1/api)",
            "Header versioning",
            "Parameter versioning",
            "Content negotiation"
          ]
        },
        {
          name: "Rate Limiting",
          description: "Controlling the rate of requests a client can make to an API",
          implementations: [
            "Token bucket algorithm",
            "Fixed window",
            "Sliding window",
            "Leaky bucket algorithm"
          ]
        },
        {
          name: "GraphQL",
          description: "A query language for APIs and a runtime for executing those queries by using a type system you define for your data",
          importance: "Allows clients to request only the data they need"
        },
        {
          name: "REST vs. SOAP",
          description: "Comparison between REST (Representational State Transfer) and SOAP (Simple Object Access Protocol) APIs",
          importance: "Understanding the differences helps in choosing the right protocol for your needs"
        }
      ]
    }
  ];

  const handleAnswerClick = (selectedAnswer) => {
    if (showExplanation) return;

    setShowExplanation(true);
    if (selectedAnswer === apiQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < apiQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setShowExplanation(false);
    setAnsweredQuestions(new Set());
    setUserAnswers({});
    setSelectedQuestionId(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => setActiveTab('theory')}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === 'theory'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-blue-600 hover:bg-blue-50'
          }`}
        >
          Theory
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === 'quiz'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-blue-600 hover:bg-blue-50'
          }`}
        >
          Quiz
        </button>
        <Link
          to="/postman-testing"
          className="px-6 py-2 rounded-lg font-semibold bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300"
        >
          Postman Testing
        </Link>
      </div>

      <div className="max-w-4xl mx-auto font-serif">
        {activeTab === 'theory' && (
          <div className="max-w-4xl mx-auto space-y-8">
            {apiTheoryExtended.map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-blue-600 mb-6">{section.title}</h2>
                
                {section.content && (
                  <p className="text-gray-700 mb-4 leading-relaxed">{section.content}</p>
                )}

                {section.examples && (
                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Examples:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {section.examples.map((example, i) => (
                        <li key={i} className="text-gray-600">{example}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.methods && (
                  <div className="mt-4 grid gap-4">
                    {section.methods.map((method, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-600">{method.name}</h4>
                        <p className="text-gray-600">{method.description}</p>
                        {method.usage && (
                          <p className="text-sm text-gray-500 mt-1">Usage: {method.usage}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.categories && (
                  <div className="mt-4 space-y-6">
                    {section.categories.map((category, i) => (
                      <div key={i}>
                        <h3 className="font-semibold text-gray-800 mb-3">{category.name}</h3>
                        <div className="grid gap-3">
                          {category.codes.map((code, j) => (
                            <div key={j} className="bg-gray-50 p-3 rounded-lg flex items-center">
                              <span className="font-mono text-blue-600 mr-3">{code.code}</span>
                              <span className="text-gray-700">{code.meaning}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.practices && (
                  <div className="mt-4 space-y-6">
                    {section.practices.map((practice, i) => (
                      <div key={i}>
                        <h3 className="font-semibold text-gray-800 mb-3">{practice.category}</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {practice.items.map((item, j) => (
                            <li key={j} className="text-gray-600">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {section.topics && (
                  <div className="mt-4 space-y-6">
                    {section.topics.map((topic, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-600">{topic.name}</h4>
                        <p className="text-gray-600">{topic.description}</p>
                        {topic.importance && (
                          <p className="text-sm text-gray-500 mt-1">Importance: {topic.importance}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      {activeTab === 'quiz' && (
        <div className="flex gap-6">
          <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Questions Overview</h3>
            <div className="grid grid-cols-5 gap-2">
              {apiQuestions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => {
                    if (answeredQuestions.has(q.id) || q.id === currentQuestion + 1) {
                      setSelectedQuestionId(q.id);
                      setCurrentQuestion(q.id - 1);
                    }
                  }}
                  className={`
                    w-10 h-10 rounded-lg flex items-center justify-center font-semibold
                    ${answeredQuestions.has(q.id) 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer' 
                      : q.id === currentQuestion + 1
                        ? 'bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
                    ${selectedQuestionId === q.id ? 'ring-2 ring-blue-500' : ''}
                  `}
                >
                  {q.id}
                </button>
              ))}
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Progress</h4>
              <div className="flex justify-between text-sm">
                <span>Answered: {answeredQuestions.size}</span>
                <span>Remaining: {apiQuestions.length - answeredQuestions.size}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: `${(answeredQuestions.size / apiQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            {showScore ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                  You scored {score} out of {apiQuestions.length}
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
                    Question {currentQuestion + 1}/{apiQuestions.length}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-4">
                  {apiQuestions[currentQuestion].question}
                </h2>
                <div className="space-y-3">
                  {apiQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleAnswerClick(option);
                        setAnsweredQuestions(prev => new Set(prev).add(currentQuestion + 1));
                        setUserAnswers(prev => ({
                          ...prev,
                          [currentQuestion + 1]: {
                            selected: option,
                            correct: option === apiQuestions[currentQuestion].correctAnswer
                          }
                        }));
                      }}
                      className={`w-full p-3 text-left rounded-lg transition-colors ${
                        showExplanation
                          ? option === apiQuestions[currentQuestion].correctAnswer
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
                      {apiQuestions[currentQuestion].explanation}
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
      )}
    </div>
    </div>
  );
};

export default APITesting;