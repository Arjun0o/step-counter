import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {
  steps: number;
};

const Steps: React.FC<Props> = ({steps}) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}>
        <Text style={styles.title}>Goal : 5000 Steps</Text>
        <Text style={styles.title}>Your Steps</Text>
        <View style={styles.circle}>
          <Text style={styles.steps}>{steps}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'bold',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    borderColor: 'red',
    borderWidth: 3,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  steps: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Steps;
