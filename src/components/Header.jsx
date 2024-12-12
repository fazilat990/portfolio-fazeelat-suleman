import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function Header() {
  return (
    <div className='header-wrap relative z-10'>
      <div className="header-2">

        <nav className="py-2 md:py-4">
          <div className="container md:flex md:items-center">

            <div className="flex justify-between items-center">
              <Link to="/" className="font-bold text-xl text-indigo-600">
                <img src={logo} alt='Logo' width='200' />
              </Link>
              <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
              <Link to="/about" className="p-2 lg:px-4 md:mx-2 text-white rounded font-black hover:text-[var(--green)] transition-colors duration-300">About</Link>
              <Link to="/skills" className="p-2 lg:px-4 md:mx-2 text-white rounded font-black hover:text-[var(--green)] transition-colors duration-300">Skills</Link>
              <Link to="/work" className="p-2 lg:px-4 md:mx-2 text-white rounded font-black hover:text-[var(--green)] transition-colors duration-300">Work</Link>
              <Link to="/contact" className="p-2 lg:px-4 md:mx-2 text-[var(--text)] text-center border border-solid border-[var(--text)] rounded hover:bg-[var(--blue)] hover:border-[var(--blue)] hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1 font-black">Get In Touch</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
