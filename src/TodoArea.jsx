import { useContext } from "react"
import { InputTodo } from "./components/inputTodo";
import {Todos} from "./components/Todos";
import { SearchTodo } from "./components/SearchTodo";
import { TodoContext } from "./components/provider/TodoProvider";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";

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
        <BrowserRouter>
        {/* <InputTodo />
        <SearchTodo /> */}
        <Routes>
            <Route path="/create/">
                <InputTodo disabled={disabled} inputText={inputText} onChange={onChangeInputText} onClick={onClickAddTodo} />
            </Route>
            <Route path="/">
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
            </Route>
        </Routes>
        </BrowserRouter>
    );
}
