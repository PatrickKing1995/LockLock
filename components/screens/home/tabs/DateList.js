import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class DateList extends Component {
  render() {
    return (
        <View style={content.container}>
            <Text style={{fontFamily: 'Vf-Aptima_n'}}>DateList</Text>
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
