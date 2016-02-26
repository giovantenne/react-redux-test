import React, {Component} from 'react';

export default class Filter extends Component {
  render(){
    return(
      <a href="#" onClick={this.props.onClick}>
        {this.props.filtered ? 'tutti' : 'da fare'}
      </a>
    )
  }
}

