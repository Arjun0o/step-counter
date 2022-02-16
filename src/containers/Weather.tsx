import React, {useEffect} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {fetchWeatherInfo} from '../store/weatherSlice';

type Props = {
  navigation: any;
};

const Weather = ({navigation}: Props) => {
  const {info, status} = useSelector(state => state.weather.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherInfo());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Today's Weather</Text>
        <Text style={styles.cityText}>Delhi</Text>
        <Icon name="cloud" style={styles.icon} size={82} color={'#ff0000'} />
      </View>

      <View style={styles.weatherContainer}>
        {status === 'loading' ? (
          <Icon name="loading1" size={62} color={'#ff0000'} />
        ) : (
          <View>
            <Text style={styles.text}>
              Feels Like :{' '}
              <Text style={styles.weatherInfo}>{info?.feels_like} hPa </Text>
            </Text>
            <Text style={styles.text}>
              Humidity :{' '}
              <Text style={styles.weatherInfo}>{info?.humidity} % </Text>
            </Text>
            <Text style={styles.text}>
              Temperature :{' '}
              <Text style={styles.weatherInfo}>{info?.temp} </Text>
            </Text>
            <Text style={styles.text}>
              Max Temperature :{' '}
              <Text style={styles.weatherInfo}>{info?.temp_max} </Text>
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 20,
  },
  cityText: {
    color: 'red',
    fontSize: 23,
    textAlign: 'center',
    marginTop: 10,
  },
  weatherContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 50,
  },
  weatherInfo: {
    color: 'red',
  },
  icon: {
    textAlign: 'center',
    marginTop: 20,
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
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
});
