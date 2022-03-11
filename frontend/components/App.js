import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

let idx = 0
const getIdx = () => ++idx

const todos = [
  {
    task: 'Lose my Mind',
    id: getIdx(),
    completed: false
  },
  {
    task: 'Lose my Mind, Again',
    id: getIdx(),
    completed: false
  },
  {
    task: 'Lose my Mind, Yet, Again',
    id: getIdx(),
    completed: false
  },
  {
    task: 'Lose my Mind, For the Fourth Time',
    id: getIdx(),
    completed: false
  },
  {
    task: 'Start to Lose my Mind, But Stop',
    id: getIdx(),
    completed: false
  },
  {
    task: 'Finally Get A Grip',
    id: getIdx(),
    completed: false
  }
];

const initialState = {
  todos: todos,
}

class App extends React.Component {
    // constructor() {
    // super()
    // this.state = {
    //   todos: todos
    // }
    // }
    state = initialState

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
      id: getIdx(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, task],
      form: initialState
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
