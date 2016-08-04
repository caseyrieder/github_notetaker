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
import { AppRegistry, StyleSheet, Text, Navigator, View, TouchableHighlight } from 'react-native';
import Main from './app/components/Main';
import Dashboard from './app/components/Dashboard';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#111111',
  },
  navbar: {
    backgroundColor: 'black',
  },
  navbarText: {
    color: 'white',
    fontSize: 20,
    textAlignVertical: 'center',
    paddingHorizontal: 10,
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
        initialRoute={{component: Main, title: 'Repos', index: 0}}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => {
                if (route.index === 0) {
                  return null;
                } else {
                  return (
                    <TouchableHighlight onPress={() => navigator.pop()}>
                      <Text style={styles.navbarText}>Back</Text>
                    </TouchableHighlight>
                  );
                }
              },
              RightButton: (route, navigator, index, navState) => {
                return (<View></View>); },
              Title: (route, navigator, index, navState) => {
                return (
                  <Text style={styles.navbarText}>{route.title}</Text>
                );
              },
            }}
            style={styles.navbar}
          />
        }
      />
    );
  }
}

AppRegistry.registerComponent('eggheadGithubNotetaker', () => eggheadGithubNotetaker);

// navigationBar={
//   <Navigator.NavigationBar
//     routeMapper={{
//       LeftButton: (route, navigator, index, navState) => {
//         if (route.index === 0) {
//           return null;
//         } else {
//           return (
//             <TouchableHighlight onPress={() => navigator.pop()}>
//               <Text style={styles.navbarText}>Back</Text>
//             </TouchableHighlight>
//           );
//         }
//       },
//       Title: (route, navigator, index, navState) => {
//         return (
//           <Text style={styles.navbarText}>{route.title}</Text>
//         );
//       },
//     }}
//     style={styles.navbar}
//   />
// }
// renderScene={(route, navigator) => <Main title={route.title} navigator={navigator} />}
// initialRoute={{ title: 'Github Notetaker', index: 0 }}
