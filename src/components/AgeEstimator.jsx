import React, { useState } from "react";
import { testCases, documentationAgeCategory, helpModalDataB } from "../Data/Data";
import { useNavigate } from 'react-router-dom';
import { MdErrorOutline } from "react-icons/md";
import Modal from './Modal';

const AgeCategoryEstimator = () => {
  const [age, setAge] = useState("");
  const [category, setCategory] = useState(null);
  const [error, setError] = useState("");
  const [testResults, setTestResults] = useState(
    testCases.map((testCase) => ({ id: testCase.id, pass: null, validation: "" }))
  );

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

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
    navigate("/success");
  };

  const handleReset = () => {
    setTestResults(
      testCases.map((testCase) => ({ id: testCase.id, pass: null, validation: "" }))
    );
  };

  return (
    
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
          <button
            onClick={determineCategory}
            className="bg-blue-500 text-white p-3 rounded mt-2 mb-4 w-2/3  hover:bg-lime-300 hover:text-slate-500 transition-all duration-300"
          >
            Determine
          </button>
          {error && (
            <p className="text-red-200 m-4 flex flex-row">
              <MdErrorOutline className="w-10 h-10 mr-2 bg-red-600 rounded"/><strong>Error:</strong> {error}
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
        <h2 className="text-lg font-bold mb-2">Test Cases Age Category Estimator</h2>
        <div className="text-gray-600 mb-4">
          To test the Age Category Estimator, please follow these steps:
          <ul>
            <li>→ Read the documentation to understand the expected functionality.</li>
            <li>→ Review the test cases provided to see the expected behavior.</li>
            <li>→ Run the app and verify if the actual results match the expected ones for each test case.</li>
            <li>→ Mark the test result as "Pass" or "Fail" based on your observations.</li>
          </ul>
          Your goal is to ensure that the app behaves correctly according to the functional requirements.
          <button
              onClick={openModal}
              className="bg-blue-500 text-slate-100 py-1 px-2 m-2 rounded-md hover:bg-blue-700 transition-all duration-300"
            >
              Want to know more?
            </button>
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
  );
};

export default AgeCategoryEstimator;
