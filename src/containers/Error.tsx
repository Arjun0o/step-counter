import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ErrorScreen = () => {
  return (
    <View style={styles.centeredView}>
      <Text style={styles.textStyle}>Oh no! You seem to be offline!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
