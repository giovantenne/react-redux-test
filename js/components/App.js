import React from 'react';
import TodoList from './TodoList';

const App = () => (
  <TodoList data={data} />
)


var data = [
  {id: 1, text: "ciccio", completed: false},
  {id: 2, text: "bello", completed: false}
];

export default App;
