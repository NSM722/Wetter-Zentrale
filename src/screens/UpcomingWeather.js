import React from 'react';
import { 
  FlatList,
  ImageBackground,
  SafeAreaView, 
  StatusBar,
  StyleSheet, 
  Text
} from 'react-native';
import ListItem from '../components/ListItem';

// data
const DATA = [
  {
    "dt_txt": "2022-08-30 16:00:00",
    "main": {
      "temp_min": 7.34,
      "temp_max": 7.24,
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
  },
  {
    "dt_txt": "2022-08-30 17:00:00",
    "main": {
      "temp_min": 7.2,
      "temp_max": 7.31,
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ]
  },
  {
    "dt_txt": "2022-08-30 18:00:00",
    "main": {
      "temp_min": 7.84,
      "temp_max": 7.94,
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
  }
]

const UpcomingWeather = () => {
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
        <Text>Upcoming Weather: </Text>
        <FlatList 
        data={DATA}
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