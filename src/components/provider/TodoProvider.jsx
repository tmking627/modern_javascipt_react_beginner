import { useContext, createContext } from "react";
import { useTodo } from "../../hooks/useTodo";

export const TodoContext = createContext({});

export const TodoProvider = (props) => {
    const children = props.children;

    const [{
        inputText,
        todos,
        searchTodos,
        lastTodoID
    },
    {
        onChangeInputText,
        onClickAddTodo,
        onClickDeleteTodo,
        onChangeSearchWord,
    }
    ] = useTodo();

    return (
        <TodoContext.Provider value={{
            inputText,
            todos,
            searchTodos,
            lastTodoID,
            onChangeInputText,
            onClickAddTodo,
            onClickDeleteTodo,
            onChangeSearchWord
        }}>
            {children}
        </TodoContext.Provider>
    );
}
