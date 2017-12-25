import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar,TouchableOpacity, Image } from 'react-native';
import Avatar from './Avatar';

export default class User extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
          <StatusBar backgroundColor="#566a81"/>
          <View style={header.container}>
            <View style={header.rap}>
              <TouchableOpacity
                    onPress={()=>this.props.navigation.goBack()}
              >
                <Image style={header.image2} source={require('../../../icons/close.png')}/>
              </TouchableOpacity>
              <Text style={header.title}>Tai khoan</Text>
              <Image style={header.image} source={require('../../../icons/settings.png')}/>
          </View>
          </View>
          <Avatar/>
      </View>
    )
  }
}

const header = StyleSheet.create({
  container: {
    backgroundColor: '#566a81',
    height: 50,
  },
  rap:  {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    padding: 7,
  },
  title:  {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Relish Pro Medium'
  },
  image: {
    height: 26,
    width: 26,
    marginLeft: 170
  },
  image1: {
    height: 26,
    width: 26,
    marginLeft: 120
  },
  image2: {
    height: 26,
    width: 26,
    marginRight: 10,
    marginLeft: 5
  }
});

