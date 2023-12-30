import React from 'react'
import './todo.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({task:{id, description, done},handeldelete, handledone}) {
  return (
    <div className='row'>
        <div className='col-md-8'><span className={done ? 'done' : 'unDone'}>{description}</span>

        </div>
        <div className='col-md-1 justify-content-center'>
            <img
                style={{ width: 25 }}
                src={require('../assets/iconfinder_new-24_103173.png')}
                alt='edit'
                onClick={() =>handeldelete(id)}
            />
        </div>
        <div className='col-md-1 justify-content-center'>
            <img
                style={{ width: 25 }}
                src={require('../assets/done.png')}
                alt='done'
                onClick={() => handledone(id)}
            />
        </div>
    </div>
)
}

export default Todo