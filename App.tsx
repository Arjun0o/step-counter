/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import StepsScreen from './src/containers/StepsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Prize from './src/containers/Prize';
import store from './src/store/store';
import {Provider} from 'react-redux';
import Home from './src/containers/Home';
import Weather from './src/containers/Weather';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Steps"
            component={StepsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Weather"
            component={Weather}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Prize"
            component={Prize}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
