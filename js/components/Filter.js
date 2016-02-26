import React, {Component} from 'react';

export default class Filter extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {filtered: false}
  }
  handleClick(){
    let filtered= this.state.filtered
    this.props.onFilterClick(!filtered)
    this.setState({filtered: !filtered});
  }
  render(){
    return(
      <a href="#" onClick={this.handleClick}>
        {this.state.filtered ? 'tutti' : 'da fare'}
      </a>
    )
  }
}

