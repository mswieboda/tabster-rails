import { connect } from 'react-redux';
import { showTab } from '../actions';
import Tab from '../components/Tab';

const mapStateToProps = ({ showTab }) => {
  return {
    title: showTab.title,
    tab: showTab.tab
  }
};

const TabShow = connect(mapStateToProps)(Tab);

export default TabShow;
