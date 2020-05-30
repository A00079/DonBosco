import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from '../src/components/NavBar/NavBar.js';
import GettingStarted from '../src/components/GettingStarted/GettingStarted.js';
import AdminLogin from '../src/components/Admin/Adminlogin.js';
import Admin from '../src/components/Admin/Admin.js';
import Home from '../src/components/Home/Home.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={NavBar}></Route>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/' component={GettingStarted}></Route>
        <Route exact path='/AdminLogin' component={AdminLogin}></Route>
        <Route exact path='/Admin' component={Admin}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
