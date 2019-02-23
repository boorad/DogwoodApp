import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';
import SplashScreen from 'react-native-splash-screen';

import configureStore from 'app/store/configureStore';
import TabsContainer from 'features/tabs/TabsContainer';

const store = configureStore();

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <MenuProvider>
          <TabsContainer />
        </MenuProvider>
      </Provider>
    );
  }
};


// temporary for RN #3965
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader requires main queue'
]);
