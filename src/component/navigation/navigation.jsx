import React from "react";
import { connect } from "react-redux";

import { logoutUser } from "../../store/auth/auth.utils";

const Navigation = (props) => {
  const { isLoggingIn, isLoggedIn, logout } = props;
  return <div>Navigation</div>;
};

const mapStateToProps = (state) => {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    isLoggedIn: state.auth.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
