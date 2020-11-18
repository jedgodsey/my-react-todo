import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const Todos = (props) => {
  let todos = props.todos.map((item, index) => {
    return (
      <>
        <TodoItem 
          key={item._id} 
          todo={item} 
          deleteTodo={props.deleteTodo}
          updateTodo={props.updateTodo}
        />
      </>
    )
  })

  return (
    <ul>
      {todos}
    </ul>
  )
}

export default Todos;
