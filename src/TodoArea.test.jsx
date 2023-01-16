import {render, screen,fireEvent} from '@testing-library/react';
import { TodoArea } from './TodoArea';

describe("Todoリスト表示テスト", () => {
    test('inputTodoの表示テスト', () => {
        render(<TodoArea />);
        const inputText = screen.getByRole('inputtodo');
        expect(inputText).toBeInTheDocument();
    });
});

describe("Todo追加処理のテスト", () => {
    test('追加処理', () => {
        //Arrange
        render(<TodoArea />);
        const inputText = screen.getByRole('inputtodo');
        const inputTodoButton = screen.getByRole('button',{name:'追加'});

        //Act
        //Todoの文字入力も
        fireEvent.click(inputTodoButton);

        //Assertion
        const Todo = screen.getByRole('todo-1');
        expect(Todo).toBeInTheDocument();
    })
});

describe("Todo削除処理のテスト", () => {

});

describe("Todo検索処理のテスト", () => {

});
