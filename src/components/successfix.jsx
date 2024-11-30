import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessFix = () => {
  const navigate = useNavigate();

  return (
    <div className="p-2 text-center mt-8 relative flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-2">Fantastic Work!</h2>
      <p className="text-md text-left p-10 mt-1 w-full font-poppins mb-1">
        You’ve successfully retested the Age Estimator! 🎉 Now, you're ready to implement a new feature based on the age calculation. Time to take it further and integrate it into exciting new features that depend on this data.
      </p>

      <div className='flex lg:flex-row justify-center flex-col text-center gap-4 mt-6'>
        <button
          onClick={() => navigate('/ageestimatorv')}
          className="bg-violet-400 text-lime-200 p-2 rounded w-40 hover:bg-pink-400 transition-all duration-300"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate('/creditrisk')}
          className="bg-slate-600 text-lime-200 p-2 rounded w-40 hover:bg-lime-300 hover:text-slate-500 transition-all duration-300"
        >
          Next Task
        </button>
      </div>
    </div>
  );
};

export default SuccessFix;
