import React, {Component} from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import Todo from './Todo';


export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [], filtered: false}
    this.handleTextSubmit = this.handleTextSubmit.bind(this)
    this.handleFilterClick = this.handleFilterClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }
  componentDidMount(){
    this.setState({data: this.props.data});
  }
  handleTextSubmit(text){
    var items=this.state.data;
    text.id=Date.now();
    var newItems= items.concat([text])
    this.setState({data: newItems});
  }
  handleFilterClick(filtered){
    this.setState({filtered: filtered})
  }
  handleItemClick(index){
    var items=this.state.data;
    items[index].completed=!items[index].completed
    this.setState({data: items})
  }
  render() {
    return (
      <div>
        <Filter onFilterClick={this.handleFilterClick}/>
        <ul>
        {
          this.state.data.map(function(todo, i) {
            return <Todo index={i} key={todo.id} text={todo.text} completed={todo.completed} filtered={this.state.filtered} onItemClick={this.handleItemClick}/>
          }.bind(this))
        }
        </ul>
        <ItemForm onTextSubmit={this.handleTextSubmit}/>
      </div>
    );
  }
}

