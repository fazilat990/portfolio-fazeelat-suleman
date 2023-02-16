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
            <Link to="/" className="p-2 lg:px-4 md:mx-2 text-white rounded font-black hover:text-[var(--green)] transition-colors duration-300">Home</Link>
            <Link to="/work" className="p-2 lg:px-4 md:mx-2 text-white rounded font-black hover:text-[var(--green)] transition-colors duration-300">Work</Link>
            <Link to="/contact" className="p-2 lg:px-4 md:mx-2 text-[var(--text)] text-center border border-solid border-[var(--text)] rounded hover:bg-[var(--blue)] hover:border-[var(--blue)] hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1 font-black">Get In Touch</Link>
          </div>
        </div>
      </nav>

      {/* <div className="bg-indigo-100 py-6 md:py-12">
        <div className="container px-4 mx-auto">

          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-medium mb-2">Get the header you needed for your awesome website.</h1>
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6">Get Started</button>
            <div className="mt-4">
              <img src="//via.placeholder.com/1000x785/fff?text=iMac+Mockup" alt="mockup" className="d-block max-w-full rounded shadow-md" />
            </div>
          </div>

          <div className="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">

            <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
              <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
              <h5 className="text-xl font-medium uppercase mb-4">Fresh Design</h5>
              <p className="text-gray-600">FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable</p>
            </div>

            <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
              <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
              <h5 className="text-xl font-medium uppercase mb-4">Clean Code</h5>
              <p className="text-gray-600">FWR blocks are the cleanest pieces of HTML blocks, which are built with utmost care to quality and usability.</p>
            </div>

            <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
              <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
              <h5 className="text-xl font-medium uppercase mb-4">Perfect Tool</h5>
              <p className="text-gray-600">FWR blocks is a perfect tool for designers, developers and agencies looking to create stunning websites in no time.</p>
            </div>

          </div>

        </div>
      </div> */}

    </div>
  </div>
  );
};

export default Header;
