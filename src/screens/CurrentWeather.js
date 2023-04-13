import React from 'react';
import { 
  Text, 
  SafeAreaView, 
  StyleSheet,
  View
} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import RowText from '../components/RowText';


const CurrentWeather = () => {
  const { 
    bodyWrapper, 
    container, 
    description, 
    feels, 
    highLow, 
    highLowWrapper, 
    message, 
    temp, 
    wrapper 
  } = styles
  
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="cloud-rain" size={100} color="black" />
        <Text style={temp}>Temp: 10</Text>
        <Text style={feels}>Feels Like: 7</Text>
        <RowText 
          containerStyles={highLowWrapper}
          messageOne={"High: 12"}
          messageOneStyles={highLow}
          messageTwo={"Low:5"}
          messageTwoStyles={highLow} 
        />
      </View>
      <RowText 
        containerStyles={bodyWrapper}
        messageOne={"It's rainy"}
        messageOneStyles={description}
        messageTwo={"Carry an Umbrella & wear a rain jacket"}
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

  temp: {
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