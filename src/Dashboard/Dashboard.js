import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Dashboard.css';
import SignOut from './menu';
import CandidateList from './candidates';
import Copyright from '../Footer/copyright';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{
          backgroundColor: 'green',
          position: 'fixed'
      }}>
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Taibah E-Voting System
            </Typography>
            <SignOut />
        </Toolbar>
      </AppBar>

      {/* Candidate List */}
      <CandidateList />

       {/* copyright */}
        <Box mt={5}>
          <Copyright />
        </Box>
    </div>
  );
}
