import { connect } from 'react-redux';

import Header from '../components/Header';
import { handleMenuActive } from '../action';

function mapStateToProps(state) {
  return {
    menuActive: state.menuActivem,
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMenuActive: () => dispatch(handleMenuActive())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
