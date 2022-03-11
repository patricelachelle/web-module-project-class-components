import React from 'react';

const Todo = props => {
  const handleClick = () => {
    props.handleTaskToggle(props.todo.id)
  }
  return (
    <div onClick={handleClick} className={`task${props.completed ? ' completed' : ''}`}>
      <p style={{ textDecoration: props.todo.completed ? 'line-through' : null}}>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
