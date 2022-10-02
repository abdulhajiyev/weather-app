import { API_KEY } from '@env';
import axios from 'axios';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Loading from './components/Loading';
import Weather from './components/Weather';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [condition, setCondition] = useState(null);
  const [temp, setTemp] = useState(null);

  getWeather = async (latitude, longitude) => {
    const req_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const data1 = await axios.get(req_url);
    const { data: { main: { temp }, weather } } = await axios.get(req_url);
    // console.log(data1.data)
    // const condition = "Clouds";
    setTemp(temp);
    setCondition(weather[0].main);
    setIsLoading(false);
    // console.log(data.main.temp);
  }

  useEffect(() => {
    (async () => {
      try {
        await Location.requestForegroundPermissionsAsync();
        const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
        // console.log(latitude, longitude);
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
      <StatusBar style='dark' />
      {isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />}
    </>
  );
}