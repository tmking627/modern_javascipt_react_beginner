import { useContext } from "react"
import { InputTodo } from "./components/inputTodo";
import {Todos} from "./components/Todos";
import { SearchTodo } from "./components/SearchTodo";
import { TodoContext } from "./components/provider/TodoProvider";

export const TodoArea = (props) => {
    const name = props.name;

    const {inputText,todos,searchTodos,lastTodoID,
            onChangeInputText,
            onClickAddTodo,
            onClickDeleteTodo,
            onChangeSearchWord,
        }
    = useContext(TodoContext);

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
