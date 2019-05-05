import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LayoutView from '../components/LayoutView';
import LoginForm from '../components/login/LoginForm';

export const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={LayoutView} />
        <Route exact={true} path="/login" component={LoginForm} />
      </Switch>
    </BrowserRouter>
  );
  
  