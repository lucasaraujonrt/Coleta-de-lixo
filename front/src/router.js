import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Provider from './pages/Provider'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Provider} />
      </Switch>
    </BrowserRouter>
  )
}