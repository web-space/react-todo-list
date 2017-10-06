import React from "react";
import Todo from './Todo';
const TodosContainer = ({ todos }) => (

        <div className="todo">
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                 />)
            }

        </div>
);



export default TodosContainer;
