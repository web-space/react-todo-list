import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../TodoItem';

import './styles.css';

export default function TodoList({ todos }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
