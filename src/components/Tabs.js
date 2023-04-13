import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import City from '../screens/City';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';

// initializing the Tab component/object
const Tab = createBottomTabNavigator()

const Tabs = () => {
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
        component={CurrentWeather}
        options={{ 
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"today"} 
              size={25} 
              color={ focused ? '#dc143c' : '#000000' } 
            />
          )
        }}
      />
      <Tab.Screen 
        name={'Upcoming'} 
        component={UpcomingWeather}
        options={{ 
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name={"timer"} 
              size={25} 
              color={ focused ? '#dc143c' : '#000000' } 
            />
          ) 
        }} 
      />
      <Tab.Screen 
        name={'City'} 
        component={City}
        options={{ 
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"ios-location-sharp"} 
              size={25} 
              color={ focused ? '#dc143c' : '#000000' } 
            />
          ) 
        }} 
      />
    </Tab.Navigator>
  )
}

export default Tabs;