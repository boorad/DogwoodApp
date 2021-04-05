import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';



const StackNav = props => {

  const { screen, title } = props;
  const stackName = `${title}Stack`;
console.log('screen', screen);
  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName={stackName}
        screenOptions={{
          title: title,
          headerMode: 'none',
          headerShown: false,
          headerStyle: {
            height: 0,
          },
        }}
      >
        <Stack.Screen name={stackName} component={screen} />
      </Stack.Navigator>
    </View>
  );

};

export default StackNav;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
