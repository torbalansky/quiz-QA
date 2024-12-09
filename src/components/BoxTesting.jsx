import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BoxTesting = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Testing Approaches</h1>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
          <Link 
            to="/white-box-testing"
            className="relative w-full md:w-1/2 aspect-square rounded-2xl transition-all duration-300 group"
            onMouseEnter={() => setHoveredBox('white')}
            onMouseLeave={() => setHoveredBox(null)}
          >
            <div className="absolute inset-0 bg-white border-2 border-gray-200 rounded-2xl shadow-lg 
                          group-hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <h2 className="text-2xl font-bold mb-4">White Box Testing</h2>
                <p className={`text-gray-600 transition-opacity duration-300 
                            ${hoveredBox === 'white' ? 'opacity-100' : 'opacity-0'}`}>
                  Explore internal structures and improve code quality
                </p>
              </div>
            </div>
          </Link>

          <Link 
            to="/black-box-testing"
            className="relative w-full md:w-1/2 aspect-square rounded-2xl transition-all duration-300 group"
            onMouseEnter={() => setHoveredBox('black')}
            onMouseLeave={() => setHoveredBox(null)}
          >
            <div className="absolute inset-0 bg-gray-900 rounded-2xl shadow-lg 
                          group-hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Black Box Testing</h2>
                <p className={`text-gray-300 transition-opacity duration-300 
                            ${hoveredBox === 'black' ? 'opacity-100' : 'opacity-0'}`}>
                  Test functionality without knowing internal implementation
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoxTesting;