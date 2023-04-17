import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ErrorItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>Sorry, something went wrong</Text>
      <Ionicons name="sad-outline" size={100} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b22222',
    justifyContent: 'center',
    alignItems: 'center'
  },

  errorMessage: {
    fontSize: 30,
    color: '#fff',
    marginLeft: 10,
    textAlign: 'center'
  }
})

export default ErrorItem;