import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import UserDetail from './components/detail/UserDetail';

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
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
