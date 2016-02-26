import React, {Component} from 'react';

export default class Todo extends Component {
  render(){
    return(
      <li
        onClick={this.props.onItemClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}
      >
      {this.props.text}
      </li>
    )
  }
}

