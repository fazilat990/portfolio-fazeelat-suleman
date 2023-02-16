import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home'
import Work from './components/Work';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';

function App() {

  return (
    <div className='App'>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/"
              element={
                <Home skills="Frontend/Wordpress/Shopify Developer" />
              }>
          </Route>
          <Route exact path="/work"
              element={
                <Work />
              }>
          </Route>
          <Route exact path="/work"
              element={
                <Contact />
              }>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
