import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import '../css/style.css';


export default class Hello extends Component {
  static propTypes = {
    name: PropTypes.string,
  }
  static defaultProps = {
    name: 'Stranger',
  }
  static state = {};

  render() {
    return (
      <div> Hello, { this.props.name }! </div>
    );
  }
}

render(<Hello name="world" />, document.getElementById('app'));
