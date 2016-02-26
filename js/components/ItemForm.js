import React, {Component} from 'react';

export default class ItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = { text: ""}
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleTextChange(e){
    this.setState({text: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    var text = this.state.text.trim();
    if (!text) {
      return;
    }
    this.props.onTextSubmit(text);
    this.setState({text: ""});
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="add item here" value={this.state.text} onChange={this.handleTextChange}/>
        <input type="submit" />
      </form>
    )
  }
}

