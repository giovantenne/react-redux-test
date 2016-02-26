import React, {Component} from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import Todo from './Todo';
import {connect} from 'react-redux'


class TodoList extends Component {
  constructor(props) {
    super(props)
    // this.state = { data: [], filtered: false}
    this.handleTextSubmit = this.handleTextSubmit.bind(this)
    this.handleFilterClick = this.handleFilterClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }
  handleTextSubmit(text){
    this.props.dispatch({ type: "ADD_TODO", payload: { text } });
  }
  handleFilterClick(filtered){
    this.props.dispatch({ type: "TOGGLE_FILTER" });
  }
  handleItemClick(index){
    this.props.dispatch({ type: "TOGGLE_TODO", payload: { index } });
  }
  render() {
    return (
      <div>
        <Filter filtered={this.props.showAll} onClick={this.handleFilterClick}/>
        <ul>
        {
          this.props.todos.map(function(todo, i) {
            return <Todo key={todo.id} text={todo.text} completed={todo.completed} onItemClick={this.handleItemClick.bind(this, i)}/>
          }.bind(this))
        }
        </ul>
        <ItemForm onTextSubmit={this.handleTextSubmit}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos.filter((todo) => {
      return state.showAll ? true : !todo.completed;
    }),
    showAll: state.showAll
  };
}

export default connect(mapStateToProps)(TodoList)
