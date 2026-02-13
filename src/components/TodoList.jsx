import React, { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    {addTodo}
  }

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  
    let todoText = input.trim();
  const addTodo = () => {

    if (todoText === "") return;

    setTodos([todoText, ...todos]);
    setInput("");
  }

  const deleteTodo = (index) =>{
    setTodos(todos.filter((todo, i) => i !== index))
  }

  return (
    <div className='container'>
        <h1>TodoList app</h1>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={todoText}
            onChange={handleInput}
            className='input-group' 
            placeholder='Add text...' />
            <button type='submit' onClick={addTodo}>Add</button>
        </form>
        <ul>
          {todos.map((todo,index) => (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)}>Del</button>
              </li>
          ))}
        </ul>
    </div>
  )
}

export default TodoList