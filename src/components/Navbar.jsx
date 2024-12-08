import React, { useState } from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const QuizLinks = ({ setMenuOpen }) => {
  const quizLinks = [
    { title: "Software Test Life Cycle", link: "quizstlc" },
    { title: "Principles of Testing", link: "quizprinciples" },
    { title: "Test Age Estimator", link: "ageestimator" },
    { title: "Practice QA Metrics", link: "metrics" },
    { title: "ISTQB like Test", link: "morequiza" },
    { title: "Credit Risk Calculator", link: "creditrisk" },
    { title: "QA Bug Report", link: "bugreport" },
    { title: "Test Mood tracker App", link: "mood" },
    { title: "TDD Practice Arena", link: "jestintro" },
    { title: "AI in QA", link: "ai-qa" }
  ];

  return (
    <div className="absolute top-full right-0 md:left-[-120px] bg-white shadow-lg rounded-md min-w-[250px]">
      {quizLinks.map((quiz, index) => (
        <RouterLink
          key={index}
          to={`/${quiz.link}`}
          onClick={() => setMenuOpen(false)}
          className="block p-2 text-gray-700 text-base hover:bg-violet-50 hover:text-violet-700 transition-colors duration-200"
        >
          {quiz.title}
        </RouterLink>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToHome = () => {
    navigate('/');
    setMenuOpen(false);
  };

  return (
    <nav className="py-1 top-0 z-50 sticky bg-gradient-to-b from-slate-50 via-white to-blue-100 shadow-md">
      <div className="container flex justify-between items-center px-2">
        <div
          className="flex items-center w-16 cursor-pointer"
          onClick={goToHome}
        >
          <img src={logo} alt="Logo" />
        </div>

        <div className="hidden md:flex">
          <ul className="flex items-center gap-6">
            <li>
              <RouterLink
                to="/"
                className="inline-block py-2 px-4 text-gray-700 lowercase text-[18px] hover:text-purple-800 cursor-pointer"
              >
                Home
              </RouterLink>
            </li>
            <li className="relative" 
                onMouseEnter={() => setDropdownOpen(true)} 
                onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="inline-block py-2 px-4 text-gray-700 lowercase text-[18px] hover:text-purple-800 cursor-pointer">
                Quiz
              </button>
              {dropdownOpen && <QuizLinks setMenuOpen={setMenuOpen} />}
            </li>
          </ul>
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
          <IoMenuSharp className="text-3xl text-gray-700 cursor-pointer" />
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute right-0 top-full w-full border-t border-gray-100">
          <div className="max-h-[80vh] overflow-y-auto">
            <QuizLinks setMenuOpen={setMenuOpen} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;