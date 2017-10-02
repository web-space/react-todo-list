import React, { Component } from 'react';

class FormAdd extends Component {
    constructor(props) {
        super(props)
        this.todos = this.props.todos;

        this.handleAdd = this.handleAdd.bind(this);


    }
    handleAdd(title){

    }
    render() {
        const todos = this.todos;
        return (
            <div className="footer">
                <form action="#" className="add-todo">
                    <input onClick={this.handleAdd(this.value)}/>
                    <button></button>
                </form>
            </div>

        );
    }
}

export default FormAdd;
