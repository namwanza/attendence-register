import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: 50,
        width: '80%',
        overflow: 'hidden',
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: 10,
        }
    }
}));

const Copyright = () => {
    const classes = useStyles();

    return (
        <div classes={classes.root}>
            <Typography variant="body2" color="textSecondary" align="center"
              style={{paddingBottom: 10}}>
                {'Copyright © '}
                <Link to="http://tis.ac.ug/" style={{
                    color: 'green',
                    }}>
                    Powered by: Ronnie (CS) - TISS developer
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    );
}

export default Copyright;