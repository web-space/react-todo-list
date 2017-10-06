import React, { Component } from 'react';
import FormAdd from './components/FormAdd';
import TodosContainer from './components/TodosContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);



    this.handleAdd = this.handleAdd.bind(this);


    this.state = {
      todos: this.props.initialData
    }


  }
  handleAdd(title){

    const titleSpaceRemove = title.trim()
    if(!titleSpaceRemove) return
    const todosLength = (this.state.todos.length +1);

    const todo = {
      id: todosLength,
      title,
      completed: false
    };
    const todos = [...this.state.todos, todo];
    this.setState({ todos });




  }
  render() {
    const todos = this.state.todos;

    return (
      <div className="container">
        <main className="container__main">
          <TodosContainer todos={todos} />
        </main>
        <footer className="container__footer">
          <FormAdd todos={todos} onClick={this.handleAdd}/>
        </footer>
      </div>
    );
  }
}

export default App;
