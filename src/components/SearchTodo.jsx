import React from "react";

export const SearchTodo = (props) => {

    const {onChangeSearchWord} = props;
    return <input type="text" onChange={onChangeSearchWord} />
}
