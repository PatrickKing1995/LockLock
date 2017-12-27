import React, { Component } from 'react';
import { View, Text, StyleSheet, resizeMode,Image, ScrollView, TouchableOpacity,Alert  } from 'react-native'

export default class DateList extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={tabs.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.wrapper}
          >
            <Text style={styles.textInput}>
            Colonial America saw the dream realized in the interaction among classes. People of the time wrote about the new experience of equality. Employees could speak openly to their employers and believed that with dedication they could improve their status. During westward expansion, the American Dream led many to race for land and live rugged lives on the frontier. By nature of their hard work, they could set down roots on a piece of the expansive land open to homesteaders and pioneers. This idea of the American Dream was rather competitive and individualistic—people fought others to own a piece of land for themselves. In the early twentieth century, Americans discovered a shared dream in which citizens worked together to make life better for the American masses. Franklin Delano Roosevelt’s (FDR’s) New Deal programs promised safe, healthy futures for every American—a new understanding of the American Dream.

Many people who encouraged Americans to get involved in World War II did so believing that people all over the world deserved their chance to realize the American Dream. Participating in the war allowed Americans to put their national concept of idealism on display for the world. Americans fighting in the war were fighting for the preservation of the American Dream, which was summed up by FDR as the possession of four essential freedoms: freedom of speech, freedom of religion, freedom from want, and freedom from fear. People who could feed their families, keep them safe, worship as they pleased, and say how they felt were living the American Dream, he said.

After World War II, men returned from the war with a new American Dream in mind. Americans fantasized about homes filled with happy families who vacationed every summer. Veterans used the GI Bill to obtain low-interest mortgages on homes, resulting in a building boom and the creation of suburbs across the United States. The American Dream became closely tied to home ownership, and the American marketplace filled up with products to help improve life at home.

The American Dream transformed into an ideal that relied on people being able to afford all the modern accessories: cars, television sets, and college educations for one’s children. Television greatly helped define the American Dream as the acquisition of material goods. Americans dreamed of living ideal lives like those portrayed in shows such as Leave It to Beaver and Father Knows Best. Many Americans fueled their purchase of the new American Dream with credit cards, a choice that eventually affected the state of the American Dream.
            </Text>
          </ScrollView>
        </View>
        <View
          style={tabs.containerin}
        >
          <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('ManHinh_Add')}
          >
            <Image style={tabs.bttadd} source={require('../../../../icons/plus.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const content = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#f4f5f9',
  }
});

const tabs = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginRight: 50,
    alignItems: 'flex-end'
  },
  bttadd: {
    width: 60,
    height: 60
  },
  roll: {
    height: null,
    width: null
  }
})

const styles = StyleSheet.create({
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
