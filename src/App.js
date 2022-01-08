import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SmallScreenButtons from './components/SmallScreenButtons';
function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' exact>
          <div className='container'>
            <Header />
            <MainContent />
            {/* <SmallScreenButtons /> */}
          </div>
          <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;

// hey
