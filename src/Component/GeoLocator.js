import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoiY2FycmFzY29jIiwiYSI6ImNqanFpejhpNDI3aDAzcG8xcmMydWEwbDgifQ.kc6Q-adpsQFlvCCGSUvOCQ');


export default class GeoLocator extends React.Component {

  render()  {
    return(
      <View style={styles.container}>
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={15}
            centerCoordinate={[11.256, 43.770]}
            style={styles.container}>
        </Mapbox.MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
