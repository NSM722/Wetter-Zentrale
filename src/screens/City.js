import React from 'react';
import { 
  ImageBackground, 
  Text, 
  SafeAreaView, 
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/HH.jpg')}
        style={styles.imageLayout}
      >
        { /*
         * merging styles using the spread syntax 
         * For example any common properties between [ CityTextStyle and cityName ]
         * will be overridden by the properties from cityName
         */}

        <Text style={[styles.CityTextStyle, styles.cityName]}>Hamburg</Text>
        <Text style={[styles.CityTextStyle, styles.countryName]}>Deutschland</Text>
        <View style={styles.populationWrapper}>
          <FontAwesome name="user" size={50} color="#00ced1" />
          <Text style={styles.populationText}>10,000</Text>
        </View>
        <View style={styles.riseSetWrapper}>
          <Feather name="sunrise" size={50} color="#e0ffff" />
          <Text style={styles.riseSetText}>07:45:07am</Text>
          <Feather name="sunset" size={50} color="#e0ffff" />
          <Text style={styles.riseSetText}>20:15:00pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#000'
  },

  imageLayout:{
    flex: 1,
  },

  CityTextStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'whitesmoke',
    textShadowColor: '#181818', 
    textShadowOffset: { width: 2, height: 2 }, // specifies the x and y offset of the shadow
    textShadowRadius: 1 // specifies the blur radius of the shadow
  },
  
  cityName: {
    fontSize: 40,
  },

  countryName: {
    fontSize: 30,
  },

  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },

  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: '#00ced1',
    fontWeight: 'bold'
  },

  riseSetWrapper: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-around',
    marginTop: 30
  },

  riseSetText: {
    fontSize: 20,
    color: 'whitesmoke',
    fontWeight: 12
  }

})

export default City;