import { useEffect, useState } from "react"
import { InputTodo } from "./components/inputTodo";

export const TodoArea = (props) => {
    const name = props.name;



    // useEffect(() => {
    // },[name]);

    const [inputText,setInputText] = useState('');
    const [todos,setTodo] = useState(['あああ']);

    const onChangeInputText = (e) => {
        setInputText(e.target.value);
    }

    const onClickAddTodo = () => {
        if(inputText === ''){
            return;
        }

        setTodo(todos.concat([inputText]));
        setInputText('');
    }

    const onClickDeleteTodo = (index) => {
        const newTodo = [...todos];
        newTodo.splice(index,1);
        setTodo(newTodos);
    }


    return (
        <>
        {/* <InputTodo />
        <SearchTodo /> */}
        <InputTodo />
        <ul>
            {todos.map((todo, index) => {
                return (
                    <li key={todo}>
                        <p>{todo}</p>
                        <button onClick={onClickDeleteTodo(index)}>削除</button>
                    </li>

                );
            })}
        </ul>
        </>
    );
}
