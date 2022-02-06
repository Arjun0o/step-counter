/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect, useCallback} from 'react';
import Steps from './src/components/Steps';
import {StyleSheet, View, Text} from 'react-native';
import RNShake from 'react-native-shake';

const App = () => {
  const [steps, setSteps] = useState(0);

  const handleShake = useCallback(() => {
    setSteps(steps + 1);
  }, [steps]);

  useEffect(() => {
    console.log('hiiiiiiiiii');
    const subscription = RNShake.addListener(() => {
      handleShake();
    });
    return () => {
      subscription.remove();
    };
  }, [handleShake]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step Counter</Text>
      <Steps steps={steps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 27,
    marginTop: 10,
    fontWeight: 'bold',
    flex: 0.5,
  },
});

export default App;
