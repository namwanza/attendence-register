import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VOTE from '../assets/vote.png';
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
        marginTop: -70
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

    icon: {
        paddingTop: 40
    },

    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: 'green',
      color: 'white'
    },
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
                <img src={VOTE} alt=""  style={{
                    width: '80%', 
                }} />
            </div>
            </Grid>
            <Grid item xs={12} sm={6} style={{
                backgroundColor: 'white',
                padding: 50,
                // borderLeft: '1px solid black'
            }}>
              <div className={classes.paper}>
                {/* logo */}
                <div className={classes.avatar}>
                  <img src={Logo} alt="Taibah" />
                </div>

                <Typography component="h1" variant="h5" style={{margin: 20}}></Typography>
                <form className={classes.form} onSubmit={onSubmit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
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
                    Sign In
                  </Button>
                </form>
              </div>

              <Box mt={2}>
                  <Copyright />
              </Box>
            </Grid>
        </Grid>
    </div>
  );
}
