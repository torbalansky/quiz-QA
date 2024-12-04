import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-50 py-12 px-4 font-poppins">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Great Job!
          </h2>
          <p className="mt-4 text-lg text-violet-600 font-medium">
            You have successfully covered the unit test for the age estimator!
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl border border-violet-100">
            <h3 className="text-xl font-bold text-violet-800 mb-3">
              Unit Test
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A unit test is a type of software test that focuses on verifying individual components or functions of an application. The goal is to ensure that each part of the software performs as expected, independently of the rest of the system. In this case, the unit test ensures that the age estimator calculates age correctly within the application.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
            <h3 className="text-xl font-bold text-purple-800 mb-3">
              Test Scenario (TS)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A test scenario provides a high-level description of what needs to be tested, focusing on overall functionality and behavior. It is adaptable and used as a starting point for identifying specific test cases.
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-violet-50 p-6 rounded-xl border border-indigo-100">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">
              Test Case (TC)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A test case is a detailed step-by-step process used to verify that specific features of the application work as expected. It includes inputs, actions, and the expected results for each test. In this case, you will need to write the bug report for TC013.
            </p>
          </div>

          <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl border border-violet-100">
            <p className="text-xl font-bold text-violet-800">
              Now, you can write a bug report describing TC013.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button
            onClick={() => navigate('/ageestimator')}
            className="px-6 py-3 text-lg font-medium rounded-lg bg-violet-500 text-white hover:bg-violet-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate('/bugreport')}
            className="px-6 py-3 text-lg font-medium rounded-lg bg-purple-500 text-white hover:bg-purple-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Next Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
