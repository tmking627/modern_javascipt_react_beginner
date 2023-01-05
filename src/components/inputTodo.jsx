import React  from "react";

export const InputTodo = () => {
    return (
        <div>
            <input type="text" value={inputText} onChange={onChangeInputText}/>
            <button onClick={onClickAddTodo}>追加</button>
        </div>
    );
}
