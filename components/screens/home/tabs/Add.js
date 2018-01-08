import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity,AsyncStorage, TextInput, ScrollView,Alert  } from 'react-native';
import {firebaseApp} from '../../../../database/firebaseConfig'

const ACCESS_TOKEN = 'access_token';
const KEY ='key';
const DATE='date';
const KHOA='khoa'

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      // userID: 'H0DIINQmuWNCLCPVtZCgYPYlyMf1',
      subject: '',
      stt: '',
      currentDate: '',
      lastDate:'',
      maxKey: 0,
      khoa: 0,
    };
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }

  diffDate(){
    let memo = {
      date: this.state.currentDate,
      content: [{
        favor: false,
        khoa: 0,
        title: this.state.subject,
        detail: this.state.stt,
        key: this.state.maxKey+1,
      }]
    }
    let accessToken = AsyncStorage.getItem(ACCESS_TOKEN, (err, item) => {
    firebaseApp.database().ref(item).child(this.state.maxKey+1).update(memo)
    })
  }

  sameDate(){
    let memo = {
        favor: false,
        khoa: this.state.khoa +1,
        title: this.state.subject,
        detail: this.state.stt,
        key: this.state.maxKey,
      }
      AsyncStorage.getItem(ACCESS_TOKEN, (err, item) => {
          firebaseApp.database().ref(item).child(this.state.maxKey).child('content').child(this.state.khoa+1).update(memo)
    })
  }

  addMemo(){
    if(this.state.currentDate != this.state.lastDate){
      this.diffDate()
    } else {
      this.sameDate()
    }
    this.props.navigation.goBack()
  }
 
  async getKey(){
    let currentKey = await AsyncStorage.getItem(KEY);
    this.setState({maxKey: +currentKey})
  }

  async getDate(){
    let lastDate = await AsyncStorage.getItem(DATE);
    this.setState({lastDate: lastDate})
  }

  async getKhoa(){
    let lastKhoa = await AsyncStorage.getItem(KHOA);
    this.setState({khoa: lastKhoa})
    console.log('wer', this.state.khoa)
  }

  showKey(){
    alert(this.state.maxKey)
  }

  componentWillMount() {
    this.getDate();
    this.getKey();
    this.getKhoa();
    this.getCurrentDate();
  }

  getCurrentDate(){
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    this.setState({currentDate: date + '/' + month + '/' + year})
   }

   showCurrentDate(){
     Alert.alert(this.state.currentDate);
   }

  render() {
    return (
        <View style={{flex: 1}}>
            <View style={header.container}>
              <View style={header.rap}>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.goBack()}
                  >
                    <Image style={header.image2} source={require('../../../../icons/close.png')}/>
                </TouchableOpacity>
                <Text style={header.title}>What's on your mind...? </Text>
              </View>
            </View>
            <View style={{flex: 1}}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.wrapper}
              >
               <TextInput style={styles.textSubject} 
                          placeholder='Title....'
                          keyboardType= 'default'
                          multiline={true}
                          numberOfLines={1}
                          textAlignVertical={'top'}
                          onChangeText={(subject)=>{this.setState({subject})}}
                          underlineColorAndroid='transparent'
                      />
              <TextInput style={styles.textStatus} 
                          placeholder='Writing something....'
                          keyboardType= 'default'
                          multiline={true}
                          numberOfLines={30}
                          textAlignVertical={'top'}
                          onChangeText={(stt)=>{this.setState({stt})}}
                          underlineColorAndroid='transparent'
                      />
              </ScrollView>
              <View
            style={styles.containerin}
          >
            <TouchableOpacity
              onPress={()=>this.addMemo()}
            >
              <Image style={styles.bttadd} source={require('../../../../icons/upload.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        </View>
    )
  }
}

const header = StyleSheet.create({
  container: {
    backgroundColor: '#798ea5',
    height: 45,
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
    fontSize: 20,
    fontFamily: 'Relish Pro',
  },
  image: {
    height: 26,
    width: 26,
    marginLeft: 20
  },
  image1: {
    height: 26,
    width: 26,
    marginLeft: 105
  },
  image2: {
    height: 30,
    width: 30,
    marginRight: 16,
    marginLeft: 10,
  }
});
const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    padding: 20,
    width: '100%',
    height: '100%', 
  },
  containerin: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    top: 390,
    left: 280,
    height: 60,
    width: 60,
    marginBottom: 35,
    marginRight: 60,
    alignItems: 'flex-end'
  },
  bttadd: {
    width: 55,
    height: 55
  },
  container: {
      flex: 1, 
      justifyContent: 'flex-start',
      paddingLeft: 10,
      backgroundColor: '#fff',
      paddingRight: 10,
  },
  textStatus: {
      padding: 12,
      fontFamily: 'Relish Pro',
      fontSize: 18,
      paddingTop: 7,
      backgroundColor: '#fff',
  },
  textSubject: {
    padding: 12,
    paddingBottom: 7,
    fontFamily: 'Relish Pro Medium',
    fontSize: 19,
    borderBottomColor: '#798ea5',
    borderBottomWidth: 2,
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

