/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   NavigatorIOS,
// } from 'react-native';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Navigator, View } from 'react-native';
import Main from './App/Components/Main';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#111111',
  },
})

class eggheadGithubNotetaker extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Github Notetaker', index: 0 }}
        renderScene={(route, navigator) => <Main title={route.title} navigator={navigator} />}
        style={styles.container}
      />
    );
  }
}

AppRegistry.registerComponent('eggheadGithubNotetaker', () => eggheadGithubNotetaker);
