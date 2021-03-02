const LOGIN_USER_START = "LOGIN_USER_START"
const LOGIN_USER_ERROR = "LOGIN_USER_ERROR"
const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
const LOGOUT_USER = "LOGOUT_USER"

const loginUserStart = () => ({
  type: LOGIN_USER_START,
})

const loginUserError = error => ({
  type: LOGIN_USER_ERROR,
  payload: error,
})

const loginUserSuccess = user => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
})

const logoutUser = () => ({
  type: LOGOUT_USER,
})

const userActions = {
  loginUserStart,
  loginUserSuccess,
  loginUserError,
  logoutUser,
}

export {
  LOGIN_USER_ERROR,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  userActions,
  loginUserError,
  loginUserStart,
  loginUserSuccess,
  logoutUser,
}
