import React from 'react';
import './App.css';
import Navbar from './component/navbar/navbar';

import {BrowserRouter as Router , Route} from 'react-router-dom';

import ErrorBoundary from './component/error-bound/error-bound'

// Content
import Home from './template/home'
import Employee from './template/employee/list-employee'
import History from './template/history/list-history'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/employee">
          <ErrorBoundary>
            <Employee></Employee>
          </ErrorBoundary>
        </Route>

        <Route exact path="/history">
          <ErrorBoundary>
            <History></History>
          </ErrorBoundary>
        </Route>
      </div>
    </Router>
  );
}

export default App;
