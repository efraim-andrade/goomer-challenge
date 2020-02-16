import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Details } from 'src/pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detalhes/:restaurantID" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}
