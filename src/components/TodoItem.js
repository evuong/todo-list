import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" checked={this.props.todo.completed} onChange={this.props.toggleComplete.bind(this, id)} /> {' '}
                    { title }
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

//button style
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
