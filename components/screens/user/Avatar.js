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
            <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <Image
                style={{
                    width: null,
                  resizeMode,
                }}
                source={require('../../../images/bg.png')}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 40,
                }}
              >
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
});