import React from 'react';
import ReactDom from 'react-dom';
import TodoList from 'components/TodoList';
import u from 'updeep'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

var initialState = {
  todos: [],
  showAll: true
}

function reducer(state = initialState, action){
  switch(action.type){
    case "ADD_TODO":
      const text=action.payload.text;
      return u({
        todos: (todos) => todos.concat({
          text: text, 
          completed: false,
          id: Date.now(),
        })
      },state);
        
    case "TOGGLE_TODO":
      // const index= action.payload.index;
      const {index}= action.payload;

      return u({
        todos: {
          [index]: { 
            completed: (completed) => !completed 
          }
        }
      }, state);

    case "TOGGLE_FILTER":
      return u({
        showAll: (showAll) => !showAll
      }, state);
    default: return state;
  }
  return state
}

const store = createStore(reducer, undefined, window.devToolsExtension ? window.devToolsExtension() : undefined);

const root = (
  <Provider store={store}>
    <TodoList/>
  </Provider>
);

ReactDom.render(root, document.getElementById('root'));




