/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoList extends Component {
    static propTypes = {
      currentItem: PropTypes.object.isRequired,
      //   inputElement: PropTypes.object.isRequired,
      addItem: PropTypes.func.isRequired,
      handleInput: PropTypes.func.isRequired,
    }

    // componentDidUpdate() {
    //   this.props.inputElement.current.focus();
    // }

    render() {
      return (
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.props.addItem}>
              <input
                placeholder="Task"
                // ref={this.props.inputElement}
                value={this.props.currentItem.text}
                onChange={this.props.handleInput}
              />
              <button type="submit"> Add Task </button>
            </form>
          </div>
        </div>
      );
    }
}
