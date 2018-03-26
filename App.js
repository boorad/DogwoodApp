import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import configureStore from 'app/store/configureStore';
import TabsContainer from 'features/tabs/TabsContainer';


const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabsContainer />
      </Provider>
    );
  }
};
