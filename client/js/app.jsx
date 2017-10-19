import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import '../css/style.css';

class Hello extends Component {
  static propTypes = {
    name: PropTypes.string,
  }

  static defaultProps = {
    name: 'Stranger',
  }

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  btnHandler = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <div> Hello, { this.props.name }! </div>
        <button onClick={this.btnHandler}>Click me! { this.state.count }</button>
      </div>
    );
  }
}

render(<Hello name="world" />, document.getElementById('app'));
