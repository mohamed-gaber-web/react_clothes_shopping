import React, { Component } from "react";

import "./sign-up.styles.scss";

import { auth, createUserProfileDocument } from "../../firebase/firebase";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    Cpassword: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, Cpassword } = this.state;

    // validate password and confirm password
    if (password !== Cpassword) {
      alert("password don't match");
      return;
    }

    try {
      // auth username and password
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // add data to collection users
      createUserProfileDocument(user, { displayName });

      // empty fields
      this.setState({
        displayName: "",
        email: "",
        password: "",
        Cpassword: ""
      });
    } catch (err) {
      console.error("error", err);
    }
  };

  render() {
    return (
      <div className="sign__up">
        <h2 className="title"> Sign Up </h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="displayName"
              placeholder="displayname"
              onChange={this.handleChange}
              value={this.state.displayName}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={this.handleChange}
              value={this.state.email}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="enter password"
              onChange={this.handleChange}
              value={this.state.password}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="Cpassword"
              placeholder="confirm password"
              onChange={this.handleChange}
              value={this.state.Cpassword}
              className="form-control"
              required
            />
          </div>
          <button className="btn btn-primary"> Sign Up </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
