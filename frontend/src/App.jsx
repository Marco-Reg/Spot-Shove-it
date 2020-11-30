import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserDetail from './components/detail/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user/:userId" component={UserDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
