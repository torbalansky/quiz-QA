import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AIinQA = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [categoryScores, setCategoryScores] = useState({
    'Overview': 0,
    'Prompt Engineering': 0,
    'AI Agents': 0,
    'Tools': 0,
    'Automation': 0,
    'Future': 0
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'prompts', label: 'Prompt Engineering' },
    { id: 'agents', label: 'AI Agents' },
    { id: 'tools', label: 'AI Tools' },
    { id: 'automation', label: 'Test Automation' },
    { id: 'future', label: 'Future of QA' },
    { id: 'resources', label: 'Resources' },
    { id: 'quiz', label: 'Quiz' }
  ];

  const questions = [
    {
      questionText: 'Which of the following is a key benefit of AI in QA?',
      options: [
        'Completely replacing human testers',
        'Increased test coverage and efficiency',
        'Eliminating all bugs permanently',
        'Making testing more expensive'
      ],
      correctAnswer: 1,
      category: 'Overview'
    },
    {
      questionText: 'What is the primary goal of AI in software testing?',
      options: [
        'To make testing more complicated',
        'To replace all manual testing',
        'To enhance testing efficiency and accuracy',
        'To increase testing costs'
      ],
      correctAnswer: 2,
      category: 'Overview'
    },

    {
      questionText: 'What is a key component of a well-structured test generation prompt?',
      options: [
        'Long and complex instructions',
        'Vague requirements',
        'Clear context and expected output format',
        'Technical jargon only'
      ],
      correctAnswer: 2,
      category: 'Prompt Engineering'
    },
    {
      questionText: 'Which element should NOT be included in a QA prompt?',
      options: [
        'Context of the testing scenario',
        'Expected output format',
        'Personal opinions about the code',
        'Specific constraints or limitations'
      ],
      correctAnswer: 2,
      category: 'Prompt Engineering'
    },

    {
      questionText: 'What is a "self-healing" test in the context of AI agents?',
      options: [
        'Tests that fix application bugs',
        'Tests that automatically adapt to UI changes',
        'Tests that never fail',
        'Tests that repair the testing environment'
      ],
      correctAnswer: 1,
      category: 'AI Agents'
    },
    {
      questionText: 'Which is a key consideration when training QA agents?',
      options: [
        'Using only failed test cases',
        'Ignoring edge cases',
        'Including diverse test scenarios and data',
        'Focusing only on happy paths'
      ],
      correctAnswer: 2,
      category: 'AI Agents'
    },

    {
      questionText: 'Which tool is primarily used for visual regression testing?',
      options: [
        'Jest',
        'Selenium',
        'Applitools',
        'JUnit'
      ],
      correctAnswer: 2,
      category: 'Tools'
    },
    {
      questionText: 'What is the main advantage of ML-based testing tools?',
      options: [
        'They are free to use',
        'They can learn from test execution patterns',
        'They work offline only',
        'They require no configuration'
      ],
      correctAnswer: 1,
      category: 'Tools'
    },

    {
      questionText: 'How does AI improve test maintenance?',
      options: [
        'By requiring more manual updates',
        'By automatically adapting to UI changes',
        'By ignoring test failures',
        'By running tests slower'
      ],
      correctAnswer: 1,
      category: 'Automation'
    },
    {
      questionText: 'Which is NOT a benefit of AI-powered test automation?',
      options: [
        'Improved test coverage',
        'Faster test execution',
        'Zero maintenance required',
        'Better defect detection'
      ],
      correctAnswer: 2,
      category: 'Automation'
    },

    {
      questionText: 'What skill will be most important for QA engineers in the AI era?',
      options: [
        'Manual test execution',
        'AI/ML understanding and prompt engineering',
        'Basic computer usage',
        'Hardware repair'
      ],
      correctAnswer: 1,
      category: 'Future'
    },
    {
      questionText: 'Which trend is NOT expected in the future of AI-powered QA?',
      options: [
        'Increased test automation',
        'Complete elimination of human testers',
        'Better predictive analytics',
        'More efficient test generation'
      ],
      correctAnswer: 1,
      category: 'Future'
    }
  ];

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setCategoryScores({
      'Overview': 0,
      'Prompt Engineering': 0,
      'AI Agents': 0,
      'Tools': 0,
      'Automation': 0,
      'Future': 0
    });
  };

  const handleAnswerClick = (selectedAnswer) => {
    const currentQ = questions[currentQuestion];
    const isCorrect = selectedAnswer === currentQ.correctAnswer;
    
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
      setCategoryScores(prev => ({
        ...prev,
        [currentQ.category]: prev[currentQ.category] + 1
      }));
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const getScoreMessage = (score) => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Perfect! You're an AI in QA expert! 🎉";
    if (percentage >= 80) return "Excellent work! You have a strong grasp of AI in QA! 👏";
    if (percentage >= 60) return "Good job! Keep learning to improve your knowledge! 💪";
    return "Keep studying! Review the material and try again. 📚";
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg mb-4 sm:mb-6">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">AI in Quality Assurance</h1>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Exploring the intersection of Artificial Intelligence and Software Testing
              </p>
            </div>

            <div className="border-b border-gray-200">
              <div className="sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="w-full px-4 py-2 flex items-center justify-between text-gray-700 bg-white"
                >
                  <span className="font-medium">
                    {tabs.find(tab => tab.id === activeTab)?.label || 'Select Topic'}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
    
                {isMenuOpen && (
                  <div className="absolute z-10 w-full bg-white border-b border-gray-200 shadow-lg">
                    {tabs.map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setIsMenuOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm
                          ${activeTab === tab.id 
                            ? 'bg-purple-50 text-purple-600' 
                            : 'text-gray-600 hover:bg-gray-50'}`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="hidden sm:grid grid-cols-2 md:grid-cols-4">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm border-b-2 
                      ${index >= tabs.length/2 ? 'border-t border-gray-100' : ''}
                      ${activeTab === tab.id 
                        ? 'border-b-purple-500 text-purple-600' 
                        : 'border-b-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">The AI Revolution in QA</h2>
                  <p className="text-gray-600">
                    Artificial Intelligence is transforming how we approach software testing, making it more efficient, 
                    predictive, and comprehensive than ever before. From automated test generation to intelligent test 
                    maintenance, AI is becoming an essential tool in the modern QA toolkit.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">Key Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold text-purple-800">Increased Efficiency</h3>
                      <p className="text-sm text-purple-600">Automate repetitive tasks and reduce manual testing effort</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold text-blue-800">Better Coverage</h3>
                      <p className="text-sm text-blue-600">AI can identify edge cases and generate comprehensive test scenarios</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h3 className="font-semibold text-green-800">Predictive Analysis</h3>
                      <p className="text-sm text-green-600">Identify potential issues before they become problems</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h3 className="font-semibold text-red-800">Self-Healing</h3>
                      <p className="text-sm text-red-600">Tests that can adapt to UI changes automatically</p>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'prompts' && (
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">Prompt Engineering for QA</h2>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-800 mb-2">What is Prompt Engineering?</h3>
                      <p className="text-gray-700">
                        Prompt engineering is the practice of designing and optimizing inputs to AI models to get more accurate, 
                        relevant, and useful outputs. In QA, this is crucial for test generation, bug analysis, and automation.
                      </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Prompt Writing Best Practices for QA</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-700">Structure</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            <li>Context: Describe the testing scenario</li>
                            <li>Task: Specify what needs to be tested</li>
                            <li>Format: Define expected output format</li>
                            <li>Constraints: List any limitations</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-700">Tips</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            <li>Be specific and clear</li>
                            <li>Include examples</li>
                            <li>Define edge cases</li>
                            <li>Specify test priorities</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-3">Example Prompts for QA Tasks</h3>
                      <div className="space-y-4">
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-medium text-gray-700">Test Case Generation</h4>
                          <pre className="text-sm text-gray-600 mt-2 whitespace-pre-wrap">
                            {`Context: Login functionality for e-commerce website
Task: Generate test cases
Requirements:
- Include positive and negative scenarios
- Cover password requirements
- Consider security aspects
Format: List each test case with steps and expected results`}
                          </pre>
                        </div>

                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-medium text-gray-700">Bug Analysis</h4>
                          <pre className="text-sm text-gray-600 mt-2 whitespace-pre-wrap">
                            {`Context: User reported intermittent 404 errors
Symptoms:
- Occurs during peak hours
- Affects specific product pages
Task: Analyze potential root causes
Format: Prioritized list of possible causes and investigation steps`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'agents' && (
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">AI Agents in QA</h2>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Understanding AI Agents</h3>
                      <p className="text-gray-700">
                        AI agents are autonomous programs that can perform testing tasks independently, learn from results, 
                        and make decisions based on predefined goals and constraints.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h3 className="font-semibold text-gray-800 mb-3">Types of QA Agents</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start space-x-2">
                            <span className="font-medium">Test Execution Agents:</span>
                            <span>Run and monitor automated tests</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="font-medium">Bug Detection Agents:</span>
                            <span>Analyze application behavior for anomalies</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="font-medium">Performance Agents:</span>
                            <span>Monitor and analyze system performance</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="font-medium">Security Agents:</span>
                            <span>Scan for vulnerabilities and security issues</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white p-4 rounded-lg border">
                        <h3 className="font-semibold text-gray-800 mb-3">Training QA Agents</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start space-x-2">
                            <span className="font-medium">Data Collection:</span>
                            <span>Gather test cases, bugs, and user behaviors</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="font-medium">Model Selection:</span>
                            <span>Choose appropriate AI models for specific tasks</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="font-medium">Training Process:</span>
                            <span>Iterative training with real testing scenarios</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="font-medium">Validation:</span>
                            <span>Verify agent performance against known test cases</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-3">Practical Example: Training a Test Generation Agent</h3>
                      <pre className="text-sm text-gray-600 whitespace-pre-wrap bg-white p-4 rounded border">
{`1. Define Agent Goals:
   - Generate valid test cases
   - Cover edge cases
   - Follow testing best practices

2. Training Data Preparation:
   - Collect existing test cases
   - Document test patterns
   - Include bug reports and fixes

3. Training Process:
   - Initial training with basic test cases
   - Refinement with complex scenarios
   - Validation against human-written tests

4. Deployment:
   - Start with supervised execution
   - Gradually increase autonomy
   - Monitor and adjust performance`}
                      </pre>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'tools' && (
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">Popular AI Testing Tools</h2>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800">Testim.io</h3>
                      <p className="text-gray-600">AI-powered test automation tool that learns from your application</p>
                      <div className="mt-2 space-x-2">
                        <span className="inline-block px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">Self-Healing</span>
                        <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">ML-Based</span>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800">Applitools</h3>
                      <p className="text-gray-600">Visual AI testing tool for automated visual testing</p>
                      <div className="mt-2 space-x-2">
                        <span className="inline-block px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">Visual Testing</span>
                        <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Cross-Browser</span>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800">Mabl</h3>
                      <p className="text-gray-600">Intelligent test automation with built-in healing capabilities</p>
                      <div className="mt-2 space-x-2">
                        <span className="inline-block px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">Auto-Healing</span>
                        <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Cloud-Based</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'automation' && (
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">AI-Powered Test Automation</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Test Generation</h3>
                      <p className="text-gray-600">
                        AI can analyze your application and automatically generate test cases based on user behavior patterns
                        and code changes.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Self-Healing Tests</h3>
                      <p className="text-gray-600">
                        AI algorithms can automatically adapt tests when UI elements change, reducing maintenance overhead.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Visual Testing</h3>
                      <p className="text-gray-600">
                        AI can detect visual regressions and layout issues that traditional testing might miss.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'future' && (
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">The Future of QA</h2>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      As AI continues to evolve, we can expect to see:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Autonomous testing systems that can design and execute tests without human intervention</li>
                      <li>Predictive analytics that can identify potential bugs before code is deployed</li>
                      <li>Natural language processing for test creation and maintenance</li>
                      <li>Advanced visual testing capabilities for complex UI/UX scenarios</li>
                      <li>Integration with CI/CD pipelines for intelligent test selection and execution</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">Skills for the Future</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-800">Technical Skills</h3>
                      <ul className="list-disc pl-5 text-sm text-gray-600">
                        <li>Machine Learning basics</li>
                        <li>Data Analysis</li>
                        <li>Programming fundamentals</li>
                        <li>API testing</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-800">Soft Skills</h3>
                      <ul className="list-disc pl-5 text-sm text-gray-600">
                        <li>Analytical thinking</li>
                        <li>Problem-solving</li>
                        <li>Continuous learning</li>
                        <li>Adaptability</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">Educational Resources</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
                      <h3 className="font-semibold text-gray-800 mb-3">AI Testing Fundamentals</h3>
                      <ul className="space-y-2">
                        <li>
                          <a 
                            href="https://www.perfecto.io/blog/ai-testing-tools" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 flex items-center"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Perfecto: AI Testing Tools Guide
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.selenium.dev/documentation/en/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 flex items-center"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Selenium Documentation
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
                      <h3 className="font-semibold text-gray-800 mb-3">Prompt Engineering</h3>
                      <ul className="space-y-2">
                        <li>
                          <a 
                            href="https://www.promptingguide.ai/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 flex items-center"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Prompt Engineering Guide
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://platform.openai.com/docs/guides/prompt-engineering" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 flex items-center"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            OpenAI Prompt Engineering Guide
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
                      <h3 className="font-semibold text-gray-800 mb-3">AI Tools & Frameworks</h3>
                      <ul className="space-y-2">
                        <li>
                          <a 
                            href="https://applitools.com/resources/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 flex items-center"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Applitools Resources
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://testim.io/blog/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 flex items-center"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Testim.io Blog
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
                      <h3 className="font-semibold text-gray-800 mb-3">Community & Learning</h3>
                      <ul className="space-y-2">
                        <li>
                          <a 
                            href="https://www.ministryoftesting.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 flex items-center"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Ministry of Testing
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.coursera.org/courses?query=ai%20testing" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 flex items-center"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Coursera AI Testing Courses
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'quiz' && (
              <div className="space-y-4 sm:space-y-6">
                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
                    AI in QA Assessment
                  </h2>
                  
                  <div className="bg-white rounded-lg">
                    {showScore ? (
                      <div className="space-y-4 sm:space-y-6">
                        <div className="text-center">
                          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
                            Final Score: {score} out of {questions.length}
                          </h3>
                          <p className="text-base sm:text-lg text-purple-600 mb-4">
                            {getScoreMessage(score)}
                          </p>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 sm:mb-6">
                            <div 
                              className="bg-purple-600 h-2.5 rounded-full transition-all duration-500"
                              style={{ width: `${(score / questions.length) * 100}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          {Object.entries(categoryScores).map(([category, categoryScore]) => (
                            <div key={category} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                              <h4 className="text-sm sm:text-base font-medium text-gray-700">
                                {category}
                              </h4>
                              <div className="flex items-center mt-2">
                                <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                                  <div 
                                    className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${(categoryScore / 2) * 100}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs sm:text-sm text-gray-600">
                                  {categoryScore}/2
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="text-center mt-6 sm:mt-8">
                          <button
                            onClick={resetQuiz}
                            className="w-full sm:w-auto px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                          >
                            Try Again
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4 sm:space-y-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                          <div className="space-y-2 sm:space-y-0">
                            <span className="block sm:inline text-sm text-gray-600">
                              Question {currentQuestion + 1} of {questions.length}
                            </span>
                            <span className="block sm:inline text-sm text-purple-600 sm:ml-4">
                              Category: {questions[currentQuestion].category}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-purple-600 mt-2 sm:mt-0">
                            Score: {score}
                          </span>
                        </div>
                        
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                          {questions[currentQuestion].questionText}
                        </h3>
                        
                        <div className="space-y-2 sm:space-y-3">
                          {questions[currentQuestion].options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleAnswerClick(index)}
                              className="w-full text-left p-3 sm:p-4 text-sm sm:text-base rounded-lg border border-gray-200 hover:bg-purple-50 hover:border-purple-300 transition-colors"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIinQA;