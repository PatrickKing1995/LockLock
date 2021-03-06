import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  Alert,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { firebaseApp } from "../../../database/firebaseConfig";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      repassword: ""
    };
  }

  Registry() {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        Alert.alert(
          "REGISTER",
          "Successfull",
          [
            {
              text: "OK",
              onPress: () => this.props.navigation.navigate("MH_Login")
            }
          ],
          { cancelable: false }
        );
      })
      .catch(function(error) {
        Alert.alert(
          "REGISTER",
          "Something's wrong, please enter again!",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
        this.setState({
          email: "",
          password: ""
        });
      });
  }

  onClick = () => {
    if(this.state.email != '' && this.state.password !=''){
        if (this.state.password == this.state.repassword) {
            this.Registry();
          } else {
            Alert.alert(
              "REGISTER",
              "Password does not match the confirm password.",
              [
                {
                  text: "OK",
                  onPress: () =>
                    this.setState({
                      password: "",
                      repassword: ""
                    })
                }
              ],
              { cancelable: false }
            );
          }
    }else {
        Alert.alert(
            "REGISTER",
            "Please fill in full !",
            [
              {
                text: "OK",
              }
            ],
            { cancelable: false }
          );
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={header.container}>
          <View style={header.rap}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "flex-start"
              }}
            >
              <Image
                style={header.image2}
                source={require("../../../icons/back.png")}
              />
              <Text style={header.title}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View behavior="padding" style={styles.wrapper}>
          <StatusBar backgroundColor="#566a81" />
          <View style={styles.container}>
            <Text style={styles.textInvite}>Let's join to us....!</Text>
            <TouchableWithoutFeedback
              onPress={Keyboard.dismiss}
              accessible={false}
            >
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={email => {
                  this.setState({ email });
                }}
                underlineColorAndroid="transparent"
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={Keyboard.dismiss}
              accessible={false}
            >
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                secureTextEntry={true}
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={password => {
                  this.setState({ password });
                }}
                underlineColorAndroid="transparent"
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={Keyboard.dismiss}
              accessible={false}
            >
              <TextInput
                style={styles.textInput}
                placeholder="Repassword"
                secureTextEntry={true}
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={repassword => {
                  this.setState({ repassword });
                }}
                underlineColorAndroid="transparent"
              />
            </TouchableWithoutFeedback>

            <TouchableOpacity
              style={styles.buttonRegister}
              onPress={this.onClick}
            >
              <Text style={styles.textLogin}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#566a81"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: "#fff",
    fontWeight: "bold"
  },
  textInvite: {
    alignSelf: "center",
    width: 250,
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    fontFamily: "Relish Pro Medium",
    marginBottom: 40,
    backgroundColor: "transparent"
  },
  textInput: {
    alignSelf: "stretch",
    padding: 14,
    width: 250,
    fontFamily: "Relish Pro",
    marginBottom: 20,
    backgroundColor: "#fff"
  },
  buttonRegister: {
    alignSelf: "stretch",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#34495e"
  },
  buttonSignup: {
    alignSelf: "stretch",
    alignItems: "center",
    marginTop: 5,
    backgroundColor: "transparent"
  },
  textLogin: {
    color: "#F5F5F5",
    fontSize: 20,
    fontFamily: "Relish Pro Medium"
  },
  imagelogin: {
    width: 70,
    height: 70,
    marginBottom: 20,
    backgroundColor: "transparent"
  },
  textRegister: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#F5F5F5"
  },
  textRegular: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 14,
    color: "#fff"
  }
});

const header = StyleSheet.create({
  container: {
    backgroundColor: "#566a81",
    height: 45
  },
  rap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 7
  },
  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily: "Relish Pro Medium"
  },
  image2: {
    height: 30,
    width: 30,
    marginRight: 5,
    marginLeft: 10
  }
});
