import './App.css';
import './components/styles.css'
import InputField from './components/InputField';
import { useState } from 'react';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  }

  return (
  <div className="App">
    <span className="heading">Taskify</span>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    {todos.map((t) => (
      <li>{t.todo}</li>
    ))}
    <TodoList todos={todos} setTodos={setTodos}/>
  </div>
  );
}

export default App;
