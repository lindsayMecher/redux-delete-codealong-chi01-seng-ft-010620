import React from 'react'

const Todo = props => {
    console.log(props)
    return (
        <div>
            <span>{props.todo.text}</span><button onClick={(todoId) => props.deleteTodo(props.todo.id)}>DELETE</button>
        </div>
    )
}

export default Todo;
