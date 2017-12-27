import React, { Component } from 'react';
import { View,
    Text,
    ScrollView,
 } from 'react-native'
 import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import Login from  '../components/screens/login/Login';
import Home from  '../components/screens/home/Home';
import User from  '../components/screens/user/User';
import Register from '../components/screens/register/Register'

export const RegisterStack = StackNavigator({
    MH_Login: {
      screen: Login,
      navigationOptions: {
          header: null,
      }
    },
    MH_Register: {
        screen: Register,
        navigationOptions: {
            header: null,
        }
      },
  });

  export const HomeStack = StackNavigator({
    MH_Home: {
      screen: Home,
      navigationOptions: {
          header: null,
      }
    },
    MH_User: {
        screen: User,
        navigationOptions: {
            header: null,
        }
      },
  });

export const LoginStack = StackNavigator({
    ManHinh_Login: {
        screen: RegisterStack,
        navigationOptions: {
            header: null,
        }
    },
    ManHinh_Home: {
        screen: HomeStack,
        navigationOptions: {
            header: null,
        }
    },
});




