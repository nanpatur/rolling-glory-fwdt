import React from 'react';
import './App.css';
import { Router, Route } from 'react-router';
import { History, createBrowserHistory } from 'history';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

export const history: History = createBrowserHistory()

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/detail/:id' component={DetailPage} />
    </Router>
  );
}

export default App;
