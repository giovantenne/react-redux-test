import React, {Component} from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.onItemClick(this.props.index);
  }
  render(){
    if (this.props.completed && this.props.filtered){
      return (
      <div></div>    
      )
    }else{
      return(
        <li
          onClick={this.handleClick}
          style={{
            textDecoration: this.props.completed ? 'line-through' : 'none'
          }}
        >
        {this.props.text}
        </li>
      )
    }
  }
}

