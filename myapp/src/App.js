import React from 'react';
import './App.less';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRouter'
import Dashboard from './pages/Dashboard'
import AdminPage from './pages/Admin/index'
import Option1 from './pages/Option1'
import Option2 from './pages/Option2'
import storeContext from './stores'
import { Provider } from 'mobx-react'
import { LoginStore } from './stores/login.store'
import Member from './pages/MemberPage'

const store = {
  LoginStore

}
// import NormalLoginForm from './pages/Login'

const App = () => (
  <Provider  {...store}>
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
          />
          <PrivateRoute
            exact
            layout={Dashboard}
            path="/admin/option1"
            component={Member}

          />
          <PrivateRoute
            exact
            layout={Dashboard}
            path="/admin/option2"
            component={Option2}

          />


        </Switch>
      </React.Fragment>

    </BrowserRouter>
  </Provider>
);

export default App;