import * as React from "react"
import { useHistory } from "react-router-dom"
import { useUser } from "../../domain/user/UserContext"

function Homepage() {
  const { user } = useUser()
  const history = useHistory()

  return (
    <div>
      {user.user ? (
        <div style={{ textAlign: "center" }}>
          <h1>Welcome! {user.user.username}</h1>
          <button onClick={() => history.push("/todolist")}>
            Create a todo list
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>Welcome! Please sign in to use this app</h1>
          <button
            style={{ padding: "10px" }}
            onClick={() => history.push("/login")}>
            Login
          </button>
        </div>
      )}
    </div>
  )
}

export default Homepage
