import React, { Component } from 'react';
import { View,
    Text,
    ScrollView,
 } from 'react-native'
 import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import DateList from './DateList';
import RecentList from  './RecentList';
import FavoristList from  './FavoristList';

export const Tabs = TabNavigator({
    ManHinh_DateList: {
        screen: DateList,
        navigationOptions: {
            tabBarLabel: 'DATE',
        }
    },
    ManHinh_RecentList: {
        screen: RecentList,
        navigationOptions: {
            tabBarLabel: 'RECENT'
        }
    },
    ManHinh_FavoristList: {
        screen: FavoristList,
        navigationOptions: {
            tabBarLabel: 'FAVORIST'
        }
    },
},
{
    tabBarPosition: 'bottom',
    tabBarOptions: {
        style: {
            backgroundColor: '#FFC125',
        },
        labelStyle: {
            fontSize: 15,
        },
        inactiveTintColor: '#fff',
        activeTintColor: '#363636'
    }
})
