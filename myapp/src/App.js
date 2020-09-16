import React from 'react';
import './App.less';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRouter'
// import NormalLoginForm from './pages/Login'

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>

        <Route path="/login" exact component={Login} />
        <PrivateRoute exact path="/" component={Home} />

      </Switch>
    </React.Fragment>

  </BrowserRouter>
);

export default App;