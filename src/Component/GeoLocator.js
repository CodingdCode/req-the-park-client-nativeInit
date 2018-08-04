import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default class GeoLocator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRegion: {}
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.setState({currentRegion: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.042,
        }});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({currentRegion: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.042,
        }});
    })
  };


  render()  {
    return(
      <MapView
        showUserLocation={true}
        followsUserLocation={true}
        zoomEnabled={true}
        provider={'google'}
        customMapStyle={mapStyle}
        maxZoomLevel={20}
        style={{
          left:0,
          right:0,
          top:0,
          bottom:0,
          position:'absolute'
        }}
        region={
          this.state.currentRegion
        }
      >
        <Marker
          pinColor={'black'}
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
        />
        {/* <Marker
          pinColor={'black'}
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
        />
        <Marker
          pinColor={'black'}
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
        /> */}
      </MapView>
    );
  };
}

  const mapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5"
        }
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161"
        }
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f5f5"
        }
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off"
        }
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd"
        }
      ],
    },
    {
      featureType: "administrative.neighborhood",
      stylers: [
        {
          visibility: "off"
        }
      ],
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off"
        }
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee"
        }
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off"
        }
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575"
        }
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5"
        }
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e"
        }
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff"
        }
      ],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575"
        }
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#dadada"
        }
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161"
        }
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e"
        }
      ],
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off"
        }
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5"
        }
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee"
        }
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#c9c9c9"
        }
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off"
        }
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e"
        }
      ],
    }
  ]
