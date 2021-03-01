import * as React from "react"
import { UserContext } from "./UserContext"
import { initialState, userReducer } from "./userReducer"

function UserProvider({ children }) {
  const [state, dispatch] = React.useReducer(userReducer, initialState)

  const values = {
    user: state,
    dispatch,
  }

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserProvider
