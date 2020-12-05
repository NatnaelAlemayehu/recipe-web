import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../store/auth/auth.utils";

const Signup = (props) => {
  const { requestSignUp, isLoggedIn, isLoggingIn } = props;
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  if (isLoggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        Signup page
        {isLoggingIn && `loading...`}
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              requestSignUp({ email, password });
            }}
          >
            {/* <input
              type="text"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            /> */}
            <input
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    isLoggingIn: state.auth.isLoggingIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSignUp: (credentials) => dispatch(registerUser(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
