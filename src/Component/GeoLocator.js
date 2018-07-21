import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';

export default class GeoLocator extends React.Component {

  render()  {
    return(
      <MapView
        provider={"google"}
        style={{ flex: 1 }}
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
