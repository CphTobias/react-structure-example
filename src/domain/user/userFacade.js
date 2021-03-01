import { loginUserError, loginUserStart, loginUserSuccess } from "./userActions"

async function authenticate(dispatch, user) {
  dispatch(loginUserStart())
  try {
    //do fetch instead
    console.log(user)
    dispatch(loginUserSuccess(user))
    return true
  } catch (err) {
    console.log(err.message)
    dispatch(loginUserError(err.message))
    return false
  }
}

export { authenticate }
