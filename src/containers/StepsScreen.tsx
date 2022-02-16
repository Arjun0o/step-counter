import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import RNShake from 'react-native-shake';
import Steps from '../components/Steps';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from '../store/stepSlice';

type Props = {
  navigation: any;
};

const StepsScreen = ({navigation}: Props) => {
  const steps = useSelector(state => state.step.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (steps === 5) {
      navigation.navigate('Prize');
    }
    const subscription = RNShake.addListener(() => {
      dispatch(increment());
    });
    return () => {
      subscription.remove();
    };
  }, [dispatch, steps, navigation]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Step Counter</Text>
        <Steps steps={steps} />
        {steps >= 5 && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Prize')}>
            <Text style={styles.buttonText}>Go to Prizes!</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
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

export default StepsScreen;
