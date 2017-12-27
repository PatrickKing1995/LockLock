import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  resizeMode
} from 'react-native';

export default class Avatar extends Component {
    render() {
        return (
            <View style={{flex: 1,alignItems: 'center',}}>
              <View style={styles.container}>
                <Image
                  style={styles.imageCover}
                  source={require('../../../images/plane.jpg')}
                />
              </View>
              <View style={styles.containerin}>
                <Text style={styles.textInfo}>
                  Hi
                </Text>
              </View>
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: undefined,
        height: undefined,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
      position: 'absolute',
    },
    containerin: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    imageCover: {
      height: 150
    },
    textInfo: {
      textAlign: 'center',
      fontSize: 40,
    }
});