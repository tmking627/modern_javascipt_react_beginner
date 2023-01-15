import {render, screen} from '@testing-library/react';
import { TodoArea } from './TodoArea';

describe("Todoリスト表示テスト", () => {
    test('inputTodoの表示テスト', () => {
        render(<TodoArea />);
        const inputTodoButton = screen.getByRole('inputtodo');
        expect(inputTodoButton).toBeInTheDocument();
    });
});

describe("Todo追加処理のテスト", () => {

});

describe("Todo削除処理のテスト", () => {

});

describe("Todo検索処理のテスト", () => {

});
