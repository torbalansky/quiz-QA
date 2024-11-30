import React, { useState } from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { NavbarData } from '../Data/Data';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
            {NavbarData.map((item) => (
              <li key={item.id}>
                <RouterLink
                  to={item.link === 'home' ? '/' : `/${item.link}`}
                  className="inline-block py-2 px-4 text-gray-700 lowercase text-[18px] hover:text-red-800 cursor-pointer"
                >
                  {item.title}
                </RouterLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          <IoMenuSharp className="text-3xl text-gray-700 cursor-pointer" />
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute right-4 top-16 rounded-md">
          <ul className="flex flex-col gap-2 px-4 py-2">
            {NavbarData.map((item) => (
              <li key={item.id}>
                <RouterLink
                  to={item.link === 'home' ? '/' : `/${item.link}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-3 text-gray-700 text-xl hover:text-blue-500 cursor-pointer"
                >
                  {item.title}
                </RouterLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
