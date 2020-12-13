import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserDetail from './components/detail/UserDetail';
import SpotDetail from './components/spotDetail/SpotDetail';
import './index.css';
import Header from './components/header/Header';
import List from './components/list/List';
import MainPage from './components/home/MainPage';

import Form from './components/form/Form';

function App() {
  return (

    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/user/:userId" component={UserDetail} />

        <Route path="/spot/:spotId" component={SpotDetail} />
        <Route path="/spots/" component={List} />
        <Route path="/create" component={Form} />
        <Route path="/" component={MainPage} />

      </Switch>

    </BrowserRouter>

  );
}

export default App;
