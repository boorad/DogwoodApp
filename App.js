import React, { useEffect, } from 'react';
import { LogBox, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';
import RNBootSplash from "react-native-bootsplash";

import TabsContainer from 'features/tabs/TabsContainer';



const App = () => {

  useEffect(
    () => {
      RNBootSplash.hide({ duration: 250 });
    }, []
  );

  useEffect(
    () => {
      LogBox.ignoreLogs([
        'ReactNativeFiberHostComponent: Calling',
      ]);
    }, []
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MenuProvider>
          <TabsContainer />
        </MenuProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );

};

export default App;


// temporary for RN #3965
//import { YellowBox } from 'react-native';
//YellowBox.ignoreWarnings([
//  'Warning: isMounted(...) is deprecated',
//  'Module RCTImageLoader requires main queue'
//]);
