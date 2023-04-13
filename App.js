import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import City from './src/screens/City';
import CurrentWeather from './src/screens/CurrentWeather';
import UpcomingWeather from './src/screens/UpcomingWeather';

// initializing the Tab component/object
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'magenta',
          tabBarInactiveTintColor: 'gray'
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
    </NavigationContainer>
  )
}

export default App;