const ADD_TODO = "ADD_TODO"
const REMOVE_TODO = "REMOVE_TODO"

const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
})

const removeTodo = todoId => ({
  type: REMOVE_TODO,
  payload: todoId,
})

export { ADD_TODO, REMOVE_TODO, addTodo, removeTodo }
