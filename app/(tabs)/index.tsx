import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Home() {
  return (        
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'row', gap: 10, justifyContent:'flex-end', }}>
          <View style={{backgroundColor:'#dad8d8ff', padding:5, borderRadius:20}}>
              <Ionicons name="search" size={20}/>
          </View>
          <View style={{backgroundColor:'#dad8d8ff', padding:5, borderRadius:20}}>
          <Ionicons name="settings" size={20}/>
          </View>
        </View>
      <View style={{paddingHorizontal:20}}>
         <Text style={{fontSize :32, fontWeight:'500'}}>Profile</Text>
      <View style={styles.profileContainer}>
        <View style={styles.profileImage}>
            <Text style={{fontSize:40, color:"#FFFFFF", fontWeight:'700'}}>F</Text>
        </View>
        <Text style={styles.name}>Faizan</Text>
        <Text style={{ marginTop:10 }}>Guest</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.box}>
            <Image style={{height:100, width:100}} source={require('../../assets/images/85bcad890e12283f64a20921f06d56a55beb7807.png')}/>
            <Text style={{fontWeight:'500'}}>Connections</Text>
        </View>
        <View style={styles.box}>
            <Image style={{height:100, width:100}} source={require('../../assets/images/360feeda1295098c6fe53c2b6cce41389cd7d75c.png')}/>
            <Text style={{fontWeight:'500'}}>Past trips</Text>
        </View>
      </View>
      <View style={styles.host}>
        <Image source={require('../../assets/images/image 3 (1).png')}/>
        <View>
            <Text style={{fontWeight: 'bold'}}>Become a Host</Text>
            <Text>It is easy to start hosting and earn income.</Text>
        </View>
      </View>
      </View>
        <View style={{gap:20, paddingHorizontal:30, marginTop:20}}>
          <View style={styles.menuItem}>
            <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
              <Ionicons name='hand-left-outline' size={24}/>
              <Text style={{fontSize:14, fontWeight:'400'}}>Account settings</Text>
            </View>
            <Ionicons name='chevron-forward-outline'size={24} color={'gray'} />
          </View>
          <View style={styles.menuItem}>
            <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
              <Ionicons name='hand-left-outline' size={24}/>
              <Text style={{fontSize:14, fontWeight:'400'}}>Get help</Text>
            </View>
            <Ionicons name='chevron-forward-outline'size={24} color={'gray'} />
          </View>
          <View style={styles.menuItem}>
            <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
              <Ionicons name='hand-left-outline' size={24}/>
              <Text style={{fontSize:14, fontWeight:'400'}}>View profile</Text>
            </View>
            <Ionicons name='chevron-forward-outline'size={24} color={'gray'} />
          </View>
          <View style={styles.menuItem}>
            <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
              <Ionicons name='hand-left-outline' size={24}/>
              <Text style={{fontSize:14, fontWeight:'400'}}>Privacy</Text>
            </View>
            <Ionicons name='chevron-forward-outline'size={24} color={'gray'} />
        </View>
        <View style ={{borderBottomColor: "#ccc", borderBottomWidth: 1, marginVertical: 10,}}></View>
         <View style={styles.menuItem}>
            <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
              <Ionicons name='hand-left-outline' size={24}/>
              <Text style={{fontSize:14, fontWeight:'400'}}>Account settings</Text>
            </View>
            <Ionicons name='chevron-forward-outline'size={24} color={'gray'} />
          </View>
          <View style={styles.menuItem}>
            <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
              <Ionicons name='hand-left-outline' size={24}/>
              <Text style={{fontSize:14, fontWeight:'400'}}>Get help</Text>
            </View>
            <Ionicons name='chevron-forward-outline'size={24} color={'gray'} />
          </View>
          <View style={styles.menuItem}>
            <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
              <Ionicons name='hand-left-outline' size={24}/>
              <Text style={{fontSize:14, fontWeight:'400'}}>View profile</Text>
            </View>
            <Ionicons name='chevron-forward-outline'size={24} color={'gray'} />
          </View>
          <View style={styles.menuItem}>
            <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
              <Ionicons name='hand-left-outline' size={24}/>
              <Text style={{fontSize:14, fontWeight:'400'}}>Privacy</Text>
            </View>
            <Ionicons name='chevron-forward-outline'size={24} color={'gray'} />
        </View>
      </View>     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#eee',
        paddingTop:50,
        gap: 16
    },
    profileContainer:{
       width: 382,
       height: 253,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#232323',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 24,
    },
    profileImage:{
        backgroundColor:'#000',
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
        backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#232323',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 13,
    height:160,
    width: 180
    },
    host:{
    flexDirection:'row',  
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    shadowColor: '#232323',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    marginBottom:20,
    borderRadius: 20,
    alignItems:'center',
    gap:10,
    width:383,
    height: 80,
    marginTop:30
    },
    menuItem:{
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
})