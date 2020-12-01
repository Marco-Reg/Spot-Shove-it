import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import UserDetail from './components/detail/UserDetail';
import SpotDetail from './components/spotDetail/SpotDetail';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#252525',
    },

  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <Switch>
          <Route path="/user/:userId" component={UserDetail} />

          <Route path="/spot/:spotId" component={SpotDetail} />

        </Switch>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
