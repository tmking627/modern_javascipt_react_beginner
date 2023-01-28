import React from "react";
import {Todos} from "./Todos";
import { SearchTodo } from "./SearchTodo";
import { TodoContext } from "./provider/TodoProvider";
import { useContext } from "react";

export const Home = () => {
    const {todos,searchTodos,
            onClickDeleteTodo,
            onChangeSearchWord,
        }
    = useContext(TodoContext);

    const disabled = todos.length > 10;

    return (
        <>
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
