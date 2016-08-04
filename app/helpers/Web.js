import React, { Component, PropTypes } from 'react'
import { View, WebView, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  }
});

class Web extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView source={{uri: this.props.url}}/>
      </View>
    )
  }
};

Web.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Web
