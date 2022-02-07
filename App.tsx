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

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={StepsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Prize" component={Prize} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
