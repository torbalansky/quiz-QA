import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
    <div>
      <h2 className='text-center text-2xl font-bold mt-16 mb-6' data-aos='zoom-in'>Get in Touch</h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-2" data-aos="zoom-in-left">
        <div className="flex flex-col max-w-md w-full text-center md:text-left">
          <div className='mb-4 mt-4 font-mono'>
            <p className="text-xl mb-2"><strong>Email:</strong> digilabsrs@gmail.com</p>
            <p className="text-xl mb-2"><strong>Phone:</strong> +359 894 061 189</p>
            <p className="text-xl mb-2"><strong>Address:</strong> Sofia, Bulgaria</p>
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
              className="w-full p-3 border bg-slate-400 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E-mail"
              required
              className="w-full p-3 border bg-slate-400 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full p-3 border bg-slate-400 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
  );
};

export default Contact;
