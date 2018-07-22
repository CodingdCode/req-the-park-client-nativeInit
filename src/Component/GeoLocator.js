import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class GeoLocator extends React.Component {

  render()  {
    return(
      <MapView
        // provider={'google'}
        style={{
          left:0,
          right:0,
          top:0,
          bottom:0,
          position:'absolute'
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  };
}
