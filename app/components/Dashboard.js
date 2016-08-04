import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
  render(){
    return (
      <View style={styles.container}>
        <Text> This is the dashboard </Text>
        <Text> {this.props.userInfo.location} </Text>
      </View>
    )
  }
}

export default Dashboard
