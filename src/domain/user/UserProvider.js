import * as React from "react"
import { initialState, userReducer } from "./userReducer"

const UserContext = React.createContext({
  user: initialState,
  dispatch: (action = { type: "", payload: undefined }) => {},
})
export const useUser = () => React.useContext(UserContext)

function UserProvider({ children }) {
  const [state, dispatch] = React.useReducer(userReducer, initialState)

  const values = {
    user: state,
    dispatch,
  }

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserProvider
