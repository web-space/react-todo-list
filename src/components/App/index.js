import React, { Component } from 'react';

import FormAdd from '../FormAdd';
import TodoList from '../TodoList';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.props.initialData,
    };
  }

  onSubmit = title => {
    const id = this.state.todos.length + 1;
    const item = { id, title, completed: false };
    const todos = [...this.state.todos, item];

    this.setState({ todos });
  };

  render() {
    return (
      <div className="container">
        <main className="container__main">
          <TodoList todos={this.state.todos} />
        </main>

        <footer className="container__footer">
          <FormAdd onSubmit={this.onSubmit} />
        </footer>
      </div>
    );
  }
}

export default App;
