import React from 'react';
import Remarkable from 'remarkable';
import 'github-markdown-css';
import style from '../css/MarkdownEditor.scss';

export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Type some *markdown* here!' };
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <article
          className={style['markdown-body']}
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}
