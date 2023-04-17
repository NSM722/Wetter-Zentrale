import React from 'react';
import { 
  FlatList,
  ImageBackground,
  SafeAreaView, 
  StatusBar,
  StyleSheet, 
} from 'react-native';
import ListItem from '../components/ListItem';

const UpcomingWeather = ({ weatherData }) => {
  const renderListItem = ({ item }) => (
    <ListItem 
      dt_txt={item.dt_txt}
      temp_min={item.main.temp_min}
      temp_max={item.main.temp_max}
      weather_condition={item.weather[0].description}
    />
  )

  // destructuring the styles object
  const { container, image } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={image}
        source={require('../../assets/upcoming_BG.jpg')} 
      >
        <FlatList 
        data={weatherData}
        renderItem={renderListItem}
        keyExtractor={( item ) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#d2691e'
  },

  image: {
    flex: 1,
  }
})

export default UpcomingWeather;