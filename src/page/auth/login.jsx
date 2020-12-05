import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../store/auth/auth.utils";

const Login = (props) => {
  const { loginUser, isLoggedIn } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isLoggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        Login page
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              loginUser({ email, password });
            }}
          >
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
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (credentials) => dispatch(loginUser(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
