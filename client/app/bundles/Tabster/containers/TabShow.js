import { connect } from 'react-redux';
import { showTab } from '../actions';
import Tab from '../components/Tab';

const mapStateToProps = ({ showTab }, { match }) => {
  return {
    title: showTab.title,
    tab: showTab.tab
  }
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    ...stateProps,
    match: ownProps.match
  })
};

const TabShow = connect(mapStateToProps, null, mergeProps)(Tab);

export default TabShow;
