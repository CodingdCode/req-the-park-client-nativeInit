import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from './src/Component/LoginScreen';
// import FetchTestScreen from './src/Component/FetchTestScreen';
import RegisterScreen from './src/Component/RegisterScreen';
import ProfileScreen from './src/Component/ProfileScreen';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  //   this.loginCheck = this.loginCheck.bind(this)
  //   this.registerUser = this.registerUser.bind(this)
  // }
  //
  // loginCheck()  {
  //   alert('loginCheck -- app.js')
  // }
  //
  // registerUser()  {
  //   alert('registerCheck -- app.js')
  // }


  render() {
    return (
        <Stack />
    );
  }
}
// const FullApp = createSwitchNavigator({
//   preApp: Stack,
//   current: IndexShow
// })
export const Stack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
  },
  RegisterScreen: {
    screen: RegisterScreen,
  },
  // MainPageScreen: {
  //   screen: FetchTestScreen,
  // },
  ProfileScreen: {
    screen: ProfileScreen
  },
})
// export const IndexShow = createStackNavigator({
//   FetchTestScreen: {
//     screen: FetchTestScreen,
//   },
//   ProfileScreen: {
//     screen: ProfileScreen,
//   },
// })
// },
// {
//   initialRouteName: LoginScreen,
//   headerMode: 'none',
