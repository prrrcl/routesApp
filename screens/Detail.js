import React, { useState } from 'react'
import { View, Text } from 'react-native'
import  MapView  from 'react-native-maps'

import MapViewDirections from 'react-native-maps-directions';
import moment from 'moment'
import 'moment/locale/es';
moment.locale('es')


const API_KEY = '...';

const DetailScreen = ({navigation}) => {
  const [route, setRoute] = useState(navigation.state.params)
  const origin = route.from
  const destination = route.to
  console.log(origin, 'Origin')
  console.log(destination, 'Destination')
return(
  <View style={{flex:1}}>
    <MapView
      style={{flex:2}}
      initialRegion={{
        latitude:origin.latitude,
        longitude:origin.longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04
      }}
    >
      <MapView.Marker coordinate={{latitude: origin.latitude, longitude: origin.longitude}} /> 
      <MapView.Marker coordinate={{latitude: destination.latitude, longitude: destination.longitude}} /> 
          <MapViewDirections
        origin={{latitude:origin.latitude, longitude: origin.longitude}}
        destination={{latitude: destination.latitude, longitude: destination.longitude}}
        apikey={API_KEY}
        strokeWidth={3}
        strokeColor="hotpink" 
      />
      
      </MapView>

      <View style={{flex:4}}>
        <Text>{route.name}</Text>
        <Text>Desde: {route.from.name}</Text>
        <Text>Hasta: {route.to.name}</Text>
        <Text>Hasta: {moment(route.timestamps).format('L')}</Text>
      </View>
  </View>
)
}

export default DetailScreen