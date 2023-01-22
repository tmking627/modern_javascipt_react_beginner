import logo from './logo.svg';
import './App.css';
import { TodoArea } from './TodoArea';
import { TodoProvider } from './components/provider/TodoProvider';

export const App = () => {
  return (
    <>
      <h1>タイトル</h1>
      <TodoProvider>
        <TodoArea name = 'あああ'/>
      </TodoProvider>
    </>
  );
};
