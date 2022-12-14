import React, { Component } from "react";
import Overview from './Components/Overview';
import uniqid from "uniqid";

class App extends Component {

  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid()
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    console.log(e)
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      }
    })
  
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid()
      },
    });
  };

  render() {
    
    //const { task, tasks } = this.state;

    return (
      <div>
        <Overview tasks={this.state.tasks}/>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={this.state.task.text}
            type="text"
            id="taskInput"></input>

          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
