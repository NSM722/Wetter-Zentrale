import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import { weatherType } from '../utilities/weatherType';

// Data component to be rendered
const ListItem = (props) => {
  const { dt_txt, temp_min, temp_max, weather_condition } = props

  // destructuring the styles object
  const { listItem, date, temp, dateTextWrapper }  = styles

  return (
    <View style={listItem}>
      <Ionicons name={weatherType[weather_condition].icon} size={50} color={"white"} />
      <View style={styles.dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(temp_min)}°/${Math.round(temp_max)}°`}</Text>
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

  dateTextWrapper: {
    flexDirection: 'column',
  }

})

export default ListItem;
