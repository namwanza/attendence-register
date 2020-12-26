import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';

import { createBrowserHistory as history} from 'history';

import Home from '../Home/Home';
import Login from '../Login';
import Dashboard from '../Dashboard/Dashboard';
import PrivateRoute from "../Routes/PrivateRoute";
import app from "../base";
// Material UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

const THEME = createMuiTheme({
  typography: {
    "fontFamily": "Raleway, sans-serif",
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    "fontStyle": 'normal'
  },

  MuiButtonBase: {
    disableRipple: true, 
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },

  container: {
    width: '100%',
    maxWidth: 500,
  },
}));


function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

// Let's declare all our routes that we are to use
const routes = [
  {
    path: '/',
    component: Home,
  }, 

  {
    path: '/login',
    component: Login,
  },

  // {
  //   path: './vote',
  //   component: Dashboard,
  // }
];

class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
  render () {
    const { authenticated } = this.state;
    const routeComponents = routes.map(({path, component}, key) => 
      <Route exact path={path} component={component} key={key}  />);
    return (
      <MuiThemeProvider theme={THEME}>
        <Router history={history}>
          <div>
            <Toolbar id="back-to-top-anchor" />
              <div className="page">
                <Switch>
                  {routeComponents}
                  <PrivateRoute
                    path="/vote"
                    component={Dashboard}
                    authenticated={authenticated}
                  /> 
                </Switch>
              </div> 
            </div>
          </Router>

        <ScrollTop {...this.props}>
          <Fab style={{
            backgroundColor: '#3067e2',
            color: 'white'
          }} 
            size="small" 
            title="scroll back to top"
            aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </MuiThemeProvider>
    );
  }
}

export default App;
