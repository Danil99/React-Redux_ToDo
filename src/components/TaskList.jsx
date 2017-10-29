import React from 'react';

import Checkbox from './Checkbox';

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editPop: false,
      title: '',
      color: '',
      id: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let title = this.refs.title.value;
    this.props.editTask(this.state.id, title, this.state.color);
    this.setState({title: '', color: '', editPop: false});
    this.props.togglePop();
  }

  componentDidUpdate() {
    if(Boolean(this.refs.title)) {
      this.refs.title.select();
    }
  }

  editForm() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="edit-wind">
        <label>
          <input ref="title" defaultValue={this.state.title} type="text" />
          <span>EditTask</span>
        </label>
        <div className="color-circle">
          {
            this.props.bgColors.map((color, i) => {
              return <span onClick={() => this.setState({color})} key={i} style={{backgroundColor: color}}></span>
            })
          }
        </div>
        <div className="button">

          <input onClick={() => {
            this.setState({editPop: false, color: ''});
            this.props.togglePop();
          }} type="button" value="Cancel" />

          <input type="submit" value="Edit task" />
        </div>
      </form>
    )
  }

  render() {
    return (
      <div className="task-list">
        {
          this.props.state.tasks.map((task, i) => {
            return (
              <div style={{backgroundColor: task.bgColor}} className="task" key={i}>
                <div onClick={() => this.props.toggleCompleted(task.id)}>
                  <Checkbox completed={task.completed} />
                  <span className={task.completed ? "active" : ""}>{task.title}</span>
                </div>
                <div onClick={() => this.props.deleteTask(task.id)} className="item-close">
                  <i className="fa fa-times" aria-hidden="true"></i>
                </div>

                <div onClick={() => {
                  this.setState({editPop: true, title: task.title, id: task.id});
                  this.props.togglePop();
                }} className="item-edit">

                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </div>
              </div>
            )
          })
        }

        {
          this.state.editPop ? this.editForm() : false
        }

      </div>
    )
  }
}

export default TaskList;
