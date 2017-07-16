import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.className}
        style={this.props.style}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}
