import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LayoutView from '../components/LayoutView';
// import LoginForm from '../components/login/LoginForm';
// import SignUpForm from '../components/signup/SignUpForm';
import { AwaitConfirmation } from '../components/AwaitConfirmation';
import SignUpValidation from '../components/signup/SignUpValidation';
import LoginValidation from '../components/login/LoginValidation';

export const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={LayoutView} />
        <Route exact={true} path="/login" component={LoginValidation} />
        <Route exact={true} path="/signup" component={SignUpValidation} />
        <Route exact={true} path="/await-confirmation" component={AwaitConfirmation} />
      </Switch>
    </BrowserRouter>
  );
  
  