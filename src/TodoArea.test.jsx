import {render, screen} from '@testing-library/react';
import { TodoArea } from './TodoArea';

test('inputTodoの表示テスト', () => {
    render(<TodoArea />);
    const inputTodoButton = screen.getByText('追加');
    expect(inputTodoButton).toBeInTheDocument();
});
