import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import {Tabs} from './tabs/Tab'

export default class Home extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
            <Header/>
            <Tabs/>
        </View>
    )
  }
}
