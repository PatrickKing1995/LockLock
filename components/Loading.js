import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, resizeMode, ActivityIndicator } from 'react-native';

export default class Loading extends Component {
  render() {
    return (
        <View style={[styles.container, styles.horizontal]}>
             <ActivityIndicator size= {60} color="#fff" />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#566a81'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
  })
