import React  from "react";

export const InputTodo = (props) => {

    const {inputText, onChange, onClick, disabled} = props;

    return (
        <div>
            <input role="inputtodo" disabled={disabled} type="text" value={inputText} onChange={onChange}/>
            <button disabled={disabled} onClick={onClick}>追加</button>
        </div>
    );
}
