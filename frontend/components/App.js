import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

const todos = [
  {
    task: 'Lose my Mind',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Lose my Mind, Again',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Lose my Mind, Yet, Again',
    id: 1528817084359,
    completed: false
  },
  {
    task: 'Lose my Mind, For the Fourth Time',
    id: 1528817084399,
    completed: false
  },
  {
    task: 'Start to Lose my Mind, But Stop',
    id: 1528817084999,
    completed: false
  },
  {
    task: 'Finally Get A Grip',
    id: 1528899984358,
    completed: false
  }
];

class App extends React.Component {
    constructor() {
    super()
    this.state = {
      todos: todos
    }
  }

  handleTaskToggle = (id) => {    
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          return ({
            ...todo,
            completed: !todo.completed
          })
        } else {
          return todo
        }
      })
    })
  }

  handleTaskAdd = (taskName) => {
    const task = {
      task: taskName,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, task]
    })
  }

  handleTaskCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return(!todo.completed)
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
        <h1>Todo List</h1>
        <Form handleTaskAdd={this.handleTaskAdd} />
        </div>
        <TodoList todos={this.state.todos} handleTaskToggle={this.handleTaskToggle} handleTaskCompleted={this.handleTaskCompleted} />
      </div>
    );
  }
}

export default App;
