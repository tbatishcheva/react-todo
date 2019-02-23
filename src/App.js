/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems';

class App extends Component {
  inputElement= React.createRef();

  constructor() {
    super();

    this.state = {
      items: [],
      currentItem: { text: '', key: '' },
    };
  }

  handleInput = (e) => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({ currentItem });
    // console.log('Hello input');
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      // console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items,
        currentItem: { text: '', key: '' },
      });
    }
    // console.log('Hello Add Item');
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems
          entries={this.state.items}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}
export default App;
