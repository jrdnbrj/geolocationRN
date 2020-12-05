import React, { useState } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'
// import Geolocation from '@react-native-community/geolocation'
import Geolocation from 'react-native-geolocation-service'

const App: () => React$Node = () => {
  
  const [accuracy, setAccuracy] = useState('')
  const [altitude, setAltitude] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const getLocation = () => {
    Geolocation.getCurrentPosition(info => {
      console.log(info)
      setAccuracy(info.coords.accuracy)
      setAltitude(info.coords.altitude)
      setLatitude(info.coords.latitude)
      setLongitude(info.coords.longitude)
    });
  }

  getLocation()

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text>Exactitud: { accuracy }</Text>
      <Text>Altitud: { altitude }</Text>
      <Text>Latitud: { latitude }</Text>
      <Text>Longitud: { longitude }</Text>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
