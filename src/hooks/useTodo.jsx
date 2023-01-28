import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

export const useTodo = () => {
    const [inputText,setInputText] = useState('');
    const [todos, setTodo] = useState([{id:1,title:'あああ'},{id:2,title:'いいい'}]);
    const [lastTodoID,setLastTodoID] = useState(2);
    const [searchTodos,setSearchTodo] = useState(false);

    const navigate = useNavigate();


    const onChangeInputText = (e) => {
        setInputText(e.target.value);
    }

    const onClickAddTodo = () => {
        if(inputText === ''){
            return;
        }

        const newLastTodoID = lastTodoID + 1;
        const newTodo = [...todos,{id:newLastTodoID,title:inputText}];
        setTodo(newTodo);
        setInputText('');
        setLastTodoID(newLastTodoID);
        navigate("/");
    }

     const onClickDeleteTodo = (id) => {

        const newTodo = todos.filter(todo => todo.id !== id);
        if(searchTodos.length > 0){
            const SearchingTodos = searchTodos.filter(todo => todo.id !== id);
             setSearchTodo(SearchingTodos);
        }
        setTodo(newTodo);
    }

    const onChangeSearchWord = (e) => {
        if(e.target.value === ''){
            setSearchTodo(false);
            return;
        }
        const SearchingTodos = todos.filter(todo => todo.title.startsWith(e.target.value));
        console.log(SearchingTodos);
        setSearchTodo(SearchingTodos);
    }

    const states = {
        inputText,
        todos,
        searchTodos,
        lastTodoID
    };

    const action = {
        onChangeInputText,
        onClickAddTodo,
        onClickDeleteTodo,
        onChangeSearchWord,
    };

    return [states,action];

}
