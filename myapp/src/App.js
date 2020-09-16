import React from 'react';
import './App.less';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Demo from './pages/Login'
// import NormalLoginForm from './pages/Login'

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Demo} />

      </Switch>
    </React.Fragment>

  </BrowserRouter>
);

export default App;