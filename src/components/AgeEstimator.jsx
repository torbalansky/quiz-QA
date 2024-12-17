import React, { useState } from "react";
import { testCases, documentationAgeCategory, helpModalDataB, ageEstimatorRTM, automationFeasibilityReport } from "../Data/Data";
import { useNavigate } from 'react-router-dom';
import { MdErrorOutline } from "react-icons/md";
import Modal from './Modal';

const AgeCategoryEstimator = () => {
  const [age, setAge] = useState("");
  const [category, setCategory] = useState(null);
  const [error, setError] = useState("");

  const testCasesValidation = testCases.map(tc => ({
    id: tc.id,
    pass: null,
    validation: ""
  }));

  const [testResults, setTestResults] = useState(testCasesValidation);

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showTestPlan, setShowTestPlan] = useState(false);
  const [showTestStrategy, setShowTestStrategy] = useState(false);
  const [showAutomationAnalysis, setShowAutomationAnalysis] = useState(false);
  const [showRTM, setShowRTM] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const validateInputs = () => {
    if (!age || isNaN(age) || age < 0 || !Number.isInteger(Number(age))) {
      return "Age must be a non-negative integer.";
    }
    return "";
  };

  const determineCategory = () => {
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      setCategory(null);
      return;
    }

    setError("");
    const ageValue = parseInt(age, 10);

    const categoryResult =
      ageValue <= 12
        ? "Kid"
        : ageValue <= 19
        ? "Teenager"
        : ageValue <= 64
        ? "Adult"
        : "Elder";

    setCategory(categoryResult);
  };

  const updateTestResult = (id, result) => {
    setTestResults((prevResults) =>
      prevResults.map((test) =>
        test.id === id
          ? {
              ...test,
              pass: result,
              validation:
                result === testCases.find((tc) => tc.id === id)?.isTrue
                  ? "Correct"
                  : "Incorrect",
            }
          : test
      )
    );
  };

  const handleSubmit = () => {
    const incorrectAnswers = testResults.filter((test) => test.validation !== "Correct");

    if (incorrectAnswers.length > 0) {
      const incorrectIds = incorrectAnswers.map(test => `Test Case ID: ${test.id}`).join(", ");
      alert(`Some answers are incorrect. Please review the following test cases: ${incorrectIds}`);
      return;
    }
    
    setActiveTab('closure');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setTestResults(
      testCases.map((testCase) => ({ id: testCase.id, pass: null, validation: "" }))
    );
  };

  const handleClearCalculator = () => {
    setAge('');
    setCategory(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="flex mb-6 border-b text-center flex-col md:flex-row justify-center">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-6 py-2 font-semibold transition-all duration-300 ${
            activeTab === 'overview'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('requirements')}
          className={`px-6 py-2 font-semibold transition-all duration-300 ${
            activeTab === 'requirements'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
        >
          Requirements
        </button>
        <button
          onClick={() => setActiveTab('testPlanning')}
          className={`px-6 py-2 font-semibold transition-all duration-300 ${
            activeTab === 'testPlanning'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
        >
          Test Planning
        </button>
        <button
          onClick={() => setActiveTab('testDesign')}
          className={`px-6 py-2 font-semibold transition-all duration-300 ${
            activeTab === 'testDesign'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
        >
          Test Design
        </button>
        <button
          onClick={() => setActiveTab('environment')}
          className={`px-6 py-2 font-semibold transition-all duration-300 ${
            activeTab === 'environment'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
        >
          Environment
        </button>
        <button
          onClick={() => setActiveTab('estimator')}
          className={`px-6 py-2 font-semibold transition-all duration-300 ${
            activeTab === 'estimator'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
        >
          Test Execution
        </button>
        <button
          onClick={() => setActiveTab('closure')}
          className={`px-6 py-2 font-semibold transition-all duration-300 ${
            activeTab === 'closure'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
        >
          Test Closure
        </button>
      </div>

      {activeTab === 'estimator' && (
        <div className="grid md:grid-cols-5 h-max gap-1 bg-gray-100 font-poppins">
          <div className="col-span-2 flex flex-col h-max">
            <div className="flex-grow border h-1/2 border-gray-300 bg-slate-600 text-yellow-50 overflow-auto p-4 justify-center text-center items-center">
              <h2 className="text-lg font-bold m-4 text-center">Age Category Estimator</h2>
              <label htmlFor="age" className="text-lg font-semibold m-2">
                Age:
              </label>
              <input
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter age"
                className="border border-gray-300 rounded p-2 mb-2 w-1/3 text-slate-900"
              />
              <div className="flex justify-center gap-2 mt-2">
                <button
                  onClick={determineCategory}
                  className="bg-blue-500 font-bold text-white p-3 rounded mb-4 w-1/3 hover:bg-lime-300 hover:text-slate-500 transition-all duration-300"
                >
                  Determine
                </button>
                <button
                  onClick={handleClearCalculator}
                  className="bg-red-600 font-bold text-white p-3 rounded mb-4 w-1/3 hover:bg-red-300 hover:text-slate-500 transition-all duration-300"
                >
                  Clear
                </button>
              </div>
              {error && (
                <p className="text-red-200 m-4 flex flex-row">
                  <MdErrorOutline className="w-10 h-10 mr-2 bg-red-600 rounded"/>
                  <strong>Error:</strong> {error}
                </p>
              )}
              {category && (
                <p className="text-lime-200 bg-slate-950 p-2 mt-4 border-2">
                  Age Category:&nbsp;  <strong>{category}</strong> 
                </p>
              )}
            </div>

            <div className="flex-grow border border-gray-300 h-1/2 bg-white overflow-auto p-4">
              <h2 className="text-2xl font-bold mb-4">Age Category Estimator Documentation</h2>
              <h3 className="text-lg font-bold mt-4">Overview</h3>
              <p>{documentationAgeCategory.overview}</p>

              <h3 className="text-lg font-bold mt-4">Functional Requirements</h3>
              <ul className="list-disc ml-6">
                {documentationAgeCategory.functionalRequirements.map((req, index) => (
                  <li key={index}>
                    <strong>{req.title}:</strong>
                    <ul className="list-disc ml-6">
                      {req.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold mt-4">Validation Rules</h3>
              <ul className="list-disc ml-6">
                {documentationAgeCategory.validationRules.map((rule, index) => (
                  <li key={index}>
                    <strong>{rule.title}:</strong>
                    <ul className="list-disc ml-6">
                      {rule.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold mt-4">Expected Behavior</h3>
              <ul className="list-disc ml-6">
                {documentationAgeCategory.expectedBehavior.map((expect, index) => (
                  <li key={index}>
                    <strong>Condition:</strong> {expect.condition}
                    <p><strong>Behavior:</strong> {expect.behavior}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-3 border border-gray-300 bg-white overflow-auto p-4">
          <Modal isOpen={isModalOpen} onClose={closeModal} modalData={helpModalDataB} />
            <h2 className="text-lg font-bold mb-2">Test Execution - Age Category Estimator</h2>
            <div className="text-gray-600 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Test Execution Instructions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Test cases have been defined and reviewed
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">→</span>
                    Execute each test case and observe the results
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">→</span>
                    Mark "Pass" if actual results match expected outcomes
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">→</span>
                    Mark "Fail" if any discrepancy is observed
                  </li>
                </ul>
                <button
                  onClick={openModal}
                  className="bg-blue-500 text-slate-100 py-1 px-2 mt-3 rounded-md hover:bg-blue-700 transition-all duration-300"
                >
                  Need help?
                </button>
              </div>
            </div>

            <table className="table-auto border-collapse w-full text-xs">
              <thead>
                <tr>
                  <th className="border p-2">ID</th>
                  <th className="border p-2">Test Case</th>
                  <th className="border p-2">Steps</th>
                  <th className="border p-2">Expected Outcome</th>
                  <th className="border p-2">Pass/Fail</th>
                  <th className="border p-2">Validation</th>
                </tr>
              </thead>
              <tbody>
                {testCases.map((testCase) => (
                  <tr key={testCase.id} className="text-center">
                    <td className="border p-2">{testCase.id}</td>
                    <td className="border p-2">{testCase.description}</td>
                    <td className="border p-2">{testCase.steps}</td>
                    <td className="border p-2">{testCase.expected}</td>
                    <td className="border p-2">
                      <button
                        className={`px-4 py-1 mb-1 rounded ${
                          testResults.find((t) => t.id === testCase.id)?.pass
                            ? "bg-green-500 text-white"
                            : "bg-gray-300 text-black"
                        }`}
                        onClick={() => updateTestResult(testCase.id, true)}
                      >
                        Pass
                      </button>
                      <button
                        className={`ml-2 px-4 py-1 rounded ${
                          testResults.find((t) => t.id === testCase.id)?.pass === false
                            ? "bg-red-500 text-white"
                            : "bg-gray-300 text-black"
                        }`}
                        onClick={() => updateTestResult(testCase.id, false)}
                      >
                        Fail
                      </button>
                    </td>
                    <td className="border p-2">
                      {testResults.find((t) => t.id === testCase.id)?.validation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={handleSubmit}
                 className="bg-slate-600 text-lime-200 p-2 rounded w-40  hover:bg-lime-300 hover:text-slate-500 transition-all duration-300"
              >
                Submit
              </button>
              <button
                onClick={handleReset}
                className="bg-violet-400 text-lime-200 p-2 rounded w-40  hover:bg-pink-400 transition-all duration-300"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'requirements' && (
        <div className="flex-grow border border-gray-300 h-1/2 font-serif bg-white overflow-auto p-4">
          <div className="mb-8 bg-purple-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Requirements Analysis Phase</h2>
            <div className="flex items-center gap-4 text-gray-600 mb-4">
              <div className="flex items-center">
                <span className="material-icons mr-2">📅</span>
                <span>Phase: 1/5 STLC</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons mr-2">⏱️</span>
                <span>Duration: Initial Phase</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons mr-2">✅</span>
                <span>Status: Completed</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Input Analysis</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Business Requirements Document</li>
                <li>User Stories and Use Cases</li>
                <li>Stakeholder Interviews</li>
                <li>Previous System Analysis</li>
                <li>Technical Specifications</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-800 mb-4">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Requirement Traceability Matrix (RTM)</li>
                <li>Test Strategy Document</li>
                <li>Initial Test Plan</li>
                <li>Automation Feasibility Analysis</li>
              </ul>
            </div>
          </div>

          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Application Overview</h3>
            <p className="text-gray-700 mb-4">{documentationAgeCategory.overview}</p>
            
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h4 className="text-lg font-bold text-yellow-800 mb-2">Key Stakeholders</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>End Users</li>
                <li>Development Team</li>
                <li>QA Team</li>
                <li>Project Manager</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Functional Requirements</h3>
            <div className="space-y-4">
              {documentationAgeCategory.functionalRequirements.map((req, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-blue-800 mb-2">{req.title}</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {req.details.map((detail, i) => (
                      <li key={i} className="text-gray-700">{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Validation Rules</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documentationAgeCategory.validationRules.map((rule, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-green-800 mb-2">{rule.title}</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {rule.details.map((detail, i) => (
                      <li key={i} className="text-gray-700">{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Expected Behavior</h3>
            <div className="space-y-4">
              {documentationAgeCategory.expectedBehavior.map((expect, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-purple-800 mb-2">Condition: {expect.condition}</h4>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-700"><strong>Expected Behavior:</strong> {expect.behavior}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Requirements Review Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Requirements are clear and unambiguous</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>All use cases are identified</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Validation rules are defined</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Error scenarios are documented</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Performance criteria specified</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Security requirements defined</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-purple-800">Phase Deliverables Status</h3>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div 
                  onClick={() => setShowRTM(true)}
                  className="text-center p-4 bg-green-50 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-green-100"
                >
                  <div className="text-3xl mb-2">📋</div>
                  <h4 className="font-semibold text-green-800">RTM</h4>
                  <p className="text-sm text-gray-600">Completed</p>
                  <span className="text-xs text-blue-600 mt-2 block">Click to view →</span>
                </div>
                <div 
                  onClick={() => setShowTestStrategy(true)}
                  className="text-center p-4 bg-blue-50 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-100"
                >
                  <div className="text-3xl mb-2">📊</div>
                  <h4 className="font-semibold text-blue-800">Test Strategy</h4>
                  <p className="text-sm text-gray-600">Completed</p>
                  <span className="text-xs text-blue-600 mt-2 block">Click to view →</span>
                </div>
                <div 
                  onClick={() => setShowTestPlan(true)}
                  className="text-center p-4 bg-purple-50 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-purple-100"
                >
                  <div className="text-3xl mb-2">📝</div>
                  <h4 className="font-semibold text-purple-800">Test Plan</h4>
                  <p className="text-sm text-gray-600">Completed</p>
                  <span className="text-xs text-blue-600 mt-2 block">Click to view →</span>
                </div>
                <div 
                  onClick={() => setShowAutomationAnalysis(true)}
                  className="text-center p-4 bg-yellow-50 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-yellow-100"
                >
                  <div className="text-3xl mb-2">⚙️</div>
                  <h4 className="font-semibold text-yellow-800">Automation Analysis</h4>
                  <p className="text-sm text-gray-600">Completed</p>
                  <span className="text-xs text-blue-600 mt-2 block">Click to view →</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="text-xl font-bold text-blue-800 mb-4">Test Strategy Document</h4>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h5 className="font-semibold mb-2">1. Testing Objectives</h5>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Ensure accurate age category classification</li>
                    <li>Validate input handling and error scenarios</li>
                    <li>Verify UI/UX requirements</li>
                    <li>Confirm system reliability and performance</li>
                  </ul>
                </div>
                <div className="border-b pb-4">
                  <h5 className="font-semibold mb-2">2. Testing Scope</h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded">
                      <h6 className="font-semibold text-green-800">In Scope</h6>
                      <ul className="list-disc list-inside text-sm">
                        <li>Input validation</li>
                        <li>Age classification</li>
                        <li>Error handling</li>
                        <li>UI functionality</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <h6 className="font-semibold text-red-800">Out of Scope</h6>
                      <ul className="list-disc list-inside text-sm">
                        <li>Database integration</li>
                        <li>User authentication</li>
                        <li>API testing</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <h5 className="font-semibold mb-2">3. Testing Approach</h5>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Unit Testing: Component level validation</li>
                    <li>Integration Testing: Component interactions</li>
                    <li>System Testing: End-to-end functionality</li>
                    <li>Usability Testing: User interface validation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="text-xl font-bold text-purple-800 mb-4">Initial Test Plan</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border p-4 rounded">
                    <h5 className="font-semibold mb-2">Test Environment</h5>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Browser: Chrome, Firefox, Safari</li>
                      <li>Devices: Desktop, Tablet, Mobile</li>
                      <li>OS: Windows, MacOS, iOS, Android</li>
                    </ul>
                  </div>
                  <div className="border p-4 rounded">
                    <h5 className="font-semibold mb-2">Test Data Requirements</h5>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Valid age ranges</li>
                      <li>Invalid inputs</li>
                      <li>Boundary values</li>
                      <li>Special characters</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <h5 className="font-semibold mb-2">Test Schedule</h5>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50 p-3 rounded text-center">
                      <div className="font-semibold">Planning</div>
                      <div className="text-sm text-gray-600">2 days</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-center">
                      <div className="font-semibold">Development</div>
                      <div className="text-sm text-gray-600">3 days</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-center">
                      <div className="font-semibold">Execution</div>
                      <div className="text-sm text-gray-600">4 days</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-center">
                      <div className="font-semibold">Reporting</div>
                      <div className="text-sm text-gray-600">1 day</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Requirements Phase Sign-off</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border p-4 rounded bg-white">
                  <h5 className="font-semibold mb-2">QA Team Lead</h5>
                  <p className="text-sm text-gray-600">✅ Approved</p>
                  <p className="text-sm text-gray-600">Date: 2024-02-20</p>
                </div>
                <div className="border p-4 rounded bg-white">
                  <h5 className="font-semibold mb-2">Project Manager</h5>
                  <p className="text-sm text-gray-600">✅ Approved</p>
                  <p className="text-sm text-gray-600">Date: 2024-02-21</p>
                </div>
                <div className="border p-4 rounded bg-white">
                  <h5 className="font-semibold mb-2">Stakeholder</h5>
                  <p className="text-sm text-gray-600">✅ Approved</p>
                  <p className="text-sm text-gray-600">Date: 2024-02-22</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'rtm' && (
        <div className="container mx-auto p-4">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-purple-800">Requirements Traceability Matrix</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-lg rounded-lg">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-2 text-xs">Req ID</th>
                    <th className="px-4 py-2 text-xs">Requirement</th>
                    <th className="px-4 py-2 text-xs">Description</th>
                    <th className="px-4 py-2 text-xs">Test Cases</th>
                    <th className="px-4 py-2 text-xs">Priority</th>
                    <th className="px-4 py-2 text-xs">Status</th>
                    <th className="px-4 py-2 text-xs">Automation</th>
                    <th className="px-4 py-2 text-xs">Category</th>
                    <th className="px-4 py-2 text-xs">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {ageEstimatorRTM.matrix.map((req) => (
                    <tr key={req.reqID} className="border-b text-xs hover:bg-gray-50">
                      <td className="px-4 py-2">{req.reqID}</td>
                      <td className="px-4 py-2">{req.requirement}</td>
                      <td className="px-4 py-2">{req.description}</td>
                      <td className="px-4 py-2">{req.testCaseIDs.join(", ")}</td>
                      <td className="px-4 py-2">
                        <span className={`px-2 py-1 rounded-full text-sm ${
                          req.priority === 'High' ? 'bg-red-100 text-red-800' :
                          req.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {req.priority}
                        </span>
                      </td>
                      <td className="px-4 py-2">{req.status}</td>
                      <td className="px-4 py-2">{req.automationStatus}</td>
                      <td className="px-4 py-2">{req.category}</td>
                      <td className="px-4 py-2">{req.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Automation Feasibility Report</h2>

            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">Summary</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Overall Feasibility</p>
                  <p className="text-lg font-bold text-blue-600">
                    {automationFeasibilityReport.summary.overallFeasibility}
                  </p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600">Estimated Coverage</p>
                  <p className="text-lg font-bold text-green-600">
                    {automationFeasibilityReport.summary.estimatedCoverage}
                  </p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-gray-600">Recommended Tools</p>
                  <p className="text-lg font-bold text-purple-600">
                    {automationFeasibilityReport.summary.recommendedTools.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">Component Analysis</h3>
              <div className="grid gap-4">
                {automationFeasibilityReport.analysis.map((component, index) => (
                  <div key={index} className="border-b pb-4">
                    <h4 className="font-semibold text-lg">{component.component}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                      <div>
                        <p className="text-sm text-gray-600">Feasibility</p>
                        <p className="font-semibold">{component.feasibility}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Complexity</p>
                        <p className="font-semibold">{component.complexity}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Priority</p>
                        <p className="font-semibold">{component.priority}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Effort</p>
                        <p className="font-semibold">{component.estimatedEffort}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{component.rationale}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Risks</h3>
                <ul className="space-y-4">
                  {automationFeasibilityReport.risks.map((risk, index) => (
                    <li key={index} className="border-b pb-2">
                      <p className="font-semibold">{risk.risk}</p>
                      <p className="text-sm text-gray-600">Impact: {risk.impact}</p>
                      <p className="text-sm text-gray-600">Mitigation: {risk.mitigation}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
                <ul className="list-disc pl-4 space-y-2">
                  {automationFeasibilityReport.recommendations.map((rec, index) => (
                    <li key={index} className="text-gray-700">{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'overview' && (
        <div className="container mx-auto p-4 max-w-6xl font-serif">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-purple-800 mb-6">
              Age Calculator Testing Project Overview
            </h1>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                🎯 Project Scope
              </h2>
              <p className="text-gray-600 leading-relaxed">
                This section demonstrates a comprehensive testing approach for the Age Calculator application,
                following the Software Testing Life Cycle (STLC). We'll walk through each phase of testing,
                from requirements analysis to test closure, ensuring quality and reliability.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                🔄 Testing Life Cycle
              </h2>
              <div className="flex justify-center mb-4">
                <div className="grid text-md grid-cols-6 gap-4 w-full">
                  {[
                    {
                      phase: 'Requirements',
                      icon: '📝',
                      status: 'pending'
                    },
                    {
                      phase: 'Test Planning',
                      icon: '🎯',
                      status: 'pending'
                    },
                    {
                      phase: 'Test Design',
                      icon: '✏️',
                      status: 'pending'
                    },
                    {
                      phase: 'Environment',
                      icon: '⚙️',
                      status: 'pending'
                    },
                    {
                      phase: 'Test Execution',
                      icon: '▶️',
                      status: 'pending'
                    },
                    {
                      phase: 'Test Closure',
                      icon: '✅',
                      status: 'pending'
                    }
                  ].map((phase, index) => (
                    <div key={phase.phase} className="relative">
                      <div className={`p-4 rounded-lg text-center ${
                        phase.status === 'current' 
                          ? 'bg-blue-100 border-2 border-blue-500' 
                          : 'bg-gray-50'
                      }`}>
                        <div className="text-2xl mb-2">{phase.icon}</div>
                        <div className={`font-semibold ${
                          phase.status === 'current' 
                            ? 'text-blue-800' 
                            : 'text-gray-600'
                        }`}>
                          {phase.phase}
                        </div>
                      </div>
                      {index < 5 && (
                        <div className="absolute top-1/2 -right-2 w-4 h-4 transform translate-x-1/2 -translate-y-1/2">
                          <span className="text-blue-500">→</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center text-gray-600 mt-4">
                <p>Follow each phase systematically to ensure comprehensive testing coverage</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                📑 Testing Artifacts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Planning Documents</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Test Strategy</li>
                    <li>Test Plan</li>
                    <li>RTM</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Test Design</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Test Scenarios</li>
                    <li>Test Cases</li>
                    <li>Test Scripts</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Reports</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Test Execution Reports</li>
                    <li>Defect Reports</li>
                    <li>Test Metrics</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                🔑 Key Testing Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Functional Testing</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Input validation</li>
                    <li>Age category classification</li>
                    <li>Error handling</li>
                    <li>UI functionality</li>
                  </ul>
                </div>
                <div className="border p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Non-Functional Testing</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Usability testing</li>
                    <li>Performance testing</li>
                    <li>Browser compatibility</li>
                    <li>Accessibility testing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                🧭 Navigation Guide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-blue-800">Documentation</h3>
                  <p className="text-sm text-gray-600">Review requirements and specifications</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-blue-800">RTM & Reports</h3>
                  <p className="text-sm text-gray-600">Explore traceability and feasibility analysis</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-blue-800">Age Estimator</h3>
                  <p className="text-sm text-gray-600">Test the application functionality</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-blue-800">Test Results</h3>
                  <p className="text-sm text-gray-600">View execution results and metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showTestPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 text-center">
            <div className="inline-block w-full max-w-4xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-purple-800">Test Plan - Age Estimator</h2>
                <button 
                  onClick={() => setShowTestPlan(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">1. Test Overview</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Application:</strong> Age Category Estimator</p>
                  <p className="mb-2"><strong>Version:</strong> 1.0</p>
                  <p className="mb-2"><strong>Scope:</strong> Functional Testing</p>
                  <p><strong>Environment:</strong> Web Browser (Chrome, Firefox, Safari)</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">2. Test Scenarios</h3>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Verify age classification for different age groups</li>
                    <li>Validate input field constraints</li>
                    <li>Test boundary conditions for age categories</li>
                    <li>Verify error handling for invalid inputs</li>
                    <li>Test edge cases and out-of-range values</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">3. Test Cases</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 border">Test Case ID</th>
                        <th className="px-4 py-2 border">Description</th>
                        <th className="px-4 py-2 border">Test Steps</th>
                        <th className="px-4 py-2 border">Expected Result</th>
                        <th className="px-4 py-2 border">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          id: "TC01",
                          description: "Correctly classify a 5-year-old as Kid",
                          steps: "Enter age 5 and click Determine.",
                          expected: "Kid",
                          status: "PassFail"
                        },
                        {
                          id: "TC02",
                          description: "Correctly classify a 15-year-old as Teenager",
                          steps: "Enter age 15 and click Determine.",
                          expected: "Teenager",
                          status: "PassFail"
                        },
                        {
                          id: "TC03",
                          description: "Correctly classify a 20-year-old as Adult",
                          steps: "Enter age 20 and click Determine.",
                          expected: "Adult",
                          status: "PassFail"
                        },
                        {
                          id: "TC04",
                          description: "Correctly classify a 70-year-old as Elder",
                          steps: "Enter age 70 and click Determine.",
                          expected: "Elder",
                          status: "PassFail"
                        },
                        {
                          id: "TC05",
                          description: "Display error for negative age",
                          steps: "Enter age -5 and click Determine.",
                          expected: "Error message: 'Age must be a non-negative numeric value.'",
                          status: "PassFail"
                        },
                        {
                          id: "TC06",
                          description: "Display error for non-numeric age",
                          steps: "Enter age 'abc' and click Determine.",
                          expected: "Error message: 'Age must be a non-negative numeric value.'",
                          status: "PassFail"
                        },
                        {
                          id: "TC07",
                          description: "Display error for fractional age input",
                          steps: "Enter age 19.11 and click Determine.",
                          expected: "Error message: 'Age must be a non-negative integer.'",
                          status: "PassFail"
                        },
                        {
                          id: "TC08",
                          description: "Correctly classify the boundary age of 19 as Teenager",
                          steps: "Enter age 19 and click Determine.",
                          expected: "Teenager",
                          status: "PassFail"
                        },
                        {
                          id: "TC09",
                          description: "Correctly classify an age of 65 as Elder (boundary condition)",
                          steps: "Enter age 65 and click Determine.",
                          expected: "Elder",
                          status: "PassFail"
                        },  
                        {
                          id: "TC10",
                          description: "Correctly classify an age of 13 as Kid (boundary condition)",
                          steps: "Enter age 13 and click Determine.",
                          expected: "Teenager",
                          status: "PassFail"
                        },
                        {
                          id: "TC11",
                          description: "Correctly classify the minimum age 0 as Kid",
                          steps: "Enter age 0 and click Determine.",
                          expected: "Kid",
                          status: "PassFail"
                        },
                        {
                          id: "TC12",
                          description: "Correctly classify 120 as Elder",
                          steps: "Enter age 120 and click Determine.",
                          expected: "Elder",
                          status: "PassFail"
                        },
                        {
                          id: "TC13",
                          description: "Classify 125 (out of typical range) as Elder",
                          steps: "Enter age 125 and click Determine.",
                          expected: "Out of typical range",
                          status: "PassFail"
                        },
                        {
                          id: "TC14",
                          description: "Correctly classify an age of 64 as Adult (boundary condition)",
                          steps: "Enter age 64 and click Determine.",
                          expected: "Adult",
                          status: "PassFail"
                        },
                          {
                            id: "TC15",
                            description: "Verify input field accepts numeric values",
                            steps: "Enter numeric values in the age field",
                            expected: "Input field should accept the values",
                            status: "PassFail"
                          },
                          {
                            id: "TC16",
                            description: "Verify Determine button is clickable",
                            steps: "Check if the Determine button is clickable",
                            expected: "Button should be clickable and responsive",
                            status: "PassFail"
                          },
                          {
                            id: "TC17",
                            description: "Verify error message styling",
                            steps: "Trigger an error message and check styling",
                            expected: "Error message should be clearly visible in red",
                            status: "PassFail"
                          },
                          {
                            id: "TC18",
                            description: "Verify result display area visibility",
                            steps: "Submit a valid age and check result display",
                            expected: "Result should be displayed in designated area",
                            status: "PassFail"
                          },
                          {
                            id: "TC19",
                            description: "Verify input field placeholder text",
                            steps: "Check input field placeholder text",
                            expected: "Placeholder should read 'Enter age'",
                            status: "PassFail"
                          },  
                          {
                            id: "TC20",
                            description: "Verify error message clarity",
                            steps: "Trigger error messages and verify clarity",
                            expected: "Error messages should be clear and understandable",
                            status: "PassFail"
                          },

                          {
                            id: "TC21",
                            description: "Verify response time for age calculation",
                            steps: "Submit age and measure response time",
                            expected: "Response should be under 1 second",
                            status: "PassFail"
                          },
                          {
                            id: "TC22",
                            description: "Verify input field responsiveness",
                            steps: "Type rapidly in input field",
                            expected: "Input field should handle rapid input without lag",
                            status: "PassFail"
                          },

                          {
                            id: "TC23",
                            description: "Verify functionality in Chrome",
                            steps: "Test application in Chrome browser",
                            expected: "Application should work as expected",
                            status: "PassFail"
                          },
                          {
                            id: "TC24",
                            description: "Verify functionality in Firefox",
                            steps: "Test application in Firefox browser",
                            expected: "Application should work as expected",
                            status: "PassFail"
                          },
                          {
                            id: "TC25",
                            description: "Verify functionality in Safari",
                            steps: "Test application in Safari browser",
                            expected: "Application should work as expected",
                            status: "PassFail"
                          },

                          {
                            id: "TC26",
                            description: "Verify keyboard navigation",
                            steps: "Navigate through application using keyboard",
                            expected: "All functions should be accessible via keyboard",
                            status: "PassFail"
                          },
                          {
                            id: "TC27",
                            description: "Verify screen reader compatibility",
                            steps: "Test application with screen reader",
                            expected: "Content should be readable by screen reader",
                            status: "PassFail"
                          },
                          {
                            id: "TC28",
                            description: "Verify color contrast compliance",
                            steps: "Check color contrast ratios",
                            expected: "Color contrast should meet WCAG standards",
                            status: "PassFail"
                          },
                        
                          {
                            id: "TC29",
                            description: "Verify input field maximum length",
                            steps: "Enter very large number in input field",
                            expected: "Input field should handle long numbers appropriately",
                            status: "PassFail"
                            },
                          {
                            id: "TC30",
                            description: "Verify empty input handling",
                            steps: "Click Determine without entering age",
                            expected: "Should show appropriate error message",
                            status: "PassFail"
                          }
                      ].map((tc) => (
                        <tr key={tc.id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 border">{tc.id}</td>
                          <td className="px-4 py-2 border">{tc.description}</td>
                          <td className="px-4 py-2 border">{tc.steps}</td>
                          <td className="px-4 py-2 border">{tc.expected}</td>
                          <td className="px-4 py-2 border">{tc.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Test Execution Schedule */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">4. Test Execution Schedule</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-semibold">Test Design</p>
                    <p className="text-sm text-gray-600">2 days</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-semibold">Test Execution</p>
                    <p className="text-sm text-gray-600">3 days</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-semibold">Bug Fixing</p>
                    <p className="text-sm text-gray-600">2 days</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-semibold">Regression</p>
                    <p className="text-sm text-gray-600">1 day</p>
                  </div>
                </div>
              </div>

              {/* Test Resources */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">5. Test Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Hardware Requirements</h4>
                    <ul className="list-disc list-inside">
                      <li>Desktop/Laptop with modern browser</li>
                      <li>Different screen resolutions</li>
                      <li>Mobile devices for responsive testing</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Software Requirements</h4>
                    <ul className="list-disc list-inside">
                      <li>Chrome, Firefox, Safari browsers</li>
                      <li>Test management tools</li>
                      <li>Bug tracking system</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">6. Exit Criteria</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc list-inside space-y-2">
                    <li>All test cases executed</li>
                    <li>No critical or high-priority bugs pending</li>
                    <li>95% test coverage achieved</li>
                    <li>All requirements verified</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowTestPlan(false)}
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showTestStrategy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 text-center">
            <div className="inline-block w-full max-w-4xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-blue-800">Test Strategy Document</h2>
                <button 
                  onClick={() => setShowTestStrategy(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">1. Strategy Overview</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-4">This test strategy outlines the approach for testing the Age Category Estimator application, ensuring comprehensive coverage and quality assurance.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Project Details</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Project: Age Category Estimator</li>
                        <li>Version: 1.0</li>
                        <li>Platform: Web Application</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Testing Scope</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Functional Testing</li>
                        <li>UI/UX Testing</li>
                        <li>Error Handling</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">2. Testing Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-800">Testing Levels</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Unit Testing</li>
                      <li>Integration Testing</li>
                      <li>System Testing</li>
                      <li>User Acceptance Testing</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">Testing Types</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Functional Testing</li>
                      <li>Boundary Value Analysis</li>
                      <li>Error Guessing</li>
                      <li>Usability Testing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">3. Test Environment</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Browsers</h4>
                      <ul className="list-disc list-inside text-sm">
                        <li>Chrome</li>
                        <li>Firefox</li>
                        <li>Safari</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Devices</h4>
                      <ul className="list-disc list-inside text-sm">
                        <li>Desktop</li>
                        <li>Tablet</li>
                        <li>Mobile</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tools</h4>
                      <ul className="list-disc list-inside text-sm">
                        <li>Test Management</li>
                        <li>Bug Tracking</li>
                        <li>Automation Tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">4. Risk Analysis & Mitigation</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 border">Risk</th>
                        <th className="px-4 py-2 border">Impact</th>
                        <th className="px-4 py-2 border">Mitigation Strategy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border">Browser Compatibility</td>
                        <td className="px-4 py-2 border">High</td>
                        <td className="px-4 py-2 border">Cross-browser testing</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Performance Issues</td>
                        <td className="px-4 py-2 border">Medium</td>
                        <td className="px-4 py-2 border">Load and stress testing</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Data Validation</td>
                        <td className="px-4 py-2 border">High</td>
                        <td className="px-4 py-2 border">Comprehensive input testing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">5. Deliverables</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-800">Test Documents</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Test Plan</li>
                      <li>Test Cases</li>
                      <li>Test Scripts</li>
                      <li>Test Reports</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-yellow-800">Metrics</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Test Coverage</li>
                      <li>Defect Metrics</li>
                      <li>Test Progress</li>
                      <li>Quality Metrics</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowTestStrategy(false)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'testPlanning' && (
        <div className="container mx-auto p-4 font-serif">
          {/* Test Strategy Section */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-blue-800">Test Strategy</h2>
              <button
                onClick={() => setShowTestStrategy(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Full Strategy
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Testing Objectives</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Validate age input functionality</li>
                  <li>Verify age category classification</li>
                  <li>Test error handling</li>
                  <li>Ensure UI/UX requirements</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Testing Scope</h3>
                <div className="space-y-2">
                  <div>
                    <h4 className="text-green-700">In Scope:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Input validation</li>
                      <li>Age classification</li>
                      <li>Error handling</li>
                      <li>UI functionality</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-red-700">Out of Scope:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Performance testing</li>
                      <li>Security testing</li>
                      <li>Load testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Test Plan Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-purple-800">Test Plan</h2>
              <button
                onClick={() => setShowTestPlan(true)}
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
              >
                View Full Plan
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Test Environment</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Browsers: Chrome, Firefox, Safari</li>
                  <li>Devices: Desktop, Mobile</li>
                  <li>OS: Windows, MacOS</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Test Types</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Unit Testing</li>
                  <li>Integration Testing</li>
                  <li>UI Testing</li>
                  <li>Accessibility Testing</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Timeline</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Planning: 2 days</li>
                  <li>Execution: 3 days</li>
                  <li>Reporting: 1 day</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 p-4 rounded">
              <h3 className="font-semibold mb-2">Risk Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-red-700">Risks:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Browser compatibility issues</li>
                    <li>Accessibility compliance</li>
                    <li>Input validation edge cases</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-green-700">Mitigation:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Cross-browser testing</li>
                    <li>WCAG compliance checks</li>
                    <li>Comprehensive test cases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAutomationAnalysis && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 text-center">
            <div className="inline-block w-full max-w-4xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-yellow-800">Automation Feasibility Analysis</h2>
                <button 
                  onClick={() => setShowAutomationAnalysis(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">1. Executive Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">ROI Score</p>
                    <p className="text-lg font-bold text-blue-600">
                      {automationFeasibilityReport.summary.roiScore}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600">Estimated Coverage</p>
                    <p className="text-lg font-bold text-green-600">
                      {automationFeasibilityReport.summary.estimatedCoverage}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-600">Recommended Tools</p>
                    <p className="text-lg font-bold text-purple-600">
                      {automationFeasibilityReport.summary.recommendedTools.join(", ")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">2. Component Analysis</h3>
                <div className="grid gap-4">
                  {automationFeasibilityReport.analysis.map((component, index) => (
                    <div key={index} className="border-b pb-4">
                      <h4 className="font-semibold text-lg">{component.component}</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                        <div>
                          <p className="text-sm text-gray-600">Feasibility</p>
                          <p className="font-semibold">{component.feasibility}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Complexity</p>
                          <p className="font-semibold">{component.complexity}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Priority</p>
                          <p className="font-semibold">{component.priority}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Effort</p>
                          <p className="font-semibold">{component.estimatedEffort}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{component.rationale}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">3. Risks</h3>
                  <ul className="space-y-4">
                    {automationFeasibilityReport.risks.map((risk, index) => (
                      <li key={index} className="border-b pb-2">
                        <p className="font-semibold">{risk.risk}</p>
                        <p className="text-sm text-gray-600">Impact: {risk.impact}</p>
                        <p className="text-sm text-gray-600">Mitigation: {risk.mitigation}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">4. Recommendations</h3>
                  <ul className="list-disc pl-4 space-y-2">
                    {automationFeasibilityReport.recommendations.map((rec, index) => (
                      <li key={index} className="text-gray-700">{rec}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">5. Implementation Timeline</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-white rounded shadow">
                      <p className="font-semibold">Phase 1</p>
                      <p className="text-sm text-gray-600">Setup & Planning</p>
                      <p className="text-sm text-blue-600">Week 1-2</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded shadow">
                      <p className="font-semibold">Phase 2</p>
                      <p className="text-sm text-gray-600">Framework Development</p>
                      <p className="text-sm text-blue-600">Week 3-4</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded shadow">
                      <p className="font-semibold">Phase 3</p>
                      <p className="text-sm text-gray-600">Script Development</p>
                      <p className="text-sm text-blue-600">Week 5-8</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded shadow">
                      <p className="font-semibold">Phase 4</p>
                      <p className="text-sm text-gray-600">Integration & Testing</p>
                      <p className="text-sm text-blue-600">Week 9-10</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowAutomationAnalysis(false)}
                  className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showRTM && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 text-center">
            <div className="inline-block w-full max-w-4xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-green-800">Requirements Traceability Matrix</h2>
                <button 
                  onClick={() => setShowRTM(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">1. Matrix Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-600">Requirements</p>
                    <p className="text-lg font-bold text-blue-600">5</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-600">Test Cases</p>
                    <p className="text-lg font-bold text-green-600">14</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-600">Coverage</p>
                    <p className="text-lg font-bold text-purple-600">100%</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-600">Status</p>
                    <p className="text-lg font-bold text-yellow-600">Complete</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">2. Requirements Mapping</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 border">Requirement ID</th>
                        <th className="px-4 py-2 border">Requirement</th>
                        <th className="px-4 py-2 border">Test Cases</th>
                        <th className="px-4 py-2 border">Coverage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border">REQ-001</td>
                        <td className="px-4 py-2 border">Age Category Classification</td>
                        <td className="px-4 py-2 border">TC01, TC02, TC03, TC04, TC08, TC09, TC10, TC11, TC12, TC14</td>
                        <td className="px-4 py-2 border">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">Complete</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">REQ-002</td>
                        <td className="px-4 py-2 border">Input Validation</td>
                        <td className="px-4 py-2 border">TC05, TC06, TC07</td>
                        <td className="px-4 py-2 border">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">Complete</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">REQ-003</td>
                        <td className="px-4 py-2 border">Boundary Conditions</td>
                        <td className="px-4 py-2 border">TC08, TC09, TC10, TC14</td>
                        <td className="px-4 py-2 border">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">Complete</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">REQ-004</td>
                        <td className="px-4 py-2 border">Edge Cases</td>
                        <td className="px-4 py-2 border">TC11, TC12, TC13</td>
                        <td className="px-4 py-2 border">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">Complete</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">REQ-005</td>
                        <td className="px-4 py-2 border">Error Handling</td>
                        <td className="px-4 py-2 border">TC05, TC06, TC07, TC13</td>
                        <td className="px-4 py-2 border">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">Complete</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">3. Test Coverage Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Coverage by Category</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Core Functionality</span>
                        <span className="font-semibold">100%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Input Validation</span>
                        <span className="font-semibold">100%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Edge Cases</span>
                        <span className="font-semibold">100%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Error Tests</span>
                        <span className="font-semibold">100%</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Test Case Distribution</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Classification Tests</span>
                        <span className="font-semibold">10</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Validation Tests</span>
                        <span className="font-semibold">3</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Boundary Tests</span>
                        <span className="font-semibold">4</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Error Tests</span>
                        <span className="font-semibold">4</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowRTM(false)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'testDesign' && (
        <div className="container mx-auto p-4 font-serif">
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Test Design Phase</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Test Scenarios</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Age Input Validation</li>
                  <li>Age Category Classification</li>
                  <li>Error Message Display</li>
                  <li>UI/UX Functionality</li>
                  <li>Accessibility Features</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Test Techniques</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Boundary Value Analysis</li>
                  <li>Equivalence Partitioning</li>
                  <li>Error Guessing</li>
                  <li>Decision Table Testing</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded mb-6">
              <h3 className="font-semibold mb-2">Test Case Design Approach</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-green-700">Positive Testing</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Valid age inputs</li>
                    <li>Expected classifications</li>
                    <li>Normal user flows</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-red-700">Negative Testing</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Invalid inputs</li>
                    <li>Boundary conditions</li>
                    <li>Error scenarios</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-700">Non-functional Testing</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Usability</li>
                    <li>Accessibility</li>
                    <li>UI/UX</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'environment' && (
        <div className="container mx-auto p-4 font-serif">
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Test Environment Setup</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Hardware Requirements</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Desktop/Laptop computers</li>
                  <li>Mobile devices</li>
                  <li>Tablets</li>
                  <li>Different screen sizes</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Software Requirements</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Web Browsers (Chrome, Firefox, Safari)</li>
                  <li>Development Tools</li>
                  <li>Testing Tools</li>
                  <li>Screen Readers</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded mb-6">
              <h3 className="font-semibold mb-2">Test Data Setup</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Valid age ranges for each category</li>
                <li>Invalid input test data</li>
                <li>Boundary value test data</li>
                <li>Special character test data</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'closure' && (
        <div className="container mx-auto p-4 font-serif">
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Test Closure Phase</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Test Completion Criteria</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>All planned test cases executed</li>
                  <li>No critical bugs pending</li>
                  <li>All requirements covered</li>
                  <li>Acceptance criteria met</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Test Metrics</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Test case execution status</li>
                  <li>Defect density</li>
                  <li>Requirements coverage</li>
                  <li>Test execution time</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded mb-6">
              <h3 className="font-semibold mb-2">Deliverables</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-blue-700">Test Results</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Test execution reports</li>
                    <li>Defect reports</li>
                    <li>Coverage reports</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-green-700">Documentation</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Test summary report</li>
                    <li>Lessons learned</li>
                    <li>Best practices</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-purple-700">Sign-off</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Completion criteria met</li>
                    <li>Stakeholder approval</li>
                    <li>Release authorization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded mb-6">
              <h3 className="font-semibold mb-2">Test Execution Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-blue-700">Overall Results</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Total Test Cases: 30</li>
                    <li>Pass Rate: 90%</li>
                    <li>Fail Rate: 10%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-red-700">Defect Summary</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Critical Defects: 2</li>
                    <li>Major Defects: 1</li>
                    <li>Minor Defects: 0</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-purple-800 mb-3">Detailed Defect Analysis</h4>
                
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <h5 className="font-semibold text-red-600 mb-2">Critical Defects (2)</h5>
                  <div className="ml-4">
                    <p className="text-gray-700"><span className="font-medium">Test Cases:</span> TC13 & TC29</p>
                    <p className="text-gray-700"><span className="font-medium">Issue:</span> Age validation for unrealistic values above 120</p>
                    <p className="text-gray-700"><span className="font-medium">Impact:</span> System accepts unrealistic age values</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <h5 className="font-semibold text-orange-600 mb-2">Major Defects (1)</h5>
                  <div className="ml-4">
                    <p className="text-gray-700"><span className="font-medium">Test Case:</span> TC28</p>
                    <p className="text-gray-700"><span className="font-medium">Issue:</span> "Determine" button color contrast ratio (2.72:1) below WCAG standards (minimum 4.5:1)</p>
                    <p className="text-gray-700"><span className="font-medium">Current Colors:</span> Background: #3B82F6 (blue-500), Text: #FFFFFF</p>
                    <p className="text-gray-700"><span className="font-medium">Suggested Fix:</span> Change button background to darker blue:</p>
                    <ul className="list-disc list-inside ml-4 text-gray-700">
                      <li>Use bg-blue-700 (#1D4ED8) - Contrast ratio: 8.07:1 ✓</li>
                      <li>Or bg-blue-800 (#1E40AF) - Contrast ratio: 9.85:1 ✓</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Root Cause Analysis</h4>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-gray-800 mb-2">Input Validation Issue</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li><span className="font-medium">Source:</span> Lack of upper bound validation for age input</li>
                      <li><span className="font-medium">Affected Test Cases:</span> TC13 and TC29</li>
                      <li><span className="font-medium">Impact:</span> System accepts unrealistic age values</li>
                      <li><span className="font-medium">Recommended Fix:</span> Add upper limit validation (e.g., max 120 years)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-red-800 mb-4">Bug Report</h2>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Critical Bugs</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-red-700">Bug ID: CR-001</h4>
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">Critical</span>
                      </div>
                      <div className="space-y-2">
                        <p><span className="font-semibold">Title:</span> Age Validation Accepts Unrealistic Values</p>
                        <p><span className="font-semibold">Reporter:</span> QA Team Lead</p>
                        <p><span className="font-semibold">Submit Date:</span> 2024-02-25</p>
                        <p><span className="font-semibold">URL:</span> /ageestimator</p>
                        <p><span className="font-semibold">Environment:</span> Chrome 121.0.6167.160, Windows 11</p>
                        <p><span className="font-semibold">Description:</span> The age validation system accepts unrealistic values above 120 years, potentially compromising data integrity and user experience.</p>
                        <div className="ml-4">
                          <p className="font-semibold">Steps to Reproduce:</p>
                          <ol className="list-decimal list-inside">
                            <li>Navigate to Age Estimator page</li>
                            <li>Enter age value above 120 (e.g., 150)</li>
                            <li>Click "Determine" button</li>
                            <li>Observe system accepts invalid age</li>
                          </ol>
                        </div>
                        <p><span className="font-semibold">Expected:</span> System should reject ages above 120 with an appropriate error message</p>
                        <p><span className="font-semibold">Actual:</span> System accepts unrealistic age values without validation</p>
                        <p><span className="font-semibold">Priority:</span> High</p>
                        <p><span className="font-semibold">Severity:</span> Critical</p>
                        <p><span className="font-semibold">Assigned To:</span> Frontend Development Team</p>
                        <p><span className="font-semibold">Screenshots:</span> <a href="#" className="text-blue-600">View Screenshot</a></p>
                        <p><span className="font-semibold">Additional Notes:</span> This issue affects all age categories and could impact statistical analysis and reporting.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">Major Bugs</h3>
                  
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-orange-700">Bug ID: MJ-001</h4>
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Major</span>
                    </div>
                    <div className="space-y-2">
                      <p><span className="font-semibold">Title:</span> Button Color Contrast Ratio Below WCAG Standards</p>
                      <p><span className="font-semibold">Reporter:</span> Accessibility Specialist</p>
                      <p><span className="font-semibold">Submit Date:</span> 2024-02-25</p>
                      <p><span className="font-semibold">URL:</span> /ageestimator</p>
                      <p><span className="font-semibold">Environment:</span> All browsers and platforms</p>
                      <p><span className="font-semibold">Description:</span> The "Determine" button's color contrast ratio (2.72:1) fails to meet WCAG 2.1 AA standards, making it difficult for visually impaired users to read.</p>
                      <div className="ml-4">
                        <p className="font-semibold">Steps to Reproduce:</p>
                        <ol className="list-decimal list-inside">
                          <li>Navigate to Age Estimator page</li>
                          <li>Locate the "Determine" button</li>
                          <li>Check contrast ratio using WebAIM Contrast Checker</li>
                        </ol>
                      </div>
                      <p><span className="font-semibold">Expected:</span> Button should meet WCAG 2.1 AA standards (minimum 4.5:1 contrast ratio)</p>
                      <p><span className="font-semibold">Actual:</span> Current contrast ratio is 2.72:1</p>
                      <p><span className="font-semibold">Priority:</span> High</p>
                      <p><span className="font-semibold">Severity:</span> Major</p>
                      <p><span className="font-semibold">Assigned To:</span> UI/UX Team</p>
                      <p><span className="font-semibold">Screenshots:</span> <a href="#" className="text-blue-600">View Screenshot</a></p>
                      <p><span className="font-semibold">Additional Notes:</span> Suggested fixes:
                        <ul className="list-disc list-inside ml-4">
                          <li>Use bg-blue-700 (#1D4ED8) - Contrast ratio: 8.07:1</li>
                          <li>Or bg-blue-800 (#1E40AF) - Contrast ratio: 9.85:1</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => navigate('/bugreport')}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>Practice Bug Report Creation</span>
              <span>→</span>
            </button>

            <button
              onClick={() => navigate('/ageestimatorv')}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>Test Fixed Version</span>
              <span>✨</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgeCategoryEstimator;
