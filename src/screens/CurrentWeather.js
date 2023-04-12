import React from 'react';
import { 
  Text, 
  SafeAreaView, 
  StyleSheet,
  View
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Ionicons name="rainy-sharp" size={100} color="black" />
        <Text style={styles.description}>It's rainy</Text>
        <Text style={styles.temp}>Temp: 10</Text>
        <Text style={styles.feels}>Feels Like: 7</Text>
        <View style={styles.highLowWrapper}>
         <Text style={styles.highLow}>High: 12</Text>
         <Text style={styles.highLow}>Low:5 </Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.message}>Carry an Umbrella & wear a rain jacket</Text>
      </View>
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