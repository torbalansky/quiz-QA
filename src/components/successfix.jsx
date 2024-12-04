import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessFix = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-50 py-12 px-4 font-poppins">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-violet-600">
            Fantastic Work!
          </h2>
        </div>

        <div className="bg-violet-50 rounded-xl p-8 mb-8 border border-violet-100">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            You've successfully retested the Age Estimator! Now, you're ready to implement 
            new features based on the age calculation. Time to take it further and integrate 
            it into exciting new features that depend on this data.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate('/ageestimatorv')}
            className="px-6 py-3 text-lg font-medium rounded-lg bg-violet-500 text-white hover:bg-violet-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate('/creditrisk')}
            className="px-6 py-3 text-lg font-medium rounded-lg bg-purple-500 text-white hover:bg-purple-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Next Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessFix;
