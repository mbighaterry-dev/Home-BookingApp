import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize :25, fontWeight:'bold', marginBottom:12}}>Profile</Text>
      <View style={styles.profileContainer}>
        <View style={styles.profileImage}>
            <Text style={{fontSize:40, color:"white", fontWeight:'700'}}>F</Text>
        </View>
        <Text style={styles.name}>Faizan</Text>
        <Text style={{color:'gray', marginTop:10 }}>Guest</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.box}>
            <Image style={{height:100, width:100}} source={require('../../assets/images/85bcad890e12283f64a20921f06d56a55beb7807.png')}/>
            <Text>Connections</Text>
        </View>
        <View style={styles.box}>
            <Image style={{height:100, width:100}} source={require('../../assets/images/360feeda1295098c6fe53c2b6cce41389cd7d75c.png')}/>
            <Text>Past trips</Text>
        </View>
      </View>
      <View style={styles.host}>
        <Image source={require('../../assets/images/image 3 (1).png')}/>
        <View>
            <Text>Become a Host</Text>
            <Text>It is easy to start hosting and earn income.</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#beb6b6ff',
        paddingHorizontal: 20,
        paddingTop:60,
    },
    profileContainer:{
       width: 382,
       height: 253,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    marginBottom:20,
    borderRadius: 24,
    },
    profileImage:{
        backgroundColor:'black',
        borderRadius: 55,
        width: 110,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center'
    },
    name:{
        fontSize:24,
        fontWeight: "600",

    },
    container2:{
        flexDirection: 'row',
            paddingTop: 15,
            justifyContent:'space-between'

    },
    box:{
        backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    marginBottom:20,
    borderRadius: 13,
    padding:20,
    height:160,
    width: 180
    },
    
})