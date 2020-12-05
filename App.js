import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import MapView, { Marker } from 'react-native-maps'

const App: () => React$Node = () => {
  
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const getLocation = () => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude)
      setLongitude(info.coords.longitude)
    });
  }

  getLocation()
  const { height, width } = Dimensions.get('window');
  return <>
    { latitude && longitude ? 
        <MapView
          style={{ height, width }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude, longitude }}
            title='Casa de Jordan'
            description='Aquí fue donde Jordan realizó este deber'
          />
          <Marker
            coordinate={{ latitude: -0.16924030945500612, longitude: -78.47092322469005 }}
            title='UDLA'
            description='Aquí es donde Jordan dice que estudia'
          />
        </MapView>
      : null
    }
  </>
}

export default App;
