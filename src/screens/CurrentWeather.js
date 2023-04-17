import React from 'react';
import { 
  Text, 
  SafeAreaView, 
  StyleSheet,
  View
} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({ weatherData }) => {
  const { 
    bodyWrapper, 
    container, 
    description, 
    feels, 
    highLow, 
    highLowWrapper, 
    message, 
    tempStyles, 
    wrapper 
  } = styles

  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData

  const weatherCondition = weather[0].main

  return (
    <SafeAreaView style={[
      wrapper, 
      { backgroundColor:  weatherType[weatherCondition].backgroundColor}
      ]}>
      <View style={container}>
        <Feather 
          name={weatherType[weatherCondition].icon} 
          size={100} 
          color="#fff" 
        />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>Feels Like: {`Feels like ${feels_like}`}</Text>
        <RowText 
          containerStyles={highLowWrapper}
          messageOne={`High: ${temp_max}° `}
          messageOneStyles={highLow}
          messageTwo={`Low: ${temp_min}°`}
          messageTwoStyles={highLow} 
        />
      </View>
      <RowText 
        containerStyles={bodyWrapper}
        messageOne={weather[0].description}
        messageOneStyles={description}
        messageTwo={weatherType[weatherCondition].message}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },

  tempStyles: {
    color: 'black',
    fontSize: 42
  },

  feels: {
    fontSize: 30,
    color: 'black'
  },

  highLowWrapper: {
    flexDirection: 'row',
    gap: 10
  },

  highLow: {
    color: 'black',
    fontSize: 20
  },

  bodyWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },

  description: {
    fontSize: 22
  },

  message: {
    fontSize: 22
  }
})

export default CurrentWeather;