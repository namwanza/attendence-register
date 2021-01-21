import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'

const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center" style={{padding: 20}}>
          {'Copyright © '}
          <Link to="http://tis.ac.ug/" style={{color: 'green'}}>
              Powered by: Ronnie (CS) - TISS developer
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
      </Typography>
    );
}

export default Copyright;