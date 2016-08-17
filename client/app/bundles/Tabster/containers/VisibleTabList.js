import { connect } from 'react-redux';
import { showTab } from '../actions';
import TabList from '../components/TabList';

const mapStateToProps = (state) => {
  return {
    tabs: state.tabs
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTabClick: (id) => {
      dispatch(showTab(id))
    }
  };
};

const VisibleTabList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabList);

export default VisibleTabList;
