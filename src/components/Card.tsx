import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

type Props = {
  steps: number;
};

const Card = ({steps}: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Yay! You have completed {steps} steps</Text>
      <Text style={styles.text}>You have won 200 points!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 10,
    elevation: 5,
  },
});

export default Card;
