import { push } from 'react-router-redux';
import api from '../../../core/api';
import {
  setToken,
  removeToken,
  parseJWT,
} from '../../../core/authentication/token';
import * as notif from '../../../core/constants';
import { sendNotification } from '../notifications/notifications';
import * as t from './actionTypes';

/**
  * SIGNUP ACTIONS
  * -------------------------
  * @exports signup
  *****************************************************************/

export function doSignup(data) {
  return dispatch => {
    dispatch({ type: t.SIGNUP_USER_REQUEST });
    return api
      .post('/api/v1/auth/signup', data)
      .then(res => {
        if (res.status !== 201) {
          const err = JSON.stringify(res.data.message.message);
          dispatch(signUpError(err));
          dispatch(notificationSend(notif.MSG_SIGNUP_ERROR));
        }
        dispatch({ type: t.SIGNUP_USER_SUCCESS });
        dispatch(push('/'));
        dispatch(notificationSend(notif.MSG_SIGNUP_SUCCESS));
      })
      .catch(err => {
        dispatch(sendNotification(notif.MSG_SIGNUP_ERROR));
        return dispatch(signUpError(err));
      });
  };
}

// Signup Error
const signUpError = err => {
  return {
    type: t.SIGNUP_USER_FAILURE,
    error: err,
  };
};

/**
  * LOGIN ACTIONS
  * -------------------------
  * @exports login
  *****************************************************************/

export function doLogin(data) {
  return dispatch => {
    dispatch({ type: t.LOGIN_REQUEST });
    return api
      .post('/api/v1/auth/login', data)
      .then(res => {
        setToken(res.data.token);
        dispatch({
          type: t.LOGIN_SUCCESS,
          token: res.data.token,
          user: res.data.user,
        });
        dispatch(push('/'));
        return dispatch(sendNotification(notif.MSG_LOGIN_SUCCESS));
      })
      .catch(err => {
        dispatch(loginError(err));
        return dispatch(
          sendNotification({
            message: err,
            kind: 'error',
            dismissAfter: 3000,
          }),
        );
      });
  };
}
/**
  * LOGOUT ACTIONS
  * -------------------------
  * @exports logout
  *****************************************************************/

export function logout() {
  return dispatch => {
    removeToken();
    dispatch({
      type: t.LOGOUT,
    });
    dispatch(sendNotification(notif.MSG_LOGOUT));
  };
}

/**
  * AUTH CHECK ACTIONS
  * -------------------------
  * @exports checkAuth
  *****************************************************************/

export const checkAuth = token => {
  return async (dispatch: Function) => {
    try {
      dispatch({ type: t.CHECK_AUTH_REQUEST });
      const res = await api.get('/api/v1/auth/check');
      const user = res.data;
      dispatch(checkAuthSuccess(user, token));
    } catch (err) {
      dispatch({
        type: t.CHECK_AUTH_FAILURE,
        err,
      });
      return dispatch(sendNotification(notif.MSG_AUTH_ERROR));
    }
  };
};
