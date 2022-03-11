import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
        }
    }

    handleChanges = e => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleTaskAdd(this.state.inputValue)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} type='text' name='task' />
                <button>Add Todo</button>
            </form>
        )}
    }

export default Form
