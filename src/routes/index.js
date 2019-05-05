import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LayoutView from '../components/LayoutView';
import LoginForm from '../components/login/LoginForm';
import SignUpForm from '../components/signup/SignUpForm';

export const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={LayoutView} />
        <Route exact={true} path="/login" component={LoginForm} />
        <Route exact={true} path="/signup" component={SignUpForm} />
      </Switch>
    </BrowserRouter>
  );
  
  