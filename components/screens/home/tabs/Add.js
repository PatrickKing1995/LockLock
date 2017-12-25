import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      stt: '',
    }
  }
  render() {
    return (
        <View style={{flex: 1}}>
            <View style={header.container}>
              <View style={header.rap}>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.goBack()}
                  >
                    <Image style={header.image2} source={require('../../../../icons/close.png')}/>
                </TouchableOpacity>
                <Text style={header.title}>What's on your mind...? </Text>
              </View>
            </View>
            <View style={{flex: 1}}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.wrapper}
              >
              <TextInput style={styles.textInput} 
                          placeholder='Writing something....'
                          // keyboardType= 'default'
                          multiline={true}
                          numberOfLines={200}
                          textAlignVertical={'top'}
                          onChangeText={(stt)=>{this.setState({stt})}}
                          underlineColorAndroid='transparent'
                      />
              </ScrollView>
              <View
            style={styles.containerin}
          >
            <TouchableOpacity
            >
              <Image style={styles.bttadd} source={require('../../../../icons/upload.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        </View>
    )
  }
}

const header = StyleSheet.create({
  container: {
    backgroundColor: '#798ea5',
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
    fontSize: 20,
    fontFamily: 'Relish Pro',
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
const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    padding: 20,
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
    width: 60,
    height: 60
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

