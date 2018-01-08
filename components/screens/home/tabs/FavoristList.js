import React, { Component } from 'react';
import { View, Text, StyleSheet, resizeMode,Image, ScrollView, TouchableOpacity,Alert  } from 'react-native';
import List from './favoristlist/List'

export default class FavoristList extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={tabs.container}>
          <View
            // showsVerticalScrollIndicator={false}
            style={styles.wrapper}
          >
            <List/>
          </View> 
        </View>
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

const tabs = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  containerin: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    top: 390,
    left: 280,
    height: 60,
    width: 60,
    marginBottom: 35,
    marginRight: 50,
    alignItems: 'flex-end'
  },
  bttadd: {
    width: 60,
    height: 60
  },
  roll: {
    height: null,
    width: null
  }
})

const styles = StyleSheet.create({
  wrapper: {
    //position: 'absolute',
    //margin: 10,
    width: '100%',
    height: '100%', 
  },
  containerin: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    marginBottom: 35,
    marginRight: 40,
    alignItems: 'flex-end'
  },
  bttadd: {
    width: 50,
    height: 50
  },
  container: {
      flex: 1, 
      justifyContent: 'flex-start',
      paddingLeft: 10,
      backgroundColor: '#fff',
      paddingRight: 10,
  },
  textInput: {
      padding: 12,
      fontFamily: 'Relish Pro',
      fontSize: 18,
      textAlign: 'left',
      backgroundColor: '#fff',
  },
  textRegular: {
      marginTop: 5,
      textAlign: 'center',
      fontSize: 17,
      color: '#fff',
      fontFamily: 'Relish Pro',
  }
});
