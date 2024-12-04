import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessR = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-50 py-12 px-4 font-poppins">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Fantastic Work!
          </h2>
          <p className="mt-4 text-lg text-violet-600 font-medium">
            You've successfully tested the Credit Risk Calculator!
          </p>
        </div>

        <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl border border-violet-100 mb-8">
          <p className="text-gray-700 leading-relaxed">
            Your integration tests ensured that the individual components—form inputs, calculation logic, and error messages—work together seamlessly. 
            You also verified that the reset button not only clears the form but interacts with other components, ensuring that all fields and messages are properly reset.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button
            onClick={() => navigate('/creditrisk')}
            className="px-6 py-3 text-lg font-medium rounded-lg bg-violet-500 text-white hover:bg-violet-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate('/metrics')}
            className="px-6 py-3 text-lg font-medium rounded-lg bg-purple-500 text-white hover:bg-purple-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Next Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessR;
