import { API_KEY } from '@env';
import axios from 'axios';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Loading from './components/Loading';
import Weather from './components/Weather';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(null);

  getWeather = async (latitude, longitude) => {
    const req_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const { data } = await axios.get(req_url);
    setTemp(data.main.temp);
    setIsLoading(false);
    // console.log(data.main.temp);
  }

  useEffect(() => {
    (async () => {
      try {
        await Location.requestForegroundPermissionsAsync();
        const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
        getWeather(latitude, longitude);
      }
      catch (error) {
        console.log(error);
        Alert.alert("Can't find your location.", "Please check your location settings.");
      }
    })();
  }, []);


  return (
    <>
      <StatusBar hidden={true} />
      {isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />}
    </>
  );
}