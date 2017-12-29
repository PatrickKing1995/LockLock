import React, { Component } from 'react';
import { View, Text, StyleSheet, resizeMode,Image, ScrollView, TouchableOpacity,Alert, SectionList  } from 'react-native';
import {firebaseApp} from '../../../../../database/firebaseConfig';

const ACCESS_TOKEN = 'access_token';

export default class List extends Component {
  constructor(props){
    super(props);
    this.itemRef= firebaseApp.database();
  }

  litenForItem(itemRef){
    let item = [];
    // let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
    this.itemRef.ref('H0DIINQmuWNCLCPVtZCgYPYlyMf1').on('value', (dataSnapshot)=>{
      item.push({
        data: dataSnapshot.val(),
        key: dataSnapshot.key
      })
    } )
    console.log("item", item);
  }

  render() {
    return (
         <SectionList
          sections={[
            {title: '29/12/2017', data: ['La con em, em danh no chet me!', 'Thang roi, khong chiu thoi!']},
            {title: '28/12/2017', data: ['Ngay buon dan troi ve phia cu', 'Thuong nhau thi de do', 'Mi muon tau phai song sao day']},
            {title: '27/12/2017', data: ['Em a, anh muon quay lai nhu xua', 'Tren doi nay deo tin noi thu gi', 'Thang roi thi cung chiu thoi', 'Vui thoi, dung vui qua!']},
            {title: '26/12/2017', data: ['Nang do trong sang', 'Song xa nhau chang de dang']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
    )
  }

  componentDidMount(){
    this.litenForItem(this.itemRef);
  }
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
      fontSize: 14,
      backgroundColor: '#fff',
      fontFamily: 'Relish Pro Medium',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      fontFamily: 'Relish Pro',
    },
  })
