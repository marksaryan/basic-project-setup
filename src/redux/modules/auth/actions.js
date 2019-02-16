import { createAction } from 'redux-actions';

export const SIGN_IN_PENDING = 'auth/SIGN_IN_PENDING';
export const SIGN_IN_SUCCESS = 'auth/SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'auth/SIGN_IN_ERROR';

export const fetchDataActionCreators = {
  isSignInPending: createAction(SIGN_IN_PENDING),
  isSignInSuccess: createAction(SIGN_IN_SUCCESS),
  isSignInError: createAction(SIGN_IN_ERROR)
};
