import React from 'react';

function Checkbox(props) {
  return (
    <div className="item">
      <i className={props.completed ?
        "fa fa-check-square"
          :
            "fa fa-square-o"} aria-hidden="true"></i>
    </div>
  )
}

export default Checkbox;
