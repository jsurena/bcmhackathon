import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './views/components/mainPage'
import HomePage from './views/components/homePage'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Route path='/widgets' component={MainPage}/>
      <Route path='/landing' component={HomePage}/>
    </Router> 
  );
}

export default App;