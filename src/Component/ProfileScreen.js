import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { createStackNavigator } from 'react-navigation';



export default class ProfileScreen extends Component {
  constructor(props){
    super(props)

  }
  render(){ //=> RENDOR?!?!? ERROR DIFFICULT TO CATCH
    return(
      <View style={styles.container}>

      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#221F25',

  },
})
