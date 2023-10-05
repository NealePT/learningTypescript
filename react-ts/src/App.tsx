import './App.css';
import './components/styles.css'
import InputField from './components/InputField';


const App: React.FC = () => {

  return (
  <div className="App">
    <span className="heading">Taskify</span>
    <InputField />
  </div>
  );
}

export default App;
