/* eslint-disable import/prefer-default-export */
import actionTypes from './actionTypes';
import signinWithGoogle from '../../firebase/firebaseMethod';

function loginGoogleSuccess(user) {
  return {
    type: actionTypes.LOGIN_USER_GOOGLE, user,
  };
}

function LoginGoogleError(loginError) {
  return {
    type: actionTypes.LOGIN_ERROR, loginError,
  };
}

export function loginUserWithGoogle() {
  return async (dispatch) => {
    try {
      const user = await signinWithGoogle();
      dispatch(loginGoogleSuccess(user));
    } catch (loginError) {
      dispatch(LoginGoogleError(loginError));
    }
  };
}
