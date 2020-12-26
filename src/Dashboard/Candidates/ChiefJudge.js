import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './President.css'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <table>
        <tr>
          <th>
            Photo
          </th>
          <th>
            Full Name
          </th>
          <th>
            Cast your Vote
          </th>
        </tr>

        <tr>
          <td>
            <Avatar 
              alt="Remy Sharp" 
              src="https://drive.google.com/uc?id=1kaIaFnWHgM-KBk5Ur_BL73bC5xuxjEOg" 
              className={classes.large} 
            />
          </td>

          <td>
            Amos Mukasa
          </td>

          <td>
            <Button color="primary">
              Vote
            </Button>
          </td>
        </tr>


        <tr>
          <td>
            <Avatar 
              alt="Remy Sharp" 
              src="https://drive.google.com/uc?id=18YDF7Nxw1OCFTFdKBnpL-PgkV8PuzCC5" 
              className={classes.large} 
            />
          </td>
          <td>
            Wacha Joshua Joel
          </td>

          <td>
            <Button color="primary">
              Vote
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );
}
