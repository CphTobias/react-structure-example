import { nanoid } from "nanoid"
import { ADD_TODO, REMOVE_TODO } from "./todolistActions"

const initialState = {
  todos: [],
}

function todolistReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { id: nanoid(), todo: action.payload, finished: false },
        ],
      }
    case REMOVE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload),
      }
    default:
      return state
  }
}

export { todolistReducer, initialState }
