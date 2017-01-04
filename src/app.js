import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA-Iiz952t9bG5mV5O1TF5gciBhnGsdE1w",
      authDomain: "auth-78eb8.firebaseapp.com",
      databaseURL: "https://auth-78eb8.firebaseio.com",
      storageBucket: "auth-78eb8.appspot.com",
      messagingSenderId: "78525112643"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
