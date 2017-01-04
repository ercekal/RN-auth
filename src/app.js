import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state={ loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA-Iiz952t9bG5mV5O1TF5gciBhnGsdE1w",
      authDomain: "auth-78eb8.firebaseapp.com",
      databaseURL: "https://auth-78eb8.firebaseio.com",
      storageBucket: "auth-78eb8.appspot.com",
      messagingSenderId: "78525112643"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
        </CardSection>
      );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
