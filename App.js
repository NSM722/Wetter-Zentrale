import React from 'react';
import { StyleSheet, View  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import City from './src/screens/City';
import CurrentWeather from './src/screens/CurrentWeather';
import UpcomingWeather from './src/screens/UpcomingWeather';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <CurrentWeather /> */}
        {/* <UpcomingWeather /> */}
        <City />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;