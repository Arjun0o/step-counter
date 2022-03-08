import React, {useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {fetchWeatherInfo} from '../store/weatherSlice';

const Weather = () => {
  const {info, status} = useSelector(state => state.weather.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherInfo());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {status === 'loading' ? (
        <Icon
          name="loading1"
          size={55}
          style={{marginTop: 30, marginBottom: 30}}
          color={'#ff0000'}
        />
      ) : (
        <View>
          <View>
            <Text style={styles.text}>Today's Weather</Text>
            <Text style={styles.cityText}>Delhi</Text>
            <Icon
              name="cloud"
              style={styles.icon}
              size={82}
              color={'#ff0000'}
            />
          </View>

          <View style={styles.weatherContainer}>
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
          </View>
        </View>
      )}

      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
    marginTop: 15,
    padding: 5,
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: '500',
  },
  cityText: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
  },
  weatherContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  weatherInfo: {
    color: 'red',
  },
  icon: {
    textAlign: 'center',
    marginTop: 10,
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
