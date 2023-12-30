import React, { Component } from 'react'
import Todolist from './compenents/Todolist'
import AddTask from './compenents/Addtask'

export class App extends Component {
  state={tasks:[
    {id:1, description:'todo 1 ', done:false},
    {id:2, description:'todo 2 ', done:false},
    {id:3, description:'todo 3 ', done:false},
  ],
}
taskdelete=(id)=> {
  this.setState({
    tasks:this.state.tasks.filter(ele=>ele.id!==id)
  })
}
taskdone=(id)=>{
  this.setState({
    tasks:this.state.tasks.map(ele=>ele.id===id?{...ele,done:!ele.done}:ele)
  })
}
addTask = (task) => this.setState({ tasks: [...this.state.tasks, task] });
  render() {
    return (
      <div>
        <h1>Every task, I have to do today</h1>
        <div> <AddTask handleAdd={this.addTask}/> </div>
        <Todolist
        todos={this.state.tasks}
        handeldelete={this.taskdelete}
        handledone={this.taskdone}
        />
      </div>
    )
  }
}

export default App
