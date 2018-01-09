import React, { Component } from "react";
import {
  View,
  Text,
  textInput,
  StyleSheet,
  TextInput,
  Dimensions
} from "react-native";
const { width, height } = Dimensions.get("window");

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  render() {
    return (
      <View style={search.bar}>
        <TextInput
          style={search.textInput}
          placeholder="Searching....."
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={search => {
            this.setState({ search });
          }}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

export default class Search extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={tabs.container}>
          <View
            // showsVerticalScrollIndicator={false}
            style={styles.wrapper}
          />
        </View>
        <View style={tabs.containerin}>
          <Header />
        </View>
      </View>
    );
  }
}

const tabs = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  containerin: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    width: width * 0.9,
    // height:100,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center"
  },
  bttadd: {
    width: 60,
    height: 60
  },
  roll: {
    height: null,
    width: null
  }
});

const styles = StyleSheet.create({
  wrapper: {
    //position: 'absolute',
    //margin: 10,
    width: "100%",
    height: "100%"
  },
  containerin: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    marginBottom: 35,
    marginRight: 40,
    alignItems: "flex-end"
  },
  bttadd: {
    width: 50,
    height: 50
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingLeft: 10,
    backgroundColor: "#fff",
    paddingRight: 10
  },
  textInput: {
    padding: 12,
    fontFamily: "Relish Pro",
    fontSize: 18,
    textAlign: "left",
    backgroundColor: "#fff"
  },
  textRegular: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 17,
    color: "#fff",
    fontFamily: "Relish Pro"
  }
});
const search = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#f4f5f9"
  },
  bar: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    height: 40
  },
  textInput: {
    padding: 12,
    width: 250,
    fontFamily: "Relish Pro",
    marginBottom: 20,
    backgroundColor: "#fff"
  }
});
