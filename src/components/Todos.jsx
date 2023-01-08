import React from "react";

export const Todos = (props) => {
    const {todos, onClick} = props;
    return (
         <ul>
            {todos.map((todo, index) => {
                return (
                    <li key={todo}>
                        <p>{todo}</p>
                        <button onClick={() => {onClick(index)}}>削除</button>
                    </li>

                );
            })}
        </ul>
    );
}
