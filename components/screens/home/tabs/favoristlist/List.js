import React, { Component } from 'react';
import { View, Text, StyleSheet, resizeMode,Image, ScrollView, TouchableOpacity,Alert, SectionList, ListView, AsyncStorage  } from 'react-native';
import {firebaseApp} from '../../../../../database/firebaseConfig';

const ACCESS_TOKEN = 'access_token';

class SectionListItem extends Component {
  constructor(props){
    super(props);
    this.state= {
      // userID: 'H0DIINQmuWNCLCPVtZCgYPYlyMf1',
    };
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }

  // ShowCurrentDate=()=>{
 
  //   var date = new Date().getDate();
  //   var month = new Date().getMonth() + 1;
  //   var year = new Date().getFullYear();

  //   Alert.alert(date + '/' + month + '/' + year);

  //  }

  updatefavor(){
    let tempMemo= {
      favor: !this.props.item.favor,
      //title: this.props.item.title,
      //detail: this.props.item.detail,
      //key: this.props.item.key
    }
    // this.ShowCurrentDate();
    AsyncStorage.getItem(ACCESS_TOKEN, (err, item) => {
    firebaseApp.database().ref(item).child(this.props.item.key).child('content').child(this.props.index).update(tempMemo)
    })
  }
  render() {
    if(this.props.item.favor){
      return (
          <View style={styles.itemlist}>
              <TouchableOpacity
              onPress={()=>this.updatefavor()}
           >
           <Text style={styles.title}>{this.props.item.title}
            </Text>
            <Text style={styles.item}>{this.props.item.detail}
            </Text>
            <View style={{height: 1, margin: 4, marginLeft: 20,marginRight: 10}}>
            </View>
           </TouchableOpacity>
          </View>
      )
    }
    return (
      <View/>
    )
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
      // userID: 'H0DIINQmuWNCLCPVtZCgYPYlyMf1',
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
    let accessToken = AsyncStorage.getItem(ACCESS_TOKEN, (err, item) => {
    itemRef.ref(item).on('value', (dataSnapshot) => {
      var arr = [];
      dataSnapshot.forEach((child) => {
        arr.push({
          name: child.val(),
          // _key: child.key  
        });
        var new_arr = [];
        arr.map((item)=>{
          new_arr.push({
            data: item.name.content,
            date: item.name.date,
            khoa: item._key
          });
        });
        this.setState({dataSource: new_arr})
      //console.log('State:',this.state.dataSource);
      //Alert.alert(this.state.dataSource);
      // console.log('State:',this.state.data);
      })
    })
  })
  }

  render() {
    return (
         <SectionList
          sections={this.state.dataSource}
          renderItem={({ item, index }) => {
            return (<SectionListItem item={item} index={index} >

            </SectionListItem>);
        }}
        //   renderSectionHeader={({ section }) => {
        //     return (<SectionHeader section={section} />);
        // }}
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
