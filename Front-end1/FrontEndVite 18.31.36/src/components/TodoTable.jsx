import React from 'react';

function TodoTable({ todos }) {
  return (
    <table className='todo-List'>
      <thead>
        <tr>
          <th className='descBox'>Description</th>
          <th className='dateBox'>Date</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={index}>
            <td>{todo.description}</td>
            <td>{todo.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;