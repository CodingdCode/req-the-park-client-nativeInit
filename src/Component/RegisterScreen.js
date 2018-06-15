import React, { Component } from 'react';
import { AcitivityIndicator, StyleSheet } from 'react-native';
import GenerateForm from 'react-native-form-builder';
import { View, Text, Button } from 'native-base';
import ProfileScreen from './ProfileScreen';



export default class RegisterScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  static navigationOptions = {
    header: null
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>
          Registration
        </Text>

        <View style={styles.wrapper}>
          <View>
            <GenerateForm
              ref={(c) => {
                this.formGenerator = c;
              }}
              fields={fields}
            />
          </View>
          <View style={styles.submitButton}>
            <Button
              block onPress={() => this.login()}>
              <Text>Game Time!</Text>
            </Button>
            <Button>
              <Text>Sign Me Up!</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221F25',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    marginTop: 150,
  },
  submitButton: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  logo:{
    fontSize: 35,
    fontWeight: 'bold',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#44BBA4',
  },
});
const fields = [
  {
    type: 'text',
    name: 'username',
    required: true,
    icon: 'ios-person',
    label: 'Username'
  },
  {
    type: 'text',
    name: 'email',
    required: true,
    icon: 'ios-person',
    label: 'Email'
  },
  {
    type: 'text',
    name: 'password',
    required: true,
    icon: 'ios-lock',
    label: 'Password'
  }
]
