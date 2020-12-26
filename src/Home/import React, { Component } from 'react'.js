import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

class CircularIntegration extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    state = {
        loading: false,
        success: false,
    }

    
    handleButtonClick = () => {
        if (!this.state.loading) {
            this.setState({
                success: false
            });

            this.setState({
                loading: true
            });

            this.myRef.current = window.setTimeout(() => {
                this.setState({
                    success: true,
                    loading: false
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
        [classes.buttonSuccess]: this.state.success,
        });
    
        return (
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <Fab
                        aria-label="save"
                        color="primary"
                        className={buttonClassname}
                        onClick={this.handleButtonClick}
                    >
                        {this.state.success ? <CheckIcon /> : <SaveIcon />}
                    </Fab>
                    {this.state.loading && <CircularProgress size={68} className={classes.fabProgress} />}
                </div>

                <div className={classes.wrapper}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={buttonClassname}
                        disabled={this.state.loading}
                        onClick={this.handleButtonClick}
                    >
                        Accept terms
                    </Button>
                    {this.state.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(CircularIntegration);
