import React from "react";

interface Props {
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>
  handleAdd:(e: React.FormEvent) => void;
}

export default function InputField({todo, setTodo, handleAdd}:Props) {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input 
        value={todo} 
        onChange={
          (e) => setTodo(e.target.value)
        } 
        type="input" 
        placeholder="Enter a task" 
        className="input__box"
      />
      <button className="input__submit" type="submit" onSubmit={handleAdd}>
        Go
      </button>
    </form>
  )
}