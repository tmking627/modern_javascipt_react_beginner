import { useEffect, useState } from "react"
import { InputTodo } from "./components/inputTodo";
import {Todos} from "./components/Todos";

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
        setTodo(newTodo);
    }

    const disabled = todos.length > 10;


    return (
        <>
        {/* <InputTodo />
        <SearchTodo /> */}
        <InputTodo disabled={disabled} inputText={inputText} onChange={onChangeInputText} onClick={onClickAddTodo} />
        {disabled && (
            <p style={{ color: 'red' }}>todoは10個までです。</p>
        )
        }
        <Todos todos={todos} onClick={onClickDeleteTodo} />
        </>
    );
}
