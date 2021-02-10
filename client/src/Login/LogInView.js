import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import VOTE from '../assets/vote.png';
import Copyright from '../Footer/copyright';
import Logo from '../assets/logo.jpg';
import TextField from '@material-ui/core/TextField';
import { 
  InputAdornment
 } from '@material-ui/core';
import {
    Typography,
    Box,
    Grid
} from '@material-ui/core';
import "../Styles/App.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: -70,
        overflow: 'hidden'
    },

    avatar: {
      textAlign: 'center',
      // width: '40px'
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },

    text: {
        margin: 15
    },

    Text: {
        margin: 70,
        textAlign: 'center',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            margin: 20
        }
    },

    icon: {
        paddingTop: 40
    },

    submit: {
      margin: theme.spacing(2, 0, 1),
      backgroundColor: 'green',
      color: 'white'
    },

    topcontainer: {
      padding: 50,
      [theme.breakpoints.down('sm')]: {
        padding: 0
      }
    },

    footer: {
      paddingBottom: 140,
      [theme.breakpoints.down('sm')]: {
        paddingBottom: 0,
        width: '80%',
        margin: 'auto'
      }
    }
}));

export default function FullWidthGrid({ onSubmit }) {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <div className={classes.paper}>
                {/* logo */}
                    <div className={classes.avatar}>
                    <img src={Logo} alt="Taibah" 
                      style={{
                        width: '50%',
                        marginTop: 30
                      }} />
                    </div>
                    <div className={classes.Text}>
                        <Typography variant="h4" style={{textShadow: '2px 2px black'}} className={classes.message}>
                            Digital Staff Attendance Register
                        </Typography>
                    </div>
                </div>
            </Grid>
            
            <Grid item xs={12} sm={6} style={{
                backgroundColor: 'white',
            }}>
              <div className={classes.paper}>
                <Typography component="h1" variant="h5" className={classes.topcontainer}></Typography>
                <form className={classes.form} onSubmit={onSubmit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth={true}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus={true}
                  />

                  <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={values.showPassword ? 'text' : 'password'}
                    id="outlined-adornment-password"
                    autoComplete="current-password"

                    InputProps={{
                      endAdornment: <InputAdornment position="end">
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      </InputAdornment>,
                    }}
                  />

                  <FormControlLabel
                    control={<Checkbox value="remember" />}
                    label="Remember me"
                  />
            
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    >
                    SIGN IN
                  </Button>
                </form>
              </div>

              <Box className={classes.footer}>
                  <Copyright />
              </Box>
            </Grid>
        </Grid>
    </div>
  );
}
