import React from 'react';
import './App.less';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRouter'
import Dashboard from './pages/Dashboard'
import AdminPage from './pages/Admin/index'
import Option2 from './pages/Option2'
import { Provider } from 'mobx-react'
import LoginStore from './stores/login.store'
import MemberStore from './stores/memberStore'
import setCommonStore from './stores/setCommon'
import Member from './pages/MemberPage'

const store = {
  LoginStore,
  MemberStore,
  setCommonStore

}

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
            component={Member}
          />
          <PrivateRoute
            exact
            layout={Dashboard}
            path="/admin/member"
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