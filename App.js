import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/useGetWeather';

const App = () => {
  const { isLoading, errorMsg, weather } = useGetWeather()
  console.log({isLoading}, {errorMsg}, {weather})

  return (
    !weather && !weather.list ? 
    <View style={styles.container}>
      <ActivityIndicator 
        size={'large'}
        color={'#00ff00'}
      />
    </View> :
    <NavigationContainer>
      <Tabs weather={weather}/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App;