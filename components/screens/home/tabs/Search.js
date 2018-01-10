import React, { Component } from "react";
import {
  View,
  Text,
  textInput,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";

import List from "./search/List";

const { width, height } = Dimensions.get("window");

// class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       search: ""
//     };
//   }

//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           flexDirection: "row",
//           alignItems: "center"
//         }}
//       >
//         <TextInput
//           style={search.textInput}
//           placeholder="Searching....."
//           keyboardType="default"
//           autoCapitalize="none"
//           onChangeText={search => {
//             this.setState({ search });
//           }}
//           underlineColorAndroid="transparent"
//         />
//         <TouchableOpacity>
//           <Image
//             style={tabs.bttadd}
//             source={require("../../../../icons/broom.png")}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={tabs.container}>
          <List search={this.state.search} />
        </View>
        <View style={tabs.containerin} elevation={10}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
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
            <TouchableOpacity>
              <Image
                style={tabs.bttadd}
                source={require("../../../../icons/broom.png")}
              />
            </TouchableOpacity>
          </View>
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
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  containerin: {
    justifyContent: "center",
    width: width * 0.92,
    top: height * 0.03,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 0,
    shadowOpacity: 0.7,
    height: height * 0.08,
    backgroundColor: "white",
    alignItems: "center",
    padding: 2
  },
  bttadd: {
    width: 30,
    height: 30,
    tintColor: "#566a81"
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
    width: 250,
    fontSize: 17,
    fontFamily: "Relish Pro",
    backgroundColor: "#fff"
  }
});
