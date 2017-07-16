import React from 'react'
import PropTypes from 'prop-types';

export default class TabView extends React.Component {
  static propTypes = {
    tab: PropTypes.array,
  };

  constructor(props) {
    super(props);
  }

  tabToString(tab) {
    return tab.map(section => {
      return section.type === "tab" ? this.tabSectionToString(section) : section.value;
    }).join("\n");
  }

  tabSectionToString(section) {
    return section.value.map(row => row.join("")).join("\n");
  }

  render() {
    const { tab } = this.props;
    const tabText = this.tabToString(tab);

    return (
      <pre>
        {tabText}
      </pre>
    );
  }
};
