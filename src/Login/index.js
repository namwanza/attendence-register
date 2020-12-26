import React, { Component } from "react";
import LogInView from "./LogInView";
import { withRouter } from "react-router";
import app from "../base";
import firebase from 'firebase/app';

class LogInContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/vote");
    } catch (error) {
      alert(error);
    }

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(function() {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase.auth().signInWithEmailAndPassword(email.value, password.value);
      })
      .catch(function(error) {
        // Handle Errors here.
        alert(error);
      });
  };

  render() {
    return <LogInView onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(LogInContainer);

