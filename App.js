import React, {useEffect} from 'react';

import {ApolloProvider} from '@apollo/client';
import {LogBox} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TabsContainer from 'features/tabs/TabsContainer';
import TournamentProvider from './src/features/tournament/TournamentProvider';
import {apolloClient} from 'client/apollo';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({duration: 250});
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs(['ReactNativeFiberHostComponent: Calling']);
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MenuProvider>
            <TournamentProvider slug="dogwood">
              <TabsContainer />
            </TournamentProvider>
          </MenuProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default App;

// temporary for RN #3965
//import { YellowBox } from 'react-native';
//YellowBox.ignoreWarnings([
//  'Warning: isMounted(...) is deprecated',
//  'Module RCTImageLoader requires main queue'
//]);
