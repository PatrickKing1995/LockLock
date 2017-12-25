import React, { Component } from 'react';
import { View,
    Text,
    ScrollView,
 } from 'react-native'
 import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import Login from  '../components/screens/login/Login';
import Home from  '../components/screens/home/Home';
import User from  '../components/screens/user/User';


export const LoginStack = StackNavigator({
    ManHinh_Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    ManHinh_Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    },
    ManHinh_User: {
        screen: User,
        navigationOptions: {
            header: null,
        }
    }   
});


