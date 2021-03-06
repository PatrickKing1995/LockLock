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
import Loading from "../../Loading";

const ACCESS_TOKEN = "access_token";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: true
    };
  }

  componentWillMount() {
    this.verifyToken();
  }

  async verifyToken() {
    try {
      let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
      if (accessToken) {
        this.props.navigation.navigate("ManHinh_Home");
      } else {
      }
      this.setState({ loading: false });
    } catch (error) {
      console.log("Something went wrong");
    }
  }

  getToken = () => {
    let user = firebaseApp.auth().currentUser;
    let accessToken = user.uid;
    AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
  };

  LoginPer() {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.getToken(), this.props.navigation.navigate("ManHinh_Home");
      })
      .catch(function(error) {
        Alert.alert(
          "LOGIN",
          "Fail",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      return (
        <View behavior="padding" style={styles.wrapper}>
          <StatusBar backgroundColor="#566a81" />
          <View style={styles.container}>
            <Image
              style={styles.imagelogin}
              source={require("../../../logo/logomainm.png")}
            />
            <TouchableWithoutFeedback
              onPress={Keyboard.dismiss}
              accessible={false}
            >
              <TextInput
                style={styles.textInput}
                placeholder="Username or email"
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
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={password => {
                  this.setState({ password });
                }}
                underlineColorAndroid="transparent"
              />
            </TouchableWithoutFeedback>

            <TouchableOpacity
              onPress={() => {
                this.LoginPer();
              }}
              style={styles.buttonLogin}
            >
              <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("MH_Register")}
              style={styles.buttonSignup}
            >
              <Text style={styles.textRegular}>
                {" "}
                Not a member?{" "}
                <Text style={styles.textRegister}>Sign up now.</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
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
    paddingLeft: 10,
    paddingRight: 10
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: "#fff",
    fontWeight: "bold"
  },
  textInput: {
    padding: 12,
    width: 250,
    fontFamily: "Relish Pro",
    marginBottom: 20,
    backgroundColor: "#fff"
  },
  buttonLogin: {
    padding: 12,
    width: 250,
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
    width: 280,
    height: 150,
    marginBottom: 10,
    backgroundColor: "transparent"
  },
  textRegister: {
    fontSize: 17,
    fontFamily: "Relish Pro Medium",
    color: "#34495e"
  },
  textRegular: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 17,
    color: "#fff",
    fontFamily: "Relish Pro"
  }
});
