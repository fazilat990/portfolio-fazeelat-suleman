import React from 'react';
import logo from '../logo.svg';

function Header() {
  return (
    <div>
      <header className='fixed top-0 left-0 right-0 z-50'>
        <div className="container mx-auto px-4 py-6">
            <img src={logo} alt='Fazeelat Suleman' />
        </div>
      </header>
    </div>
  )
}

export default Header
