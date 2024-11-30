import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="p-2 text-center mt-8 relative flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-2">Great Job!</h2>
      <p className="text-md text-left p-10 mt-1 w-full font-poppins mb-1">
          You have successfully covered the unit test for the age estimator! 🎉
          <br /><br />
          <strong>Unit Test</strong>: A unit test is a type of software test that focuses on verifying individual components or functions of an application. The goal is to ensure that each part of the software performs as expected, independently of the rest of the system. In this case, the unit test ensures that the age estimator calculates age correctly within the application.
          <br /><br />
          <strong>Test Scenario (TS)</strong>: A test scenario provides a high-level description of what needs to be tested, focusing on overall functionality and behavior. It is adaptable and used as a starting point for identifying specific test cases.
          <br /><br />
          <strong>Test Case (TC)</strong>: A test case is a detailed step-by-step process used to verify that specific features of the application work as expected. It includes inputs, actions, and the expected results for each test. In this case, you will need to write the bug report for TC013.
          <br /><br />
          📝 Now, you can write a bug report describing TC013.
        </p>

      <div className='flex lg:flex-row justify-center flex-col text-center gap-4 mt-6'>
      <button
              onClick={() => navigate('/ageestimator')}
              className="bg-violet-400 text-lime-200 p-2 rounded w-40  hover:bg-pink-400 transition-all duration-300"
            >
              Go Back
            </button>
      <button
            onClick={() => navigate('/bugreport')}
             className="bg-slate-600 text-lime-200 p-2 rounded w-40  hover:bg-lime-300 hover:text-slate-500 transition-all duration-300"
          >
             Next Task
          </button>
    </div>
    </div>
  );
};

export default Success;
