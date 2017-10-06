import React, { Component } from 'react';

class FormAdd extends Component {
    constructor(props) {
        super(props)
        this.todos = this.props.todos;

        this.handleAdd = this.handleAdd.bind(this);


    }
    handleAdd(event){
        const field = this.refs.add;
        const title = this.refs.add.value;
        this.props.onClick(title)

        field.value = '';
        field.focus();
    }
    render() {

        return (

            <form className="todo-add" onSubmit={(event) => {event.preventDefault()}}>
                <input className="todo-add__text" type="text" placeholder="Новое дело" ref="add" />
                <button type="button" className="todo-add__btn" onClick={(event) => {event.preventDefault(); this.handleAdd(event)}}>+</button>
            </form>


        );
    }
}

export default FormAdd;
