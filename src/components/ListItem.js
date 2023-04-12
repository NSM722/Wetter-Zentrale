import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Data component to be rendered
const ListItem = (props) => {
  const { dt_txt, temp_min, temp_max, weather_condition } = props

  // destructuring the styles object
  const { listItem, date, temp }  = styles

  return (
    <View style={listItem}>
      <Ionicons name={"thunderstorm"} size={50} color={"white"} />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{temp_min}</Text>
      <Text style={temp}>{temp_max}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  date: {
    color: '#fff',
    fontSize: 12,
  },

  listItem: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: '#dda0dd'
  },

  temp: {
    color: 'whitesmoke',
    fontSize: 16,
  },

})

export default ListItem;
