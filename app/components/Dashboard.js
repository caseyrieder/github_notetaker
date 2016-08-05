import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import Profile from './Profile'
import { getRepos, getNotes } from '../utils/api'
import Repositories from './Repositories'
import Notes from './Notes'

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
})

class Dashboard extends Component {
  makeBackground(btn) {
    const obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    if (btn === 0) {
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }
    return obj;
  }

  goToProfile() {
    console.log('Go to Profile Page');
    this.props.navigator.push({
      title: `${this.props.userInfo.name}'s Profile` || 'Profile',
      component: Profile,
      passProps: {userInfo: this.props.userInfo},
    });
  }

  goToRepos() {
    console.log('Go to Repos Page');
    getRepos(this.props.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          title: `${this.props.userInfo.name}'s Repos` || 'Repos',
          component: Repositories,
          passProps: {
            userInfo: this.props.userInfo,
            repos: res
          },
        });
      });
  }

  goToNotes() {
    console.log('Go to Notes Page');
    getNotes(this.props.userInfo.login)
      .then((res) => {
        res = res || {};
        this.props.navigator.push({
          title: `Notes for ${this.props.userInfo.name}` || 'Notes',
          component: Notes,
          passProps: {
            userInfo: this.props.userInfo,
            notes: res,
          },
        });
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes.bind(this)}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Dashboard
