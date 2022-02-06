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
        <View>
          <Text style={styles.title}>Your Steps</Text>
        </View>
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
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Steps;
