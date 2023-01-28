import { useContext } from "react"
import { InputTodo } from "./components/inputTodo";
import { TodoContext } from "./components/provider/TodoProvider";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { Home } from "./components/Home";

export const TodoArea = (props) => {
    const name = props.name;

    const {inputText,todos,
            onChangeInputText,
            onClickAddTodo,
        }
    = useContext(TodoContext);

    const disabled = todos.length > 10;

    return (
        <BrowserRouter>
        {/* <InputTodo />
        <SearchTodo /> */}
            <ul>
                <li><Link to="/">ホーム</Link></li>
                <li><Link to="/create">todo作成</Link></li>
            </ul>
            <Routes>
                <Route path="/create" element={<InputTodo disabled={disabled} inputText={inputText} onChange={onChangeInputText} onClick={onClickAddTodo} />} />
                <Route path="/" element={<Home />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
