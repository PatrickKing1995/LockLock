import React, { Component } from 'react';
import { StyleSheet, 
    Text,
    View, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableOpacity , 
    AsyncStorage,
    Image,
    Alert } from 'react-native';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

  render() {
    return (
        <View behavior='padding' style={styles.wrapper}>

                <View style={styles.container}>

                    <Image style={styles.imagelogin} source={require('../../../logo/logo.png')}/>

                    <TextInput style={styles.textInput} 
                        placeholder='Email'
                        keyboardType= 'default'
                        autoCapitalize= 'none'
                        onChangeText= {(email)=>{this.setState({email})}}
                        underlineColorAndroid='transparent'
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='Password'
                        keyboardType= 'default'
                        autoCapitalize= 'none'
                        secureTextEntry={true}
                        onChangeText={(password)=>{this.setState({password})}}
                        underlineColorAndroid='transparent'
                    />
                    
                    <TouchableOpacity
                        onPress={()=>{this.props.navigation.navigate('ManHinh_SlideMenu')}}
                        style={styles.buttonLogin}
                    >
                        <Text style={styles.textLogin}>Login</Text>
                    </TouchableOpacity >
                    <TouchableOpacity 
                    ////
                        style={styles.buttonSignup}
                    >
                        <Text style={styles.textRegular}> Not a member? <Text style={styles.textRegister}>Sign up now.</Text></Text>
                    </TouchableOpacity >
                </View>
                    

            </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#837d80',  
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight:'bold',
    },
    textInput: {
        padding: 14,
        width: 250,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    buttonLogin: {
        padding: 12,
        width: 250,
        alignItems: 'center',
        backgroundColor: '#383335',
    },
    buttonSignup: {
        alignSelf: 'stretch',
        alignItems: 'center',
        marginTop: 5,
        backgroundColor: 'transparent',
    },
    textLogin: {
        color: '#F5F5F5',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imagelogin: {
        width: 260,
        height: 150,
        marginBottom: 20,
        backgroundColor: 'transparent',
    },
    textRegister: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#383335',
    },
    textRegular: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 14,
        color: '#fff',
    }
});

