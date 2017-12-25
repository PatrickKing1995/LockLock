import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Tabs} from './tabs/Tab';

export default class Home extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
            <StatusBar backgroundColor="#566a81"/>
            <View style={header.container}>
              <View style={header.rap}>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('ManHinh_User')}
                  >
                    <Image style={header.image2} source={require('../../../icons/account-circle.png')}/>
                </TouchableOpacity>
                <Text style={header.title}>GateMemo</Text>
                <Image style={header.image1} source={require('../../../icons/cloud.png')}/>
                <Image style={header.image} source={require('../../../icons/power.png')}/>
              </View>
            </View>
            <Tabs/>
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
    marginLeft: 105
  },
  image2: {
    height: 30,
    width: 30,
    marginRight: 16,
    marginLeft: 10,
  }
});
