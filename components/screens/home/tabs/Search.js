import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class Search extends Component {
  render() {
    return (
        <View style={content.container}>
            <Text>Search</Text>
        </View>
    )
  }
}

const content = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#f4f5f9',
  }
});