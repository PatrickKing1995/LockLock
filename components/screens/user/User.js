import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar,TouchableOpacity, Image, Alert, AsyncStorage, BackHandler } from 'react-native';
import Avatar from './Avatar';

const ACCESS_TOKEN = 'access_token';

export default class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: false,
    }
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

  onLogout(){
    this.deleteToken();
  }

  confirmDelete() {
    Alert.alert("Are you sure?", "This action cannot be undone", [
      {text: 'Cancel'}, {text: 'Logout', onPress: () => this.onLogout()}
    ]);
}

  async deleteToken() {
        await AsyncStorage.setItem(ACCESS_TOKEN, '')
        this.props.navigation.navigate('ManHinh_Login')
}

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
              <TouchableOpacity
                    onPress={()=>this.confirmDelete()}
              >
                <Image style={header.image} source={require('../../../icons/logout.png')}/>
              </TouchableOpacity>
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

