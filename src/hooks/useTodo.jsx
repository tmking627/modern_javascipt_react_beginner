import { useState } from "react";

export const useTodo = () => {
    const [inputText,setInputText] = useState('');
    const [todos, setTodo] = useState([{id:1,title:'あああ'},{id:2,title:'いいい'}]);
    const [searchTodos,setSearchTodo] = useState(false);


    const onChangeInputText = (e) => {
        setInputText(e.target.value);
    }

    const onClickAddTodo = () => {
        if(inputText === ''){
            return;
        }
        const lastTodoID = todos.slice(-1)[0].id;
        const newTodo = [...todos,{id:lastTodoID + 1,title:inputText}];
        setTodo(newTodo);
        setInputText('');
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
    };

    const action = {
        onChangeInputText,
        onClickAddTodo,
        onClickDeleteTodo,
        onChangeSearchWord,
    };

    return [states,action];

}
