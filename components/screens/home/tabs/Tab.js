import React, { Component } from 'react';
import { View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
 } from 'react-native'
 import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import DateList from './DateList';
import RecentList from  './RecentList';
import FavoristList from  './FavoristList';
import Add from  './Add';
import Search from  './Search';

export const Tabs = TabNavigator({
    ManHinh_DateList: {
        screen: DateList,
        navigationOptions: {
            tabBarLabel: () => (
                <Image
                  source={require('../../../../icons/date.png')}
                  style={styles.icon}
                />
              ),
        }
    },
    ManHinh_RecentList: {
        screen: RecentList,
        navigationOptions: {
            tabBarLabel: () => (
                <Image
                  source={require('../../../../icons/history.png')}
                  style={styles.icon}
                />
              ),
        }
    },
    ManHinh_FavoristList: {
        screen: FavoristList,
        navigationOptions: {
            tabBarLabel: () => (
                <Image
                  source={require('../../../../icons/heart.png')}
                  style={styles.icon}
                />
              ),
        }
    },
    ManHinh_Search: {
        screen: Search,
        navigationOptions: {
            tabBarLabel: () => (
                <Image
                  source={require('../../../../icons/magnify.png')}
                  style={styles.icon}
                />
              ),
        }
    },
},
{
    tabBarPosition: 'top',
    tabBarOptions: {
        style: {
            backgroundColor: '#798ea5',
        },
        labelStyle: {
            fontSize: 20,
        },
        inactiveTintColor: '#fff',
        activeTintColor: '#F6F7F8',
        indicatorStyle: {
            backgroundColor: '#F6F7F8'
        },
        tabStyle: {
            height: 45,    
          },
    },
})

export const TaskStack = StackNavigator({
    ManHinh_Tabs: {
        screen: Tabs,
        navigationOptions: {
            header: null,
        }
    },
    ManHinh_Add: {
        screen: Add,
        navigationOptions: {
            header: null,
        }
    },
})



const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

