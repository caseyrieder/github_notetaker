import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native'
import Badge from './Badge'
import Separator from '../helpers/Separator'
import Web from '../helpers/Web'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

class Repositories extends Component {
  openPage(url) {
    console.log('the url is ', url);
    this.props.navigator.push({
      title: "Web View",
      component: Web,
      passProps: {url},
    });
  }

  render() {
    const repos = this.props.repos;
    const repoList = repos.map((repo, index) => {
      const desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text>: <View />;
      return (
        <View key={index}>
          <View>
            <View style={styles.rowContainer}>
              <TouchableHighlight
                onPress={this.openPage.bind(this, repos[index].html_url)}
                underlayColor='transparent'>
                <Text style={styles.name}>{repos[index].name}</Text>
              </TouchableHighlight>
              <Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
              {desc}
            </View>
          </View>
          <Separator />
        </View>
      )
    })
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {repoList}
      </ScrollView>
    )
  }
}

Repositories.propTypes = {
  userInfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
}

export default Repositories
