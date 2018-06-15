import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SectionList,
  StyleSheet
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ProfileScreen from './ProfileScreen';
import GeoLocator from './GeoLocator';


export default class MainPageScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
    // this.fetchingFromDB = this.fetchingFromDB.bind(this);
  }

  // fetchingFromDB()  {
    // fetch(`https://nameless-waters-56907.herokuapp.com/users`)
    //   .then((resp)  =>  {
    //     return resp.json()
    //   })
    //   .then((data)  =>  {
    //     console.log(data)
    //     return data
    //   })
//       .then((data) => {
//         // console.log(data)
//         this.setState((data) => {
//           data: data
// // //

          // function dStringfiy(key, value) {
          //   if (typeof value === 'string') {
          //     console.log('herll'+value)
          //   }
          // }

          // JSON.stringify({data})
        // })
      // })
  //     .catch(err => {
  //       console.log(err.message)
  //     })
  // }
  // stateFilter(key) {
  //   return (data.map())
  // }
  static navigationOptions = {
    header: null
  }

  toPersonalPage(obj) {
    console.log( obj)
    // const profilePage = StackActions.push({
    //   routeName:'ProfileScreen',
    //   params: obj,
    // })
    this.props.navigation.navigate('ProfileScreen', obj)
  }

  async componentDidMount() {
    const wait = await fetch('https://nameless-waters-56907.herokuapp.com/users')
    const returnResp = await wait.json()
    this.setState((prevState, state) => {return {data: returnResp}})
    // console.log(returnResp)
    // return returnResp;
  }

  render()  {
    // const viewAbleData = (this.state.data).json()
    // console.log('inside render ' + this.state.data)
    return (
      <View style={{flex:1 , flexDirection: 'column', justifyContent: 'center'}}>
        <View style={styles.temp}>
          <GeoLocator />
        </View>
          <FlatList
            data={this.state.data} //=> async & await allows to read state after the code runs
            keyExtractor={(item, index) => `${index}`} //=> this took an all nighterr
            renderItem={data => //=>
            <View
              style={{borderRadius: 2, borderWidth: 0.5, borderColor: '#d6d7da'}}>
              <Text
                style={styles.cheese}
                selectable={true}
                onPress={() => this.toPersonalPage(data.item)}
                >
                {data.item.username}
              </Text>
            </View>}//=> console.log inside text and noticed item follows data
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cheese: {
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    letterSpacing: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: 'white',
    backgroundColor: 'black',
    padding: 50,
  },
  temp: {
    // fontSize: 15,
    // backgroundColor: 'red',
    padding: 125,
  },
})
