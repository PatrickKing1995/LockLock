import React, { Component } from 'react';
import { View, Text, StyleSheet, resizeMode,Image, ScrollView, TouchableOpacity,Alert, SectionList, ListView, AsyncStorage  } from 'react-native';
import {firebaseApp} from '../../../../../database/firebaseConfig';

const ACCESS_TOKEN = 'access_token';

class SectionListItem extends Component {
  render() {
      return (
          <View style={styles.itemlist}>
              <Text style={styles.title}>{this.props.item.title}
              </Text>
              <Text style={styles.item}>{this.props.item.detail}
              </Text>
              <View style={{height: 1, margin: 4, marginLeft: 20,marginRight: 10}}>
              </View>
          </View>
      );
  }
}

class SectionHeader extends Component {

  render() {
      return (
          <View style={{
              flex: 1,
          }}>
              <Text style={styles.sectionHeader}>
              {this.props.section.date}
              </Text>
          </View>
      );
  }
}

export default class List extends Component {
  constructor(props){
    super(props);
    this.itemRef= firebaseApp.database();
    this.state= {
      dataSource: [],
      userID: 'H0DIINQmuWNCLCPVtZCgYPYlyMf1',
    };
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }

  //   componentWillMount() {
  //   this.getToken();
  // }

  // async getToken() {
  //     let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
  //     this.setState({userID: accessToken})
  //     alert(accessToken)
  // }

  litenForItem(itemRef){
    itemRef.ref(this.state.userID).on('value', (dataSnapshot) => {
      var arr = [];
      dataSnapshot.forEach((child) => {
        arr.push({
          name: child.val(),
          _key: child.key  
        });
        var new_arr = [];
        arr.map((item)=>{
          new_arr.push({
            data: item.name.content,
            date: item.name.date,
            key: item._key
          });
        });
        this.setState({dataSource: new_arr})
      console.log('State:',this.state.dataSource);
      // console.log('State:',this.state.data);
      })
    })
  }

  render() {
    return (
         <SectionList
          sections={this.state.dataSource}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (<SectionListItem item={item} index={index} >

            </SectionListItem>);
        }}
          renderSectionHeader={({ section }) => {
            return (<SectionHeader section={section} />);
        }}
          keyExtractor={(item, index) => index}
          stickySectionHeadersEnabled={true}
        />
    )
  }

  componentDidMount(){
      this.litenForItem(this.itemRef);}
}

const list = StyleSheet.create({
  wrapper: {
    // position: 'absolute',
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

const styles = StyleSheet.create({
    container: {
     flex: 1,
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 18,
      color: '#fff',
      backgroundColor: '#51657c',
      fontFamily: 'Relish Pro Medium',
    },
    item: {
      padding: 3,
      fontSize: 16,
      paddingLeft: 10,
      fontFamily: 'Relish Pro',
    },
    itemlist: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 5,
      marginBottom: 5,
      marginRight: 10,
      marginLeft: 10,
      flexDirection: 'column',
    },
    title: {
      fontSize: 17,
      height: 30,
      borderBottomColor: '#798ea5',
      borderBottomWidth: 2,
      paddingLeft: 3,
      fontFamily:'Relish Pro Medium Italic'
    }
  })
