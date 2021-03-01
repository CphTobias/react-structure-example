import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import UserProvider from "../domain/user/UserProvider"
import Homepage from "./pages/Homepage"
import Loginpage from "./pages/Loginpage"
import Todolistpage from "./pages/Todolistpage"

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <Loginpage />
          </Route>
          <Route exact path="/todolist">
            <Todolistpage />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  )
}

export default App
