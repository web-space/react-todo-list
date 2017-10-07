import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function TodoItem({ id, title }) {
  return <div className="todo__item">{id + ': ' + title}</div>;
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
