import React from 'react';


function TodoTable({ todos, deleteTodo }) {

  
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
            <td>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;