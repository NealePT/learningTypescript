import './App.css';
import './components/styles.css'
import InputField from './components/InputField';
import React, { useState } from 'react';
import { Todo } from './model';

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
  </div>
  );
}

export default App;
