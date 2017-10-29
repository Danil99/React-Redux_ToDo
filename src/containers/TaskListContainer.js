import { connect } from 'react-redux';

import TaskList from '../components/TaskList';
import { handleMenuActive, changeCompleted, onDeleteTask, onEditTask, changePop } from '../action';
import { onStateFilter } from '../reducer';

function mapStateToProps(state) {
  return {
    state: onStateFilter(state, state.filter),
    bgColors: state.bgColors,
    changePop: state.changePop
  }
}

function mapDispatchToProps(dispatch) {
  return {
    togglePop: () => dispatch(changePop()),
    toggleCompleted: i => dispatch(changeCompleted(i)),
    deleteTask: i => dispatch(onDeleteTask(i)),
    editTask: (id, title, color) => dispatch(onEditTask(id, title, color))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
