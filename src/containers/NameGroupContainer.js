import { connect } from 'react-redux';

import { handleMenuActive, handleFilter } from '../action';
import NameGroup from '../components/NameGroup';

function mapStateToProps(state) {
  return {
    filter: state.filter,
    menuActive: state.menuActive
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMenuActive: () => dispatch(handleMenuActive()),
    onFilter: filter => dispatch(handleFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameGroup);
