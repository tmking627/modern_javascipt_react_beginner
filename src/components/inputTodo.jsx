import React  from "react";

export const InputTodo = (props) => {

    const {inputText, onChange, onClick} = props;

    return (
        <div>
            <input type="text" value={inputText} onChange={onChange}/>
            <button onClick={onClick}>追加</button>
        </div>
    );
}
