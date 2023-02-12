import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import React from 'react';

function App() {
  const bgDarkThemeColor= '#232323';

  return (
    <div className={`App bg-[${bgDarkThemeColor}]`}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
