import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCalculator, FaClipboardList, FaQuestionCircle, FaBullseye, FaBug, FaGithub, FaLinkedin, FaGlobe, FaCreditCard } from 'react-icons/fa';
import logo from '../assets/img/logo.png';
import emailjs from '@emailjs/browser';
import { GiCycle } from "react-icons/gi";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { IoConstructSharp } from "react-icons/io5";
import { SiSelenium } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { TbBrowserCheck } from "react-icons/tb";
import { SiCucumber } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { AiOutlineCodeSandbox } from "react-icons/ai";

const Home = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      setLoading(false);
      return;
    } else if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    setError('');

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Paco',
          from_email: form.email,
          to_email: 'torbalansky@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Something went wrong. Please, try again.');
        }
      );
  };

  return (
    <section className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4 sm:p-8">
          <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-3xl mx-auto">
            <div className="relative mb-8">
              <img 
                src={logo} 
                alt="QuizA Logo" 
                className='w-32 sm:w-40 mx-auto transform hover:scale-105 transition-transform duration-300' 
              />
              <div className="absolute inset-0 bg-blue-500 filter blur-3xl opacity-5 -z-10"></div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Welcome to <span className="text-blue-600">QuizA</span>
            </h1>

            <div className="space-y-6 mb-8">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Embark on a comprehensive QA learning journey! QuizA offers:
              </p>
              
              <ul className="text-gray-600 space-y-3 text-left max-w-xl mx-auto">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Interactive quizzes covering ISTQB fundamentals
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Practical tools for real-world testing scenarios
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Modern testing approaches including AI and TDD
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Progress tracking and performance metrics
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/quizstlc"
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Start Learning
              </Link>
              <Link
                to="/ai-qa"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                Explore AI in QA
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-4 sm:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <Link to="/quizstlc" className="bg-white p-6 rounded-lg shadow-lg hover:bg-lime-200 text-center flex flex-col items-center justify-center aspect-square">
              <GiCycle className="text-2xl text-blue-600 mb-4" />
              <h3 className="text-xs font-semibold text-gray-800">Software Test Life Cycle</h3>
            </Link>
            
            <Link to="/quizprinciples" className="bg-white p-6 rounded-lg shadow-lg hover:bg-lime-200 text-center flex flex-col items-center justify-center aspect-square">
              <FaBullseye className="text-2xl text-blue-600 mb-4" />
              <h3 className="text-xs font-semibold text-gray-800">Principles of Testing</h3>
            </Link>

            <Link to="/metrics" className="bg-white p-6 rounded-lg shadow-lg hover:bg-lime-200 text-center flex flex-col items-center justify-center aspect-square">
              <FaClipboardList className="text-2xl text-blue-600 mb-4" />
              <h3 className="text-xs font-semibold text-gray-800">Practice QA Metrics</h3>
            </Link>

            <Link to="/morequiza" className="bg-white p-6 rounded-lg shadow-lg hover:bg-lime-200 text-center flex flex-col items-center justify-center aspect-square">
              <FaQuestionCircle className="text-2xl text-blue-600 mb-4" />
              <h3 className="text-xs font-semibold text-gray-800">ISTQB like Test</h3>
            </Link>

            <Link to="/bugreport" className="bg-white p-6 rounded-lg shadow-lg hover:bg-lime-200 text-center flex flex-col items-center justify-center aspect-square">
              <FaBug className="text-2xl text-blue-600 mb-4" />
              <h3 className="text-xs font-semibold text-gray-800">QA Bug Report</h3>
            </Link>

            <Link to="/mood" className="bg-white p-6 rounded-lg shadow-lg hover:bg-lime-200 text-center flex flex-col items-center justify-center aspect-square">
              <BsFillEmojiSunglassesFill className="text-2xl text-blue-600 mb-4" />
              <h3 className="text-xs font-semibold text-gray-800">Mood tracker App</h3>
            </Link>

            <Link to="/creditrisk" className="bg-white p-6 rounded-lg shadow-lg hover:bg-lime-200 text-center flex flex-col items-center justify-center aspect-square">
              <FaCalculator className="text-2xl text-blue-600 mb-4" />
              <h3 className="text-xs font-semibold text-gray-800">Credit Risk Calculator</h3>
            </Link>

            <Link to="/jestintro" className="bg-white p-6 rounded-lg shadow-lg hover:bg-lime-200 text-center flex flex-col items-center justify-center aspect-square">
              <IoConstructSharp className="text-2xl text-blue-600 mb-4" />
              <h3 className="text-xs font-semibold text-gray-800">TDD with Jest</h3>
            </Link>

            <Link to="/ai-qa" className="bg-white p-6 rounded-lg shadow-lg hover:bg-lime-200 text-center flex flex-col items-center justify-center aspect-square">
              <svg className="text-2xl text-blue-600 mb-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xs font-semibold text-gray-800">AI in Quality Assurance</h3>
            </Link>

            <Link to="/box-testing" className="bg-white p-6 rounded-lg shadow-lg hover:bg-lime-200 text-center flex flex-col items-center justify-center aspect-square">
            <AiOutlineCodeSandbox className="text-2xl text-blue-600 mb-4" />
              <h3 className="text-xs font-semibold text-gray-800">B/W box testing</h3>
            </Link>

            <div className="bg-white p-6 rounded-lg shadow-lg cursor-not-allowed opacity-75 text-center flex flex-col items-center hd-sm group relative">
              <SiSelenium className="text-blue-600 mb-4 text-2xl" />
              <h3 className="text-xs font-semibold text-gray-800">Selenium Testing</h3>
              <span className="absolute inset-0 flex items-center justify-center bg-black/75 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Coming Soon
              </span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg cursor-not-allowed opacity-75 text-center flex flex-col items-center hd-sm group relative">
              <SiPostman className="text-blue-600 mb-4 text-2xl" />
              <h3 className="text-xs font-semibold text-gray-800">API Testing</h3>
              <span className="absolute inset-0 flex items-center justify-center bg-black/75 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Coming Soon
              </span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg cursor-not-allowed opacity-75 text-center flex flex-col items-center hd-sm group relative">
              <TbBrowserCheck className="text-blue-600 mb-4 text-2xl" />
              <h3 className="text-xs font-semibold text-gray-800">Cross Browser Testing</h3>
              <span className="absolute inset-0 flex items-center justify-center bg-black/75 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Coming Soon
              </span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg cursor-not-allowed opacity-75 text-center flex flex-col items-center hd-sm group relative">
              <SiCucumber className="text-blue-600 mb-4 text-2xl" />
              <h3 className="text-xs font-semibold text-gray-800">BDD with Cucumber</h3>
              <span className="absolute inset-0 flex items-center justify-center bg-black/75 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Coming Soon
              </span>
            </div>


            <div className="bg-white p-6 rounded-lg shadow-lg cursor-not-allowed opacity-75 text-center flex flex-col items-center hd-sm group relative">
              <SiCypress className="text-blue-600 mb-4 text-2xl" />
              <h3 className="text-xs font-semibold text-gray-800">E2E with Cypress</h3>
              <span className="absolute inset-0 flex items-center justify-center bg-black/75 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Coming Soon
            </span>
          </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border p-4 text-center font-poppins bg-gradient-to-b from-slate-50 via-white to-blue-100 shadow-md">
      <h2 className='text-center text-2xl font-bold font-bruno mt-2 mb-6'>Get in Touch</h2>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-around">
          <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-2">
            <div className="flex flex-col max-w-md w-full text-center md:text-left">
              <div className='mb-4 mt-4 font-mono'>
                <p className="text-md mb-0 text-center"><strong>Email:</strong> digilabsrs@gmail.com</p>
                <div className="flex justify-center gap-6 mt-4">
                  <a href="https://github.com/torbalansky" target="_blank" rel="noopener noreferrer" className="text-2xl text-indigo-600 hover:text-lime-500">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/srstathis/" target="_blank" rel="noopener noreferrer" className="text-2xl text-indigo-600 hover:text-lime-500">
                    <FaLinkedin />
                  </a>
                  <a href="https://portfoliopaco.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-2xl text-indigo-600 hover:text-lime-500">
                    <FaGlobe />
                  </a>
                </div>
                <p className="text-xs text-left mt-10 text-slate-600">
                  <strong>Disclaimer:</strong> This is a training application designed to help practice both QA concepts and React development. While I strive for accuracy, the app itself might contain bugs or imperfections - which actually makes it a perfect real-world testing ground! I encourage you to approach everything with a critical eye, as that's what great QA is all about.
                  <br /><br />
                  The content is meant for educational purposes and should be used alongside other learning resources. If you spot any issues or have suggestions for improvement, please reach out via the contact form - finding and reporting bugs is excellent QA practice!
                  <br /><br />
                  N.B. For optimal experience, please use a desktop or laptop computer, as the application is not fully optimized for mobile devices.
                </p>
              </div>
            </div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-4 shadow-md w-full max-w-md border">
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full p-3 border bg-slate-200 text-slate-600 placeholder-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="E-mail"
                  required
                  className="w-full p-3 border bg-slate-200 text-slate-600 placeholder-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  className="w-full p-3 border bg-slate-200 text-slate-600 placeholder-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="4"
                />
                {error && <p className="text-red-500 font-mono">{error}</p>}
              <button
                type="submit"
                className="w-full py-2 font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:200%_100%] bg-left hover:bg-right hover:from-green-400 hover:to-blue-500 transition-all duration-500 ease-out"
                >
                {loading ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
           </div>
          </div>
        </div>
    </section>
  );
};

export default Home;
