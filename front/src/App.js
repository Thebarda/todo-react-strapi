import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import './App.css';
import TodoListContainer from './components/TodoListContainer';

const logger = createLogger({
  collapsed: true,
  duration: true
});

const middlewares = [thunk, logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

const App = () => {
  return (
    <Provider store={store}>
      <TodoListContainer />
  </Provider>
  );
}

export default App;
