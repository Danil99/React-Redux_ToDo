import { connect } from 'react-redux';

import App from '../components/App';
import { handleMenuActive, changePop, toAddTask } from '../action';

function mapStateToProps(state) {
  return {
    changePop: state.changePop,
    bgColors: state.bgColors,
    menuActive: state.menuActive
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMenuActive: () => dispatch(handleMenuActive()),
    togglePop: () => dispatch(changePop()),
    addTask: (title, color) => dispatch(toAddTask(title, color))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
