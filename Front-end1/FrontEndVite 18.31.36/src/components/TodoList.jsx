import React, { useState } from 'react';
import './Todolist.css'
import TodoTable from './TodoTable';

function TodoList() {
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [prio, setPrio] = useState('');
  const [todos, setTodos] = useState([]);




  const inputChanged = (event) => {
    setDesc(event.target.value);
  }

  const dateChanged = (event) => {
    setDate(event.target.value);
  }

  const prioChanged = (event) => {
    setPrio(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = { description: desc, date: date, priority: prio };
    setTodos([...todos, newTodo]);
    setDesc('');
    setDate('');
    setPrio('');
  }

  const deleteTodo = (index) => {
    const updateTodos = todos.filter((todo, i) => i !== index);
    setTodos(updateTodos);

  }

  return (
    <>
      <div className='todo-Container'>
        <h2>Add to Do:</h2>
        <input type="text" onChange={inputChanged} value={desc} placeholder="Description" />
        <input type="date" onChange={dateChanged} value={date} />
        <input type="text" onChange={prioChanged} value={prio} placeholder="Priority" />
        <button onClick={addTodo}>Add</button>
      </div>
    
      
      
      
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default TodoList;