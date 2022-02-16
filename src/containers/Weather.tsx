import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';

type WeatherProps = {
  feels_like?: number;
  humidity?: number;
  temp?: number;
  temp_max?: number;
};

type Props = {
  navigation: any;
};

const Weather = ({navigation}: Props) => {
  const [weatherInfo, setWeatherInfo] = useState<WeatherProps>({});
  const [loading, setLoading] = useState(false);

  const fetchWeatherInfo = async () => {
    try {
      setLoading(true);
      const {data} = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=fbbc5458489286efe446af162e2def9e',
      );
      setWeatherInfo(data?.main);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchWeatherInfo();
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Today's Weather</Text>
        <Text style={styles.cityText}>Delhi</Text>
        <Icon name="cloud" style={styles.icon} size={82} color={'#ff0000'} />
      </View>

      {loading ? (
        <Icon name="loading1" size={62} color={'#ff0000'} />
      ) : (
        <View style={styles.weatherContainer}>
          <Text style={styles.text}>
            Feels Like :{' '}
            <Text style={styles.weatherInfo}>
              {weatherInfo?.feels_like} hPa{' '}
            </Text>
          </Text>
          <Text style={styles.text}>
            Humidity :{' '}
            <Text style={styles.weatherInfo}>{weatherInfo?.humidity} % </Text>
          </Text>
          <Text style={styles.text}>
            Temperature :{' '}
            <Text style={styles.weatherInfo}>{weatherInfo?.temp} </Text>
          </Text>
          <Text style={styles.text}>
            Max Temperature :{' '}
            <Text style={styles.weatherInfo}>{weatherInfo?.temp_max} </Text>
          </Text>
        </View>
      )}
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
