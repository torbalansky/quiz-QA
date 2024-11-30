import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessR= () => {
  const navigate = useNavigate();

  return (
    <div className="p-2 text-center mt-8 relative flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-2">Fantastic Work!</h2>
      <p className="text-md text-left p-10 mt-1 w-2/3 font-poppins mb-1">
        You’ve successfully tested the Credit Risk Calculator! 🎉 
        Your integration tests ensured that the individual components—form inputs, calculation logic, and error messages—work together seamlessly. 
        You also verified that the reset button not only clears the form but interacts with other components, ensuring that all fields and messages are properly reset.
        <br /><br />
    
       {/* <strong>Functional vs Non-Functional Testing:</strong>
        <br /><br />
        <strong>Functional Testing</strong> ensures the software works according to the specified requirements. You tested how the application 
        handles user inputs, calculates credit risk, assigns age categories, and displays errors for invalid data. These tests simulate typical 
        user interactions and validate the expected behavior of each function.
        <br /><br />
        <strong>Non-Functional Testing</strong> focuses on areas such as performance, usability, security, and compatibility. Although you 
        haven’t directly addressed these aspects, verifying that the Credit Risk Calculator handles multiple users and large inputs efficiently 
        could be an important next step.*/}
      </p>

      <div className="flex lg:flex-row justify-center flex-col text-center gap-4 mt-6">
        <button
          onClick={() => navigate('/creditrisk')}
          className="bg-violet-400 text-lime-200 p-2 rounded w-40 hover:bg-pink-400 transition-all duration-300"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate('/metrics')}
          className="bg-slate-600 text-lime-200 p-2 rounded w-40 hover:bg-lime-300 hover:text-slate-500 transition-all duration-300"
        >
          Next Task
        </button>
      </div>
    </div>
  );
};

export default SuccessR;
