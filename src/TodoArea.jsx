import { useEffect, useState } from "react"
import { InputTodo } from "./components/inputTodo";
import {Todos} from "./components/Todos";
import { SearchTodo } from "./components/SearchTodo";
import { useTodo } from "./hooks/useTodo";

export const TodoArea = (props) => {
    const name = props.name;

    const [{inputText,todos,searchTodos,lastTodoID},
        {
            onChangeInputText,
            onClickAddTodo,
            onClickDeleteTodo,
            onChangeSearchWord,
        }
    ] = useTodo();


    // useEffect(() => {
    // },[name]);

    // const [inputText,setInputText] = useState('');
    // const [todos, setTodo] = useState([{id:1,title:'あああ'},{id:2,title:'いいい'}]);
    // const [searchTodos,setSearchTodo] = useState(false);

    // const onChangeInputText = (e) => {
    //     setInputText(e.target.value);
    // }

    // const onClickAddTodo = () => {
    //     if(inputText === ''){
    //         return;
    //     }
    //     const lastTodoID = todos.slice(-1)[0].id;
    //     const newTodo = [...todos,{id:lastTodoID + 1,title:inputText}];
    //     setTodo(newTodo);
    //     setInputText('');
    // }

    // const onClickDeleteTodo = (id) => {

    //     const newTodo = todos.filter(todo => todo.id !== id);
    //     const SearchingTodos = searchTodos.filter(todo => todo.id !== id);
    //     setTodo(newTodo);
    //     setSearchTodo(SearchingTodos);
    // }

    // const onChangeSearchWord = (e) => {
    //     if(e.target.value === ''){
    //         setSearchTodo(false);
    //         return;
    //     }
    //     const SearchingTodos = todos.filter(todo => todo.title.startsWith(e.target.value));
    //     console.log(SearchingTodos);
    //     setSearchTodo(SearchingTodos);
    // }

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
