import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar
} from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import MapView from 'react-native-maps'

const App: () => React$Node = () => {
  
  const [accuracy, setAccuracy] = useState('')
  const [altitude, setAltitude] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const getLocation = () => {
    Geolocation.getCurrentPosition(info => {
      console.log('info:', info)
      setAccuracy(info.coords.accuracy)
      setAltitude(info.coords.altitude)
      setLatitude(info.coords.latitude)
      setLongitude(info.coords.longitude)
    });
  }

  getLocation()
  const { height, width } = Dimensions.get('window');
  return <>
      <StatusBar hidden={true}/>
      {/* <Text>Exactitud: { accuracy }</Text>
      <Text>Altitud: { altitude }</Text>
      <Text>Latitud: { latitude }</Text>
      <Text>Longitud: { longitude }</Text> */}
      { latitude && longitude ? 
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            /> 
        </View>
        : null
      }
    </>
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default App;
