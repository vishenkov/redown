import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/style.scss';

export default class Hello extends React.Component {
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
      <div className={styles.container}>
        <div> Hello, { this.props.name }! </div>
        <button onClick={this.btnHandler}>Click me! { this.state.count }</button>
      </div>
    );
  }
}
