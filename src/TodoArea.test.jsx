import {render, screen,fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputTodo } from './components/inputTodo';
import { TodoArea } from './TodoArea';

describe("Todoリスト表示テスト", () => {
    test('inputTodoの表示テスト', () => {
        render(<TodoArea />);
        const inputText = screen.getByRole('inputtodo');
        expect(inputText).toBeInTheDocument();
    });
});

describe("Todo追加処理のテスト",() => {
    test('追加処理', async () => {
        //Arrange
        render(<TodoArea />);
        const inputText = screen.getByRole('inputtodo');
        const inputTodoButton = screen.getByRole('button',{name:'追加'});
        const user = userEvent.setup();

        //Act
        //まだ
        expect(inputText.value).toBe('');
        expect(inputTodoButton).toBeDisabled();

        await user.type(inputText,'３つ目の追加タスク');
        await user.click(inputTodoButton);

        //Assertion
        const Todo = screen.getByRole('todo-3');
        expect(Todo).toBeInTheDocument();
    })
});

describe("Todo削除処理のテスト", () => {
     test('削除処理', async () => {
        //Arrange
        render(<TodoArea />);
        const todo_one = screen.getByRole('todo-1');
        const todo_two = screen.getByRole('todo-2');
        const deleteButton = screen.getByRole('todo-btn-1');
        const deleteButton2 = screen.getByRole('todo-btn-2');
        const user = userEvent.setup();

        //Act
        //まだ
        expect(todo_one).toBeInTheDocument();
        expect(todo_two).toBeInTheDocument();

        await user.click(deleteButton2);

        expect(todo_one).toBeInTheDocument();
        expect(todo_two).not.toBeInTheDocument();

        await user.click(deleteButton);

        //Assertion
        expect(todo_one).not.toBeInTheDocument();
        expect(todo_two).not.toBeInTheDocument();

    })

});

describe("Todo検索処理のテスト", () => {

    test('検索', async () => {
        //Arrange
        render(<TodoArea />);
        const todo_one = screen.getByRole('todo-1');
        const todo_two = screen.getByRole('todo-2');
        const searchTodo = screen.getByRole('search');
        const user = userEvent.setup();

        //Act
        //まだ
        expect(todo_one).toBeInTheDocument();
        expect(todo_two).toBeInTheDocument();

        await user.type(searchTodo,'あ');

        const search_todo_one = screen.queryByText('あああ');
        const search_todo_two = screen.queryByText('いいい');
        expect(search_todo_one).toBeInTheDocument();
        expect(search_todo_two).toBeNull();

        await user.type(searchTodo,'{backspace}い');

        const search_todo_one2 = screen.queryByText('あああ');
        const search_todo_two2 = screen.queryByText('いいい');
        //Assertion
        expect(search_todo_one2).toBeNull();
        expect(search_todo_two2).toBeInTheDocument();

        await user.type(searchTodo,'{backspace}');

        const search_todo_one3 = screen.queryByText('あああ');
        const search_todo_two3 = screen.queryByText('いいい');

        expect(search_todo_one3).toBeInTheDocument();
        expect(search_todo_two3).toBeInTheDocument();
    })

});
