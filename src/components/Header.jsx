import React from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

const Header = () => {
  <header className="bg-gray-900 text-white py-3">
    <div className="container max-auto">
      <div className="flex justify-between items-center">
        <div className="logo">Logo</div>
        <div className="navigations">
          <ul className="navlist">
            <li>
              <Link to='about'>About</Link>
            </li>
            <li>
              <Link to='contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
};

export default Header;
