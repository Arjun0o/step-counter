import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  navigation: any;
};

const Home = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Hi, welcome to StepTracker!</Text>
      </View>
      <Icon name="walk" style={styles.icon} size={92} color={'#ff0000'} />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Steps')}>
          <Text style={styles.buttonText}>Check your steps!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Weather')}>
          <Text style={styles.buttonText}>Check weather!</Text>
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
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
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
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  icon: {
    textAlign: 'center',
  },
});

export default Home;
