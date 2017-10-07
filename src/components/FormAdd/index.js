import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class FormAdd extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  onSubmit = e => {
    const value = this.state.value.trim();

    e.preventDefault();

    if (!value) {
      return;
    }

    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  onChange = ({ currentTarget }) => {
    this.setState({ value: currentTarget.value });
  };

  render() {
    return (
      <form className="todo-add" onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
          className="todo-add__text"
          placeholder="Новое дело"
        />

        <button type="submit" className="todo-add__btn">
          +
        </button>
      </form>
    );
  }
}
