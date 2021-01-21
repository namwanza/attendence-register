import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import VOTE from '../assets/logo.jpg';
import Copyright from '../Footer/copyright';
import axios from 'axios';
import { Button } from 'reactstrap';

import {
    Typography,
    Box,
    Grid,
    ButtonGroup,
} from '@material-ui/core';
import "../Styles/App.css";

const useStyles = (theme) => ({
    root: {
        marginTop: -70,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
    },

    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    
    buttonsuccessIn: {
        backgroundColor: green[500],
        color: 'white',
        padding: theme.spacing(2),
        '&:hover': {
            backgroundColor: green[700],
        },
    },

    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    text: {
        margin: 60,
        textAlign: 'center',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            margin: 20
        }
    },

    apply: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10px',
        }
    },

    footer: {
        // padding:  20,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },

    footerMob: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },

    grid: {
        marginTop: '7%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '20%'
        }   
    },
});

class CircularIntegration extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    state = {
        clockIn: false,
        clockOut: false,
        successIn: false,
        successOut: false,
    }
    
    handleClockIn = () => {
        if (!this.state.clockIn) {
            this.setState({
                successIn: false,
                clockIn: true
            });

            this.myRef.current = window.setTimeout( async () => {
                const { clockIn } = this.state;
                await axios.post('/api/mac', {
                    clockIn, 
                })

                .then(response => { 
                    console.log(response.data.doc)
                })
                .catch(error => {
                    console.log(error.response)
                });

                this.setState({
                    successIn: true,
                    clockIn: false
                });
            }, 2000);
        }
    };

    handleClockOut = () => {
        if (!this.state.clockOut) {
            this.setState({
                successOut: false,
                clockOut: true,
            });

            this.myRef.current = window.setTimeout(() => {
                this.setState({
                    successOut: true,
                    clockOut: false
                });
            }, 2000);
        }
    };

    componentWillMount(){
        return () => {
          clearTimeout( this.myRef.current);
        };
    };
    
    render () {
        const { classes } = this.props;
    
        const buttonClassname = clsx({
            [classes.buttonsuccessIn]: this.state.successIn,
        });

        const buttonClassnameTwo = clsx({
            [classes.buttonsuccessIn]: this.state.successOut,
        });
    
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} style={{ backgroundColor: 'white', paddingTop: 50}}>
                        <div className={classes.paper}>
                            <img src={VOTE} alt=""  style={{
                                width: '50%'
                            }} />
                        </div>

                        <div className={classes.text}>
                            <Typography variant="h2" style={{textShadow: '2px 2px black'}} className={classes.message}>
                                Digital Staff Attendance Register
                            </Typography>
                        </div>

                        <Box mt={10} className={classes.footer}>
                            <Copyright />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} className={classes.grid}>
                        <div className={classes.paper}>
                            <ButtonGroup 
                                disableElevation 
                                variant="contained" 
                                color="primary" 
                                className={classes.apply}
                                >
                                <div className={classes.wrapper} style={{border: 'none'}}>
                                    <Button
                                        variant="contained"
                                        className={buttonClassname}
                                        disabled={this.state.clockIn}
                                        onClick={this.handleClockIn}
                                        >
                                        {
                                            this.state.successIn ? <CheckIcon /> : null
                                        } 
                                        Clock In
                                    </Button>
                                    {
                                        this.state.clockIn && 
                                        <CircularProgress size={24} 
                                        className={classes.buttonProgress} />
                                    }
                                </div>

                                <div className={classes.wrapper}>
                                    <Button
                                        variant="contained"                                        className={buttonClassnameTwo}
                                        disabled={this.state.clockOut}
                                        onClick={this.handleClockOut}
                                        >
                                        {this.state.successOut ? <CheckIcon /> : null} Clock Out
                                    </Button>
                                    {
                                        this.state.clockOut && 
                                        <CircularProgress size={24} 
                                        className={classes.buttonProgress} />
                                    }
                                </div>
                            </ButtonGroup>
                        </div>

                        <Box mt={8} className={classes.footerMob}>
                            <Copyright />
                        </Box>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(useStyles)(CircularIntegration);
