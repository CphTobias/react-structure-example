import * as React from "react"

const UserContext = React.createContext(null)
const useUser = () => React.useContext(UserContext)

export { UserContext, useUser }
