import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, BackHandler } from 'react-native';

export default class Header extends Component {
  render() {
    return (
        <View style={header.wrapp} elevation={20}>
            <StatusBar backgroundColor="#566a81"/>
            <View style={header.container}>
              <View style={header.rap}>
                <TouchableOpacity
                    onPress={this.props.open}
                  >
                    <Image style={header.image2} source={require('../../../icons/account-circle.png')}/>
                </TouchableOpacity>
                <Text style={header.title}>GateMemo</Text>
                <Image style={header.image1} source={require('../../../icons/cloud.png')}/>
                <TouchableOpacity
                    onPress={()=>BackHandler.exitApp()}
                  >
                    <Image style={header.image} source={require('../../../icons/power.png')}/>
                </TouchableOpacity>
              </View>
            </View>
        </View>
    )
  }
}

const header = StyleSheet.create({
  wrapp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 0,
    shadowOpacity: 1,
  },
  container: {
    backgroundColor: '#566a81',
    height: 45,
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
    fontFamily: 'Relish Pro Medium',
  },
  image: {
    height: 26,
    width: 26,
    marginLeft: 20
  },
  image1: {
    height: 26,
    width: 26,
    marginLeft: 100
  },
  image2: {
    height: 30,
    width: 30,
    marginRight: 16,
    marginLeft: 10,
  }
});
