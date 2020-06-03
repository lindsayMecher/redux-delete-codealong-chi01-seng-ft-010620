import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  let todo;
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      todo = {
        id: uuid(),
        text: action.payload.text
      }
      return { todos: state.todos.concat(todo) };
    case "DELETE_TODO":
      console.log('deleting todo', action.payload)
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }

    default:
      return state;
  }
}
