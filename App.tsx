import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import ToDoAppNew from './src/ToDoApp';
import rootReducer from './src/store';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReducerFactory from './src/reducers/ReducerFactory';
import store from './src/store';



const App = () => {
    return (
      <Provider store={store}>
        <ToDoAppNew/>
      </Provider>
    );
};

export default App;