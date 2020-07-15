import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import ToDoApp from './src/ToDoApp';
import store from './src/store';

const App = () => {
    return (
      <Provider store={store}>
        <ToDoApp/>
      </Provider>
    );
};

export default App;