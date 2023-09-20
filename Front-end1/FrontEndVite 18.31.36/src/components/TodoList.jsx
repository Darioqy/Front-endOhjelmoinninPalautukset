import React, { useState } from 'react';
import './Todolist.css'

function TodoList() {
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setDesc(event.target.value);
  }

  const dateChanged = (event) => {
    setDate(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = { description: desc, date: date };
    setTodos([...todos, newTodo]);
    setDesc('');
    setDate('');
  }

  return (
    <>
    <div className='todo-Container'>
      <h2>Add to Do:</h2>
      <input type="text" onChange={inputChanged} value={desc} placeholder="Description" />
      <input type="date" onChange={dateChanged} value={date} />
      <button onClick={addTodo}>Add</button>
      </div>
      <table className='todo-List'>
        <tbody>
          <td className='descBox'>Description</td>
          <td className='dateBox'>Date</td>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoList;