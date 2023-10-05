import React from "react";

interface Props {
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>
}

export default function InputField({todo, setTodo}:Props) {
  return (
    <form className="input">
      <input 
        value={todo} 
        onChange={
          (e) => setTodo(e.target.value)
        } 
        type="input" 
        placeholder="Enter a task" 
        className="input__box"
      />
      <button className="input__submit" type="submit">Go</button>
    </form>
  )
}