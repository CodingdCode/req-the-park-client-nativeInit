import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import GenerateForm from 'react-native-form-builder';
import { View, Text, Button } from 'native-base';
import ProfileScreen from './ProfileScreen';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    // this.onSubmit = this.onSubmit.bind(this)
    // this.handleRegister = this.handleRegister.bind(this)
  }

  static navigationOptions= {
    header: null
  }

  login() {
    const formFields = this.formGenerator.getValues();
    // console.log(formFields)
    this.props.navigation.navigate('MainPageScreen')
  }

  register() {
    this.props.navigation.navigate('RegisterScreen')
  }

  render() {
    return (

    <View style={style.container}>
      <Text style={style.logo}>
        REQ-THE-PARK
      </Text>

      <View style={style.wrapper}>
        <View>
          <GenerateForm
            ref={(c) => {
              this.formGenerator = c;
            }}
            fields={fields}
          />
        </View>
        <View style={style.submitButton}>
          <Button
            block onPress={() => this.login()}>
            <Text>Game Time!</Text>
          </Button>
          <View style={style.registerButton}>
            <Button
              block onPress={() => this.register()}>
              <Text>Sign Me Up!</Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    backgroundColor: '#221F25',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  input:{
    width: 250,
    height: 40,
    backgroundColor: '#FCF8ED',
    marginBottom: 10,
    padding: 10,
    color: 'black'
  },
  logo:{
    fontSize: 35,
    fontWeight: 'bold',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#44BBA4',
  },
  wrapper: {
    flex: 1,
    marginTop: 150,
  },
  submitButton: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  registerButton: {
    display: 'flex',
    justifyContent: 'center',
    margin:'auto',
  }
})

const fields = [
  {
    type: 'text',
    name: 'email',
    required: true,
    icon: 'ios-person',
    label: 'Email'
  },
  {
    type: 'password',
    name: 'password',
    required: true,
    icon: 'ios-lock',
    label: 'Super Secret'
  }
]
