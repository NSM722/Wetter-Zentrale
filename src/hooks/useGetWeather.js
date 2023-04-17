import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { API_KEY } from '@env';

export const useGetWeather = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [weather, setWeather] = useState([])
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
      const data = await response.json()
      console.log(data)
      setWeather(data)
    } catch (err) {
      setErrorMsg(`Could not get weather details`)
    } finally {
      setIsLoading(false)
    }
  }
  
  useEffect(() => {
    (async () => {
      let { status }  = await Location.requestForegroundPermissionsAsync()
      if(status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [latitude, longitude])
  return { isLoading, errorMsg, weather }
}