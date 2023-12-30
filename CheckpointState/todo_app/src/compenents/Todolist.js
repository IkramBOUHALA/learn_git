import React from 'react'
import Todo from './Todo'

function Todolist({todos, handeldelete, handledone}) {
  return (
    <div>
        {todos.map((task,key)=>(
        <Todo 
        task={task}
        key={key}
        handeldelete={handeldelete}
        handledone={handledone}
        />))}
        </div>
  )
}

export default Todolist