import { useEffect, useState } from "react"
import { InputTodo } from "./components/inputTodo";
import {Todos} from "./components/Todos";
import { SearchTodo } from "./components/SearchTodo";

export const TodoArea = (props) => {
    const name = props.name;



    // useEffect(() => {
    // },[name]);

    const [inputText,setInputText] = useState('');
    const [todos,setTodo] = useState(['あああ']);
    const [searchTodos,setSearchTodo] = useState(false);

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

    const onChangeSearchWord = (e) => {
        if(e.target.value === ''){
            setSearchTodo(false);
            return;
        }
        const SearchingTodos = todos.filter(todo => todo.startsWith(e.target.value));
        console.log(SearchingTodos);
        setSearchTodo(SearchingTodos);
    }

    const disabled = todos.length > 10;


    return (
        <>
        {/* <InputTodo />
        <SearchTodo /> */}
        <InputTodo disabled={disabled} inputText={inputText} onChange={onChangeInputText} onClick={onClickAddTodo} />
        <SearchTodo onChangeSearchWord={onChangeSearchWord} />
        {disabled && (
            <p style={{ color: 'red' }}>todoは10個までです。</p>
        )
        }
        {searchTodos === false  ? (
             <Todos todos={todos} onClick={onClickDeleteTodo} />
        ) : (
        <>
        <p>searchtodo</p>
        <Todos todos={searchTodos} onClick={onClickDeleteTodo} />
         </>
        )
        }
        </>
    );
}
