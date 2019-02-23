/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItems extends Component {
    static propTypes = {
      // eslint-disable-next-line react/forbid-prop-types
      entries: PropTypes.array.isRequired,
      deleteItem: PropTypes.func.isRequired,
    }

    static createTasks = item => (
      <li
        key={item.key}
      >
        {item.text}
      </li>
    )

    render() {
      const todoEntries = this.props.entries;
      const listItems = todoEntries.map(TodoItems.createTasks);
      return (
        <ul className="theList">{listItems}</ul>
      );
    }
}
