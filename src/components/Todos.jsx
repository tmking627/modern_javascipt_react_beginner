import React from "react";

export const Todos = (props) => {
    const {todos, onClick} = props;
    return (
         <ul>
            {todos.map((todo, index) => {
                return (
                    <li key={todo.id}>
                        <p>{todo.title}</p>
                        <button onClick={() => {onClick(todo.id)}}>削除</button>
                    </li>

                );
            })}
        </ul>
    );
}
