import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#48BBEC',
    paddingBottom: 10
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'white'
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white'
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  }
});

// Pure component b/c it is stateless...only has props
class Badge extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}}/>
        <Text style={styles.name}> {this.props.userInfo.name} </Text>
        <Text style={styles.handle}> {this.props.userInfo.login} </Text>
      </View>
    )
  }
}

// Ensures that certain props are there...otherwise throws error
Badge.propTypes = {
  userInfo: PropTypes.object.isRequired
}

export default Badge
