import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Notification() {
  return (
    <View style={styles.container}>
        <View style={{backgroundColor:'#dad8d8ff', padding:5, borderRadius:20, width:30, marginBottom:20}}>
            <Ionicons name='arrow-back' size={20} color={'gray'}/>
        </View>
      <Text style={styles.title}>Notification</Text>
      <View style={{marginTop:"40%"}}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontWeight:700, fontSize:18, marginBottom:20}}>No new notifications</Text>
            <Text style={{color:'#6A6A6A'}}>You have got a blank slate (for now). We will let you know </Text>
            <Text style={{color:'#6A6A6A'}}>When updates arrive</Text>
            <TouchableOpacity style={styles.notificationButton}>
                <Text style={{color:'white', fontSize:14 }}>Get started</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:50,
        marginHorizontal:20
    },
    title:{
        fontSize :32, 
        fontWeight:'500',
        
    },
    notificationButton:{
        backgroundColor: '#E31C5D',
        height:52,
        width: 118,
        borderRadius: 8,
        alignItems:'center',
        justifyContent: 'center',
        marginTop:20
  },
})