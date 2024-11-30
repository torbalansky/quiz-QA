import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCalculator, FaClipboardList, FaQuestionCircle, FaBullseye, FaBug, FaGithub, FaLinkedin, FaGlobe, FaCreditCard } from 'react-icons/fa';
import logo from '../assets/img/logo.png';
import emailjs from '@emailjs/browser';
import { GiCycle } from "react-icons/gi";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { IoConstructSharp } from "react-icons/io5";

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
    <section className="flex flex-col h-min-screen">
      <div className="relative flex h-screen">

      <div className="sm:w-1/3 w-full bg-gradient-to-b from-blue-50 via-white to-gray-100 p-8 grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-4 hd-sm">
      <Link to="/quizstlc" className="bg-white p-6 rounded-lg shadow-lg h-40 hover:bg-lime-200 text-center flex flex-col items-center">
          <GiCycle className="text-2xl text-blue-600 mb-4" />
          <h3 className="text-xs font-semibold text-gray-800">Software Test Life Cycle</h3>
        </Link>
        
        <Link to="/quizprinciples" className="bg-white p-6 rounded-lg shadow-lg h-40 hover:bg-lime-200 text-center flex flex-col items-center">
          <FaBullseye className="text-2xl text-blue-600 mb-4" />
          <h3 className="text-xs font-semibold text-gray-800 mb-4">Principles of Testing</h3>
        </Link>

        <Link to="/ageestimator" className="bg-white p-6 rounded-lg shadow-lg h-40 hover:bg-lime-200 text-center flex flex-col items-center">
          <FaCalculator className="text-2xl text-blue-600 mb-4" />
          <h3 className="text-xs font-semibold text-gray-800">Test Age Estimator</h3>
        </Link>

        <Link to="/metrics" className="bg-white p-6 rounded-lg shadow-lg h-40 hover:bg-lime-200 text-center flex flex-col items-center">
          <FaClipboardList className="text-2xl text-blue-600 mb-4" />
          <h3 className="text-xs font-semibold text-gray-800">Practice QA Metrics</h3>
        </Link>

        <Link to="/morequiza" className="bg-white p-6 rounded-lg shadow-lg h-40 hover:bg-lime-200 text-center flex flex-col items-center">
          <FaQuestionCircle className="text-2xl text-blue-600 mb-4" />
          <h3 className="text-xs font-semibold text-gray-800">ISTQB like Test</h3>
        </Link>

        <Link to="/creditrisk" className="bg-white p-6 rounded-lg shadow-lg h-40 hover:bg-lime-200 text-center flex flex-col items-center">
          <FaCreditCard className="text-2xl text-blue-600 mb-4" />
          <h3 className="text-xs font-semibold text-gray-800">Credit Risk Calculator</h3>
        </Link>

        <Link to="/bugreport" className="bg-white p-6 rounded-lg shadow-lg h-40 hover:bg-lime-200 text-center flex flex-col items-center">
          <FaBug className="text-2xl text-blue-600 mb-4" />
          <h3 className="text-xs font-semibold text-gray-800">QA Bug Report</h3>
        </Link>
        <Link to="/mood" className="bg-white p-6 rounded-lg shadow-lg h-40 hover:bg-lime-200 text-center flex flex-col items-center">
          <BsFillEmojiSunglassesFill className="text-2xl text-blue-600 mb-4" />
          <h3 className="text-xs font-semibold text-gray-800">Test Mood tracker App</h3>
        </Link>
        <Link to="/" className="bg-white p-6 rounded-lg shadow-lg h-40 hover:bg-lime-200 text-center flex flex-col items-center">
          <IoConstructSharp className="text-2xl text-blue-600 mb-4" />
          <h3 className="text-xs font-semibold text-gray-800">TTD App (Coming soon)</h3>
        </Link>
      </div>

      <div className="sm:w-2/3 w-full bg-gradient-to-b from-blue-50 via-white to-gray-100  p-4 flex flex-col justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full text-center">
          <img src={logo} alt="QuizA Logo" className='w-32 mx-auto mb-6' />
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to QuizA</h1>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to the QA Basics Quiz! Whether you're starting your journey in Quality Assurance or refreshing your knowledge, this quiz offers fun and engaging challenges to test your understanding of core QA concepts. Ready to dive in and sharpen your skills? Let's see how well you know the fundamentals of software quality assurance!
          </p>
          <Link
            to="/quizstlc"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition-all"
          >
            Start the Quiz
          </Link>
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
              <strong>Disclaimer:</strong> I created this app as a personal project to practice React and QA concepts. I believe in learning by doing, rather than just reading. Many QA courses focus heavily on theory, which is valuable, but I find that combining theory with hands-on practice is key to truly understanding the material. If you encounter any bugs or issues, feel free to reach out via email, and I’ll work on fixing them. Suggestions are also welcome! 
              <br />
              You can drop me a message using the form on the right, and I’ll get back to you as soon as possible.
              <br /><br />
              N.B. For the best experience, it is recommended to use the app on a device with a larger screen, as it may not be fully optimized for mobile phones and tablets.
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
