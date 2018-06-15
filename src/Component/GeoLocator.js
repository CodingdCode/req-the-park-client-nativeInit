import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Permissions, Location, Constants, MapView } from 'expo'


export default class GeoLocator extends React.Component {
  state = {
  location: null,
  errorMessage: null,
};

componentWillMount() {
  this._getLocationAsync();
}

_getLocationAsync = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    this.setState({
      errorMessage: 'Permission to access location was denied',
    });
  }

  let location = await Location.getCurrentPositionAsync();
  this.setState({ location });
};

render() {
  let text = 'Waiting..';
  if (this.state.errorMessage) {
    text = this.state.errorMessage;
  } else if (this.state.location) {
    text = JSON.stringify(this.state.location);
  }

  console.log(text)

  return (
    <View>
      <Text>{text}</Text>
      {/* <MapView /> //=> Native Map to place destinations */}
    </View>
  );
}
}
