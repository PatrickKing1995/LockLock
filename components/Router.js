import React, { Component } from 'react';
import { View,
    Text,
    ScrollView,
 } from 'react-native'
 import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import Login from  '../components/screens/login/Login';
import Home from  '../components/screens/home/Home';
import User from  '../components/screens/user/User';
import HOME from '../components/screens/HOME'

export const SlideMenu = DrawerNavigator({
    ManHinh_Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    }
},
    {
        drawerWidth: 260,
        drawerPosition:'bottom',
        contentComponent: props =><User/>
});

export const LoginStack = StackNavigator({
    ManHinh_Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    ManHinh_SlideMenu: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    },
    
});


