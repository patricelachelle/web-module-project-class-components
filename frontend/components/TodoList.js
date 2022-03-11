import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    const handleClick = () => {
        props.handleTaskCompleted()
    }
   
    return (
        <div className='todo-list'>
            {props.todos.map(todo => (
                <Todo handleTaskToggle={props.handleTaskToggle} key={todo.id} todo={todo} />
            ))}
            <button onClick={handleClick} className='clear-btn'>Clear Completed</button>
        </div>
    )
}

export default TodoList;
