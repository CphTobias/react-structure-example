import * as React from "react"
import {
  todolistReducer,
  initialState,
} from "../../domain/todolist/todolistReducer"
import { addTodo, removeTodo } from "../../domain/todolist/todolistActions"
import { logoutUser } from "../../domain/user/userActions"
import { useHistory } from "react-router-dom"
import { isValidUser } from "../../domain/user/userUtils"
import { useUser } from "../../domain/user/UserProvider"

function Todolistpage() {
  const history = useHistory()
  const currentUser = useUser()
  const [todolist, dispatch] = React.useReducer(todolistReducer, initialState)
  const [todo, setTodo] = React.useState("")

  React.useEffect(() => {
    if (!isValidUser(currentUser.user)) history.push("/")
  }, [currentUser, history])

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addTodo(todo))
    setTodo("")
  }

  return (
    <div>
      <h1>Create your own todolist: {currentUser.user.username}</h1>
      <button onClick={() => currentUser.dispatch(logoutUser())}>
        Log out
      </button>
      <form onSubmit={handleSubmit}>
        <input
          name="todo"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>
      <div>
        <ul>
          {todolist.todos.map(todo => (
            <li style={{ display: "flex" }} key={todo.id}>
              <p>{todo.todo}</p>
              <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todolistpage
