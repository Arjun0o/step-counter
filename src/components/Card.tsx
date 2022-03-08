import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

type Props = {
  steps: number;
};

const Card = ({steps}: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>You have completed {steps} steps</Text>
      {steps > 0 ? (
        <Text style={styles.text}>You have won 200 points!</Text>
      ) : (
        <Text style={styles.text}>
          You will have to start walking to win exciting prizes!
        </Text>
      )}
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
