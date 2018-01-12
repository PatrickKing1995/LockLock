import React, { Component } from "react";
import {
  View,
  Text,
  textInput,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  SectionList,
  AsyncStorage,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { firebaseApp } from "../../../../database/firebaseConfig";
import DatePicker from "react-native-datepicker";
const { width, height } = Dimensions.get("window");

const ACCESS_TOKEN = "access_token";
const DATE = "date";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      search: "",
      date: ""
    };
    console.ignoredYellowBox = ["Setting a timer"];
  }

  litenForItem() {
    let accessToken = AsyncStorage.getItem(ACCESS_TOKEN, (err, item) => {
      firebaseApp
        .database()
        .ref(item)
        .on("value", dataSnapshot => {
          var arr = [];
          dataSnapshot.forEach(child => {
            arr.push({
              name: child.val()
              // _key: child.key
            });
            var new_arr = [];
            arr.map(item => {
              if (item.name.date == this.state.date) {
                new_arr.push({
                  data: item.name.content,
                  date: item.name.date,
                  khoa: item._key
                });
              }
            });
            this.setState({ dataSource: new_arr });
          });
        });
    });
  }
  // componentDidMount() {
  //   console.log("emb", this.state.search);
  //   this.litenForItem(this.itemRef);
  // }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={tabs.container}>
          <SectionList
            sections={this.state.dataSource}
            renderItem={({ item, index }) => {
              return (
                <View style={styleslist.itemlist}>
                  <Text style={styleslist.title}>{item.title}</Text>
                  <Text style={styleslist.item}>{item.detail}</Text>
                </View>
              );
            }}
            keyExtractor={(item, index) => index}
            stickySectionHeadersEnabled={true}
          />
        </View>
        <View style={tabs.containerin} elevation={10}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start"
            }}
          >
            <DatePicker
              style={{ width: 260 }}
              date={this.state.date}
              mode="date"
              placeholder="Searching date ........"
              format="DD/MM/YYYY"
              minDate="01-01-2000"
              maxDate="01-01-2030"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  tintColor: "#566a81",
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={date => {
                this.setState({ date: date.replace(/-/g, "/") });
                this.litenForItem();
              }}
            />
            {/* <TouchableWithoutFeedback
              onPress={Keyboard.dismiss}
              accessible={false}
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
            </TouchableWithoutFeedback> */}

            {/* <TouchableOpacity
              onPress={() => {
                this.litenForItem();
              }}
            >
              <Image
                style={tabs.bttadd}
                source={require("../../../../icons/magnify.png")}
              />
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    );
  }
}

const list = StyleSheet.create({
  wrapper: {
    // position: 'absolute',
    padding: 20,
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

const styleslist = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#51657c",
    fontFamily: "Relish Pro Medium"
  },
  item: {
    padding: 3,
    fontSize: 16,
    paddingLeft: 10,
    fontFamily: "Relish Pro"
  },
  itemlist: {
    flex: 1,
    width: width * 0.95,
    backgroundColor: "#fff",
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "column"
  },
  title: {
    fontSize: 17,
    height: 30,
    borderBottomColor: "#798ea5",
    borderBottomWidth: 2,
    paddingLeft: 3,
    fontFamily: "Relish Pro Medium Italic"
  }
});

const tabs = StyleSheet.create({
  container: {
    position: "absolute",
    top: height * 0.125,
    alignItems: "center",
    padding: 2,
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
    width: width * 0.75,
    fontSize: 17,
    fontFamily: "Relish Pro",
    backgroundColor: "#fff"
  }
});
