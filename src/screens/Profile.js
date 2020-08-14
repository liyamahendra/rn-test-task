import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

import mainPic from '../assets/images/main.png';
import profilePic1 from '../assets/images/1.png';
import profilePic2 from '../assets/images/2.png';
import profilePic3 from '../assets/images/3.png';
import profilePic4 from '../assets/images/4.png';
import profilePic5 from '../assets/images/5.png';
import profilePic6 from '../assets/images/6.png';

function Detail(props) {
  const { route, navigation } = props
  const { name } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Image source={profilePic1} style={styles.mainProfileImage} /> 
      <View style={styles.nameRow}>
        <Text style={styles.name}>Anna</Text>
        <Text style={styles.age}>19</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="md-school" size={24} color="black" />
        <Text style={styles.subtitle}>University of San Francisco</Text>
      </View>
      <View style={styles.row}>
        <EvilIcons name="location" size={24} color="black" />
        <Text style={styles.subtitle}>1 mile away</Text>
      </View>
      <View style={styles.divider}></View>
      <Text style={styles.description}>Moved from the East Coast &amp; just want to meet some new people.</Text>
      <View style={styles.divider}></View>
      <View style={styles.instagramTitleRow}>
        <Text style={styles.instagramTitle}>Recent Instagram Photos</Text>
        <View style={{flexDirection: "row"}}>
          <Entypo name="dot-single" size={48} color="#ea5a6c" />
          <Entypo name="dot-single" size={48} color="#e1e1e1" style={{marginLeft: -26}} />
        </View>
      </View>
      <View style={styles.imageRow}>
        <Image source={profilePic1} style={styles.profileImage} /> 
        <Image source={profilePic2} style={styles.profileImage} /> 
        <Image source={profilePic3} style={styles.profileImage} /> 
      </View>
      <View style={styles.imageRow}>
        <Image source={profilePic4} style={styles.profileImage} /> 
        <Image source={profilePic5} style={styles.profileImage} /> 
        <Image source={profilePic6} style={styles.profileImage} /> 
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.bigButton}>
          <Entypo name="cross" size={72} color="#fd1b60" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton}>
          <Entypo name="star" size={36} color="#0695e2" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bigButton, {paddingTop: 8}]}>
          <Entypo name="heart" size={64} color="#11e19d" />
        </TouchableOpacity>
        
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  },
  row: {
    flexDirection: "row",
    paddingLeft: 24
  },
  nameRow: {
    flexDirection: "row",
    paddingLeft: 24,
    paddingTop: 8
  },
  instagramTitleRow: {
    flexDirection: "row",
    paddingLeft: 24,
    justifyContent: "space-between",
    alignItems: "center"
  },
  name: {
    fontSize: 30,
    color: "#393939",
    fontWeight: "bold",
  },
  age: {
    fontSize: 30,
    color: "#393939",
    fontWeight: "300",
    marginLeft: 8
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 16,
    marginBottom: 8,
    color: "#808080"
  },
  description: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 16,
    paddingLeft: 8,
    color: "#808080",
    marginTop: 20,
    marginBottom: 20
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "#c8c8c8"
  },
  instagramTitle: {
    fontSize: 24,
    color: "#393939",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20
  },
  imageRow: {
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  mainProfileImage: {
    width: "100%",
    height: 180
  },
  profileImage: {
    width: "32%", 
    height: 120
  },
  buttonRow: {
    width: "70%",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: 'space-between'
  },
  bigButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  smallButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff"
  }
})

export default Detail