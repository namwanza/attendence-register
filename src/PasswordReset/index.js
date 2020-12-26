import React, { Component } from "react";
import RestView from "./RestView";
import { withRouter } from "react-router";
import app from "../base";

class PasswordRest extends Component {
    sendResetEmail = async event => {
        event.preventDefault();
        const { email } = event.target.elements;
        const setEmailHasBeenSent = false;
        try {
          await app
          .auth()
          .sendPasswordResetEmail(email.value)
          .then(() => {
            setEmailHasBeenSent(true);
            setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
          })
        } catch(success) {
            alert("We have sent you an email link, please check!")
        };
    };

  render() {
    return <RestView onSubmit={this.sendResetEmail} />;
  }
}

export default withRouter(PasswordRest);
