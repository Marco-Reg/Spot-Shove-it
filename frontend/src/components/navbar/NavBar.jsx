/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {

  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  Container, Typography,
} from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch, Route, Link,
} from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

function App({ user }) {
  const classes = useStyles();
  return (

    <Router>
      <div style={{ display: 'flex' }}>
        <Drawer
          style={{ width: '220px', color: 'grey' }}
          variant="persistent"
          anchor="left"
          open
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link to={`/user/${user._id}`} className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Switch>
          <Route exact path="/">
            <Container>
              <Typography variant="h3" gutterBottom>
                Home
              </Typography>
              <Typography variant="body1" gutterBottom />
            </Container>
          </Route>

          <Route exact path="/user/:userId">
            <Container>
              <Typography variant="h3" gutterBottom>
                Profile
              </Typography>
              <Typography variant="body1" gutterBottom />
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}
function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
  };
}

export default connect(mapStateToProps)(App);
