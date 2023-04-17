import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import City from '../screens/City';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';

// initializing the Tab component/object
const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        tabBarActiveTintColor: '#dc143c', 
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: {
          backgroundColor: '#20b2aa',
        },
        headerStyle: {
          backgroundColor: '#20b2aa', 
        },
        headerTitleStyle : {
          fontWeight: 'bold',
          fontSize: 25,
          color: '#fff0f5'
        }
        }} 
      >
      <Tab.Screen 
        name={'Current'} 
        options={{ 
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"today"} 
              size={25} 
              color={ focused ? '#dc143c' : '#000000' } 
            />
          )
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]}/>}
      </Tab.Screen>
      <Tab.Screen 
        name={'Upcoming'} 
        options={{ 
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name={"timer"} 
              size={25} 
              color={ focused ? '#dc143c' : '#000000' } 
            />
          ) 
        }} 
      >
        {() => <UpcomingWeather weatherData={weather.list}/>}
      </Tab.Screen>
      <Tab.Screen 
        name={'City'} 
        options={{ 
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"ios-location-sharp"} 
              size={25} 
              color={ focused ? '#dc143c' : '#000000' } 
            />
          ) 
        }} 
      >
        {() => <City weatherData={weather.city}/>}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs;