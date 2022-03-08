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
        <View style={styles.stepContainer}>
          <Steps steps={steps} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>HOME</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    padding: 20,
    justifyContent: 'flex-start',
  },
  stepContainer: {
    marginTop: 70,
  },
  title: {
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

export default StepsScreen;
