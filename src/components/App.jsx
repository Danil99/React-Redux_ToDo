import React from 'react';

import Header from '../containers/HeaderContainer';
import NameGroup from '../containers/NameGroupContainer';
import TaskList from '../containers/TaskListContainer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#f1f1f1",
      addPop: false
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let title = this.refs.title.value;
    if(title) {
      this.props.addTask(title, this.state.color);
      this.props.togglePop();
      this.refs.title.value = "";
    } else this.props.togglePop();
    this.setState({color: "#f1f1f1", addPop: false});
  }

  componentDidUpdate() {
    if(Boolean(this.refs.title)) {
      this.refs.title.select();
    }
  }

  addTask() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className={this.state.addPop ? "add-wind" : "add-wind hide"}>
        <label>
          <input ref="title" type="text" />
          <span>NewTask</span>
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
            this.props.togglePop();
            this.refs.title.value = "";
            this.setState({color: "#f1f1f1", addPop: false})
          }}
          type="button" value="Cancel" />
          <input type="submit" value="Add task" />
        </div>
      </form>
    )
  }

  render() {
    return (
      <main className={this.props.changePop ? "opacity" : ""}>
        <Header />

        <section>
          <NameGroup />

          <TaskList />

          <div onClick={() => {
            this.setState({addPop: true});
            this.props.togglePop();
            if(this.props.menuActive) this.props.onMenuActive();
            }} className="add-task">
            <span>+</span>
          </div>

          { this.addTask() }

        </section>
      </main>
    )
  }
}

export default App;
