import { useEffect, useState } from "react"

export const TodoArea = (props) => {
    const [name] = props;

    // useEffect(() => {
    // },[name]);
    const [todos,setTodo] = useState(['あああ']);

    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <li key={todo}>
                        <p>{todo}</p>
                        <button>削除</button>
                    </li>

                );
            })}
        </ul>
    );
}
