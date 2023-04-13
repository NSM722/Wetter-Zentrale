import React from 'react';
import { 
  ImageBackground, 
  Text, 
  SafeAreaView, 
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import IconText from '../components/IconText';

const City = () => {
  const { 
    cityTextStyle, 
    cityName, 
    countryName, 
    imageLayout, 
    populationWrapper, 
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayOut,

  } = styles
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/HH.jpg')}
        style={imageLayout}
      >
        { /*
         * merging styles using the spread syntax 
         * For example any common properties between [ cityTextStyle and cityName ]
         * will be overridden by the properties from cityName
         */}

        <Text style={[cityTextStyle, cityName]}>Hamburg</Text>
        <Text style={[cityTextStyle, countryName]}>Deutschland</Text>
        <View style={[populationWrapper, rowLayOut]}>
          <IconText 
            iconName={"user"}
            iconColor={"#00ced1"}
            bodyText={"10000"}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayOut]}>
        <IconText 
            iconName={"sunrise"}
            iconColor={"#e0ffff"}
            bodyText={"07:45:07am"}
            bodyTextStyles={riseSetText}
          />
          <IconText 
            iconName={"sunset"}
            iconColor={"#e0ffff"}
            bodyText={"20:15:00pm"}
            bodyTextStyles={riseSetText}
          />
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

  cityTextStyle: {
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
    justifyContent: 'center',
    marginTop: 30
  },

  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: '#00ced1',
  },

  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },

  riseSetText: {
    fontSize: 20,
    color: 'whitesmoke',
  },

  // shared styles for populationWrapper & riseSetWrapper
  rowLayOut: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default City;