import React, { useState } from 'react';
import { WBtheory, WBtestCases, WBcodeExamples } from '../Data/Data.js';
import WBChatbotDocs from './WBChatbotDocs';
import { useNavigate } from 'react-router-dom';

const WhiteBoxTesting = () => {
  const [activeTab, setActiveTab] = useState('theory');
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [selectedTestCase, setSelectedTestCase] = useState(null);
  const [showCode, setShowCode] = useState(false);

  const WBchatbotRules = [
    {
      trigger: 'hi|hello|hey|^$|^\\s+$',
      response: (input) => {
        if (!input || input.trim() === '') {
          return 'Please ask a question...';
        }
        return 'Hi! How can I help you today?';
      }
    },
    {
      trigger: 'white box|whitebox|what is white box|what\'s white box|explain white box|white box testing',
      response: `White box testing, also known as clear box testing, examines the internal logic of software systems. Key concepts include:
      • Statement Coverage
      • Branch Coverage
      • Path Coverage
      • Control Flow Testing
      • Data Flow Testing

      Which concept would you like to learn more about?`
    },
    {
      trigger: '^code coverage$|^Code Coverage$|coverage techniques|code coverage techniques|^coverage$',
      response: `Here are the main code coverage techniques:

      1. Statement Coverage
         - Measures which lines of code are executed
         - Basic level of coverage testing

      2. Branch Coverage
         - Tests all decision outcomes
         - More thorough than statement coverage

      3. Path Coverage
         - Tests all possible execution paths
         - Most comprehensive coverage

      4. Condition Coverage
         - Tests boolean expressions
         - Focuses on complex conditions

      Would you like to learn more about any specific type?`
    },
    {
      trigger: 'statement|statement coverage|explain statement|what is statement coverage',
      response: `Statement Coverage ensures each line of code is executed at least once.

      Example:
      function gradeScore(score) {
        let grade;                  // Statement 1
        if (score >= 90) {         // Statement 2
          grade = 'A';             // Statement 3
        } else {
          grade = 'B';             // Statement 4
        }
        return grade;              // Statement 5
      }

      Would you like to:
      1. See test cases for this example
      2. Learn about measuring statement coverage
      3. See more examples`
    },
    {
      trigger: 'branch|branch coverage|explain branch|what is branch coverage',
      response: `Branch Coverage tests all possible decision outcomes.

      Example:
      function validateInput(value) {
        if (value < 0) {           // Branch 1: true/false
          return 'Invalid';
        } else if (value > 100) {  // Branch 2: true/false
          return 'Too high';
        }
        return 'Valid';
      }

      Would you like to:
      1. See test cases for branches
      2. Learn about decision points
      3. See more examples`
    },
    {
      trigger: 'path|path coverage|test path|paths|what is path|explain path',
      response: `Path Coverage tests all possible execution paths through the code.

      Example:
      function processOrder(isVIP, hasDiscount) {
        // Possible paths:
        // 1. VIP + Discount
        // 2. VIP + No Discount
        // 3. Not VIP + Discount
        // 4. Not VIP + No Discount

        let price = 100;
        if (isVIP) price *= 0.9;
        if (hasDiscount) price *= 0.95;
        return price;
      }

      Would you like to:
      1. See test cases for each path
      2. Learn about path identification
      3. See more examples`
    },
    {
      trigger: '^testing tools$|^Testing Tools$|^tools$|^tool$|coverage tools?|testing frameworks?',
      response: `Popular white box testing tools include:

      1. JaCoCo (Java)
         - Statement and branch coverage
         - Integration with Maven/Gradle
         - HTML reports generation

      2. Istanbul (JavaScript)
         - Line and function coverage
         - Integration with Jest/Mocha
         - Coverage reporting

      3. Coverage.py (Python)
         - Line and branch coverage
         - HTML/XML reports
         - Integration with pytest

      Would you like to:
      1. Learn how to use a specific tool
      2. See example reports
      3. Understand tool configuration`
    },
    {
      trigger: '^test case creation$|^Test Case Creation$|create test cases?|test cases?',
      response: `For creating effective test cases, follow these steps:

      1. Analyze the Code Structure
         - Identify all statements
         - Map decision points
         - List possible paths

      2. Design Test Cases
         - Cover all statements
         - Test all branches
         - Include boundary conditions

      3. Example Structure:
         test('description', () => {
           // Arrange
           const input = value;
           // Act
           const result = functionUnderTest(input);
           // Assert
           expect(result).toBe(expectedOutput);
         });

      Would you like to:
      1. See more examples
      2. Learn about test case design patterns
      3. Practice creating test cases`
    },
    {
      trigger: '^best practices$|^Best Practices$|^practices$|testing tips|common mistakes',
      response: `Here are key best practices for white box testing:

      1. Test Coverage
         - Start with statement coverage
         - Progress to branch coverage
         - Aim for path coverage where critical

      2. Test Design
         - Write tests before fixing bugs
         - Include boundary conditions
         - Test negative scenarios

      3. Documentation
         - Document test cases clearly
         - Maintain test coverage reports
         - Track uncovered code

      Would you like to:
      1. See examples of each practice
      2. Learn implementation details
      3. Understand common pitfalls`
    },
    {
      trigger: 'example|show me|can you show|give me an example|show test cases|code example',
      response: `Here's a simple example of white box testing:

      1. Statement Coverage Example:
      function calculateTotal(price) {
          let total = price;        // Statement 1
          if (price > 100) {       // Statement 2
              total *= 0.9;        // Statement 3
          }
          return total;            // Statement 4
      }

      Test Cases:
      1. price = 50  (covers statements 1, 2, 4)
      2. price = 150 (covers statements 1, 2, 3, 4)

      Would you like to:
      1. See more examples
      2. Try different test cases
      3. See examples for other coverage types`
    },
    {
      trigger: 'test loops and conditions|path and branch|coverage testing|explain both|multiple|combined',
      response: `Let me explain both concepts:

      1. Loop Testing:
         - Test 0 iterations
         - Test 1 iteration
         - Test multiple iterations
         - Test maximum iterations

      2. Branch Coverage:
         - Test all decision points
         - Cover true/false conditions
         - Test boundary values

      Would you like to:
      1. See examples of either concept
      2. Learn about testing strategies
      3. See combined examples`
    },
    {
      trigger: 'explain more|tell me more|show how|why|what about|how do I|can you explain',
      response: `What specific aspect would you like to learn more about?

      1. Code examples
      2. Test cases
      3. Best practices
      4. Common pitfalls
      5. Implementation details

      Please specify your area of interest.`
    },
    {
      trigger: 'control flow|control testing|flow testing',
      response: `Control Flow Testing examines the sequence of operations in your code.

      Key aspects include:
      1. Sequential flow
      2. Conditional branches
      3. Loops and iterations
      4. Function calls

      Would you like to:
      1. See control flow examples
      2. Learn about flow graphs
      3. Understand testing strategies`
    },
    {
      trigger: 'data flow|data testing|flow analysis',
      response: `Data Flow Testing focuses on tracking variables and their values.

      Key concepts:
      1. Variable definitions
      2. Variable usage
      3. Definition-use pairs
      4. Data dependencies

      Would you like to:
      1. See data flow examples
      2. Learn about analysis techniques
      3. Understand testing patterns`
    },
    {
      trigger: '.*',
      response: `I'm not sure about that specific query. Here are some topics I can help with:
      • White box testing concepts
      • Code coverage techniques
      • Test case creation
      • Testing tools
      • Best practices

      What would you like to learn about?`
    }
  ];

  const getDefaultResponse = () => {
    return `I'm not sure about that specific query. Here are some topics I can help with:
    • White box testing concepts
    • Code coverage techniques
    • Test case creation
    • Testing tools
    • Best practices
    
    What would you like to learn about?`;
  };

  const getErrorResponse = () => {
    return "I apologize, but I encountered an error processing your request. Please try again.";
  };

  const getBestMatch = (matchingRules, input) => {
    if (matchingRules.length === 1) {
      return matchingRules[0];
    }

    return matchingRules.sort((a, b) => {
      if (a.priority && b.priority) {
        return b.priority - a.priority;
      }
      return b.trigger.length - a.trigger.length;
    })[0];
  };

  const processUserInput = (input) => {
    try {
      const normalizedInput = input.toLowerCase().trim();

      if (!normalizedInput) {
        return 'Please ask a question...';
      }

      const matchingRules = WBchatbotRules.filter(rule => {
        try {
          const regex = new RegExp(rule.trigger, 'i');
          return regex.test(normalizedInput);
        } catch (e) {
          console.error(`Invalid regex pattern: ${rule.trigger}`);
          return false;
        }
      });

      if (matchingRules.length === 0) {
        return getDefaultResponse();
      }

      const bestMatch = getBestMatch(matchingRules, normalizedInput);
      
      try {
        if (typeof bestMatch.response === 'function') {
          return bestMatch.response(normalizedInput);
        }
        return bestMatch.response;
      } catch (e) {
        console.error('Error processing response:', e);
        return getDefaultResponse();
      }
    } catch (e) {
      console.error('Error processing input:', e);
      return getErrorResponse();
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage = { type: 'user', text: userInput };
    const botMessage = { type: 'bot', text: processUserInput(userInput) };

    setChatHistory([...chatHistory, userMessage, botMessage]);
    setUserInput('');
  };

  const handleClearChat = () => {
    setChatHistory([]);
    setUserInput('');
  };

  const ResponseType = {
    TEXT: 'text',
    CODE: 'code',
    EXAMPLE: 'example',
    ERROR: 'error'
  };

  const createResponse = (type, content, metadata = {}) => ({
    type,
    content,
    timestamp: new Date(),
    ...metadata
  });

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 py-4 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-wrap gap-2 sm:space-x-4 mb-4 sm:mb-8">
          {['theory', 'practice', 'code', 'documentation'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-semibold transition-colors
                ${activeTab === tab 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
          <button
            onClick={() => navigate('/box-testing')}
            className="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm sm:text-base"
          >
            Go Back
          </button>
        </div>

        {activeTab === 'theory' && (
          <section className="bg-white rounded-xl shadow-lg p-3 sm:p-6 mb-4 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">{WBtheory.introduction.title}</h1>

            <div className="prose max-w-none space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-600">{WBtheory.introduction.description}</p>
              
              <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Key Points</h3>
                <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2">
                  {WBtheory.introduction.keyPoints.map((point, index) => (
                    <li key={index} className="text-sm sm:text-base text-gray-700">{point}</li>
                  ))}
                </ul>
              </div>

              {WBtheory.mainConcepts.map((concept, index) => (
                <div key={index} className="mt-6 sm:mt-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{concept.title}</h2>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2">
                    {concept.points.map((point, idx) => (
                      <li key={idx} className="text-sm sm:text-base text-gray-700">{point}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Advantages</h3>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2">
                    {WBtheory.advantages.map((advantage, index) => (
                      <li key={index} className="text-sm sm:text-base text-gray-700">{advantage}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Challenges</h3>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2">
                    {WBtheory.challenges.map((challenge, index) => (
                      <li key={index} className="text-sm sm:text-base text-gray-700">{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {WBtheory.bestPractices.map((practice, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">{practice.title}</h3>
                      <p className="text-gray-600">{practice.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Coverage Metrics</h2>
                <div className="space-y-4">
                  {WBtheory.coverageMetrics.map((metric, index) => (
                    <div key={index} className="bg-yellow-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">{metric.name}</h3>
                      <p className="text-gray-600 mb-2">{metric.description}</p>
                      <code className="bg-yellow-100 px-2 py-1 rounded">{metric.formula}</code>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Testing Tools</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {WBtheory.tools.map((tool, index) => (
                    <div key={index} className="border p-3 rounded-lg">
                      <h3 className="font-semibold">{tool.name}</h3>
                      <p className="text-gray-600">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Real World Applications</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {WBtheory.realWorldApplications.map((app, index) => (
                    <div key={index} className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">{app.scenario}</h3>
                      <p className="text-gray-600">{app.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Common Errors</h2>
                <div className="space-y-4">
                  {WBtheory.commonErrors.map((error, index) => (
                    <div key={index} className="bg-red-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">{error.type}</h3>
                      <p className="text-gray-600">{error.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'practice' && (
          <section className="bg-white rounded-xl shadow-lg p-3 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Practice: Chatbot Testing</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="md:col-span-1 space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold">Test Cases</h3>
                <div className="space-y-2">
                  {WBtestCases.map((testCase, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTestCase(testCase)}
                      className="w-full p-2 sm:p-3 text-left rounded-lg border border-gray-200 hover:bg-gray-50"
                    >
                      <p className="font-medium text-sm sm:text-base">{testCase.name}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{testCase.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 border rounded-lg p-2 sm:p-4">
                <div className="h-64 sm:h-[80%] overflow-y-auto mb-2 sm:mb-4 space-y-2 sm:space-y-4">
                  {chatHistory.map((message, index) => (
                    <div
                      key={index}
                      className={`p-2 sm:p-3 rounded-lg text-sm sm:text-base ${
                        message.type === 'user'
                          ? 'bg-blue-100 ml-auto max-w-[85%] sm:max-w-[80%]'
                          : 'bg-gray-100 mr-auto max-w-[85%] sm:max-w-[80%]'
                      }`}
                    >
                      {message.text}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="flex-1 p-2 text-sm sm:text-base border rounded-lg"
                      placeholder="Type your message..."
                    />
                    <button
                      type="submit"
                      className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base whitespace-nowrap"
                    >
                      Send
                    </button>
                  </form>
                  <button
                    onClick={handleClearChat}
                    className="px-3 sm:px-4 py-2 mt-8 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm sm:text-base"
                  >
                    Clear Chat
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'code' && (
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Code Implementation</h2>
            <div className="space-y-4">
              {WBcodeExamples.map((example, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold">{example.title}</h3>
                  <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                  <p className="text-gray-600">{example.explanation}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'documentation' && (
          <WBChatbotDocs />
        )}
      </div>
    </div>
  );
};

export default WhiteBoxTesting;