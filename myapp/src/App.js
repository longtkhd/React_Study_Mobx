import React from 'react';
import './App.less';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRouter'
import Dashboard from './pages/Dashboard'
import AdminPage from './pages/Admin/index'
// import NormalLoginForm from './pages/Login'

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>

        <Route path="/login" exact component={Login} />
        <Route exact path="/" component={Home} />
        {/* <PrivateRoute path="/admin" exact component={Dashboard} /> */}
        <PrivateRoute
          exact
          layout={Dashboard}
          path="/admin"
          component={AdminPage}
        // title='AdminPage'
        />


      </Switch>
    </React.Fragment>

  </BrowserRouter>
);

export default App;