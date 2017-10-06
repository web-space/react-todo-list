import React from "react";

const Todo = ({ id, title }) => (
    <div className="todo__item">
        {id + ": " + title}
    </div>
);


export default Todo;
