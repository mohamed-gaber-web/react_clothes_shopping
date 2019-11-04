import React from "react";

import "./sign-in.styles.scss";

import CustomButton from "../custome-button/custom-button.component";

import { signInWithGoogle, auth } from "../../firebase/firebase";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    //   this.setState({ email: event.target.value, password: event.target.value } )
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.error("error");
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h2> i Already have account </h2>
        <span> sign in with your email and password </span>

        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="email"
            className="form-control"
            name="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
          />

          <input
            type="password"
            placeholder="password"
            className="form-control"
            name="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
          />
          <div className="btn--container">
            <CustomButton type="submit" className="btn btn-info">
              Sign In
            </CustomButton>
            <CustomButton
              type="submit"
              onClick={signInWithGoogle}
              style={{ backgroundColor: "#d81d1d" }}
              className="btn btn-info"
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
