import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserDetail from './components/detail/UserDetail';
import SpotDetail from './components/spotDetail/SpotDetail';
import './index.css';
import Header from './components/header/Header';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/user/:userId" component={UserDetail} />

        <Route path="/spot/:spotId" component={SpotDetail} />

      </Switch>

    </BrowserRouter>

  );
}

export default App;
