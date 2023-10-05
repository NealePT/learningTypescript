import './App.css';
import './components/styles.css'
import InputField from './components/InputField';
import { useState } from 'react';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")

  return (
  <div className="App">
    <span className="heading">Taskify</span>
    <InputField todo={todo} setTodo={setTodo}/>
  </div>
  );
}

export default App;
