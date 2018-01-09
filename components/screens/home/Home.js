import React, { Component } from 'react';
import { View, Text,Dimensions, StatusBar, StyleSheet, Image, TouchableOpacity, resizeMode, BackHandler  } from 'react-native';
import {TaskStack} from './tabs/Tab';
import Header from './Header';
import {firebaseApp} from '../../../database/firebaseConfig';

const {width,height} = Dimensions.get('window');

export default class Home extends Component {
  onClick_User=()=>{
    this.props.navigation.navigate('MH_User')
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  handleBackButton() {
    return true;
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

const modals=StyleSheet.create({
  openViewOpacity: {
    position: 'absolute',
    top:0,
    right:0,
    left:0,
    bottom:0,
    backgroundColor:'black',
    opacity:0.7
  },

  closeViewOpacity: {},

  openViewModal: {
      position: 'absolute',
      top: height*0.15,
      left:width*0.2 ,
      right:width*0.2,
      width:width*0.6,
      // height:100,
      borderRadius: 20,
      backgroundColor:'white',
  },
})

