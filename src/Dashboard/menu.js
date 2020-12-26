import React from 'react';
import Button from '@material-ui/core/Button';

import { withRouter } from "react-router";
import app from "../base";

const SimpleMenu = (props) => {

  const handleSignOut = async event => {
    event.preventDefault();
    try {
      await app
        .auth()
        .signOut();
      props.history.push("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
        <Button 
          variant="text" 
          onClick={handleSignOut}
          style={{
            color: 'white'
          }}
          >
          Logout
        </Button>
      </div>
  );
}

export default withRouter(SimpleMenu)
