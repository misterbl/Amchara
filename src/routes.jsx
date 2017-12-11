import React from 'react';
import { Route, Switch } from 'react-router';
import { Router } from 'react-router-dom'
import DashBoard from './components/DashBoard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import EditProfile from './components/EditProfile';
import CreateProfile from './components/CreateProfile';
import AddSpecialities from './components/AddSpecialities';
import Home from './components/Home';
import { history } from './store/configureStore';



export default ({ user }) => (
  <Router history={history}>
  <Switch>
      <Route path="/" exact component={Home} />
      <Route user={user} path="/login" exact component={Login} />
      <Route user={user} path="/register" exact component={SignUp} />
      <Route user={user} path="/create-profile" exact component={CreateProfile} />
      <Route user={user} path="/dashboard" exact component={DashBoard} />
      <Route user={user} path="/edit" exact component={EditProfile} />
      <Route user={user} path="/add-specialities" exact component={AddSpecialities} />
  </Switch>
  </Router>
);
