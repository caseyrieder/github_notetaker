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
import Main from './app/components/Main';
import Dashboard from './app/components/Dashboard';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#111111',
  },
})

class eggheadGithubNotetaker extends Component {
  renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProps} />
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        renderScene={this.renderScene}
        initialRoute={{component: Main}}
      />
    );
  }
}

AppRegistry.registerComponent('eggheadGithubNotetaker', () => eggheadGithubNotetaker);


// renderScene={(route, navigator) => <Main title={route.title} navigator={navigator} />}
// initialRoute={{ title: 'Github Notetaker', index: 0 }}
