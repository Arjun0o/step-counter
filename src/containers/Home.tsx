import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Weather from './Weather';

type Props = {
  navigation: any;
};

const Home = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Your Day</Text>
      </View>
      <Icon name="walk" style={styles.icon} size={70} color={'#ff0000'} />
      <View style={styles.weatherContainer}>
        <Weather />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Steps')}>
          <Text style={styles.buttonText}>STEPS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Prize')}>
          <Text style={styles.buttonText}>REWARDS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  weatherContainer: {
    marginTop: 30,
  },
  text: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    marginTop: 50,
  },
  button: {
    width: '50%',
    borderColor: 'red',
    borderWidth: 2,
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  icon: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Home;
