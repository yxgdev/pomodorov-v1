import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <div className='container'>
          <Header />
          <MainContent />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
