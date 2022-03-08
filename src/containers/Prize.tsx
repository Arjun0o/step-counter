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
      <View>
        <Text style={styles.text}>Rewards</Text>
      </View>
      <View style={styles.cardContainer}>
        <Card steps={steps} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>GO BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    padding: 20,
    justifyContent: 'flex-start',
  },

  cardContainer: {
    marginTop: 70,
  },

  text: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
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
    marginTop: 100,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
});

export default Prize;
