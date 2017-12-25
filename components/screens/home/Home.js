import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, resizeMode } from 'react-native';
import {TaskStack} from './tabs/Tab';
import Header from './Header';

export default class Home extends Component {
  onClick_User=()=>{
    this.props.navigation.navigate('ManHinh_User')
  }
  render() {
    return (
        <View style={{flex: 1}}>
            <Header open={()=>this.onClick_User()}/>
            <TaskStack/>
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

