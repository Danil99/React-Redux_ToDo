import React from 'react';

class NameGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  nameGroupElem(filt, icon, text) {
    return (
      <div className={this.props.filter == filt ? "item active" : "item"} onClick={() => {
        this.props.onFilter(filt);
        this.props.onMenuActive();
      }}>
        <div className="icon">
          <i className={`fa fa-${icon}`} aria-hidden="true"></i>
        </div>
        <span>{text}</span>
      </div>
    )
  }

  render() {
    return (
      <div className={this.props.menuActive ? "name-group active" : "name-group"}>
        {
          this.nameGroupElem("ALL", "list", "All tasks")
        }
        {
          this.nameGroupElem("UNCOMPLETED", "clipboard", "Todo")
        }
        {
          this.nameGroupElem("COMPLETED", "check", "Done")
        }
      </div>
    )
  }
}

export default NameGroup;
