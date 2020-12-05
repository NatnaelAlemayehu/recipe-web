import firebase from "../../firebase/fb-config";

import {
    loginError,
    logoutError,
    receiveLogin,
    receiveLogout,
    receiveSignUp,
    requestLogin,
    requestLogout,
    requestSignUp,
    SignUpError,
    verifyError,
    verifyRequest,
    verifySuccess,
} from "./auth.actions";

export const loginUser = user => dispatch => {
    console.log(user)
    dispatch(requestLogin());
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
            return firebase.auth().signInWithEmailAndPassword(user.email.toString().trim(), user.password)
        })
        .then(user => dispatch(receiveLogin(user)))
        .catch(error => dispatch(loginError(error)));
};

export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    firebase.auth()
        .signOut()
        .then(() => dispatch(receiveLogout()))
        .catch(error => dispatch(logoutError(error)));
};

export const registerUser = ({ email, password }) => dispatch => {
    dispatch(requestSignUp());
    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
            dispatch(receiveSignUp(res.user))
        })
        .catch(error => dispatch(SignUpError(error)));
};

export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    firebase.auth()
        .onAuthStateChanged(user => {
            if (user !== null) {
                dispatch(receiveLogin(user))
            } else {
                dispatch(verifyError())
            }
            dispatch(verifySuccess());
        });
};
