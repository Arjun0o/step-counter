import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Card from '../components/Card';

type Props = {
  navigation: any;
};

const Prize = ({navigation}: Props) => {
  const steps = useSelector(state => state.step.value);
  return (
    <View style={styles.container}>
      <Card steps={steps} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Steps')}>
        <Text style={styles.buttonText}>Go back!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
    display: 'flex',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  button: {
    width: '40%',
    borderColor: 'red',
    borderWidth: 2,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
});

export default Prize;
