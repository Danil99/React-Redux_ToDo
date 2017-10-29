import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  onState(filter) {
    switch (filter) {
      case 'ALL':
        return 'All tasks';

      case 'UNCOMPLETED':
        return 'Todo';

      default:
        return 'Done';
    }
  }

  render() {
    return (
      <header>
        <div onClick={this.props.onMenuActive}
        className={this.props.menuActive ? "menu active" : "menu"}></div>
        <div className="title">
          <h1>My Todo List - {this.onState(this.props.filter)}</h1>
        </div>
      </header>
    )
  }
}

export default Header;
