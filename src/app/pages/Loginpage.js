import * as React from "react"
import { useHistory } from "react-router-dom"
import { authenticate } from "../../domain/user/userFacade"
import { useUser } from "../../domain/user/UserProvider"

function Loginpage() {
  const history = useHistory()
  const { dispatch } = useUser()
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  function handleSubmit(e) {
    e.preventDefault()
    authenticate(dispatch, {
      username: username,
      password: password,
    }).then(isValidLogin => {
      if (isValidLogin) history.push("/")
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => history.push("/")}>Go back</button>
    </div>
  )
}

export default Loginpage
