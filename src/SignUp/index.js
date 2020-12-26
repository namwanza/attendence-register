import React, { Component } from "react";
import SignUpView from "./SignUpView";
import { withRouter } from "react-router";
import app from "../base";

class SignUpContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const {email, password } = event.target.elements;
    // const { firstname, secondname } = event.target.value;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/dashboard");
    } catch (error) {
      alert(error);
    }
  };

  
  render() {
    return <SignUpView onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(SignUpContainer);
