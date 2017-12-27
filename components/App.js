import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import {  LoginStack, HomeStack } from './Router';
import Loading from './Loading';

const ACCESS_TOKEN = 'access_token';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: false,
      loading: true,
    }
  }

  componentWillMount() {
    this.getToken();
}

  async getToken() {
    try {
      let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
      if(accessToken) {
          console.log("Token not set");
      } else {
        this.setState({login: true})
      }
      this.setState({loading: false});
    } catch(error) {
        console.log("Something went wrong");
    }
  }

  render() {
    if (this.state.loading ) {
      return(
        <Loading/>
      )
    } else {
      if(this.state.login){
        return (
          <LoginStack/>
      )
      } else {
        return (
          <HomeStack/>
      )
      }
    }
    
    
  }
}