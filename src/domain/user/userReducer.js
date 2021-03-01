import {
  LOGIN_USER_ERROR,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from "./userActions"

const initialState = {
  isLoading: false,
  user: null,
  error: "",
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
      }
    case LOGIN_USER_ERROR:
      return {
        isLoading: false,
        user: null,
        error: action.payload,
      }
    case LOGIN_USER_SUCCESS:
      return {
        isLoading: false,
        user: action.payload,
        error: "",
      }
    case LOGOUT_USER:
      return {
        isLoading: false,
        user: null,
        error: "",
      }
    default:
      return state
  }
}

export { userReducer, initialState }
