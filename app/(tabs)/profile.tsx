import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function profile() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{backgroundColor:'#dad8d8ff', padding:5, borderRadius:20, width:30, marginBottom:20}}>
          <Ionicons name='arrow-back' size={20} color={'gray'}/>
        </View>
        <Text style={styles.title}>Personal info</Text>
      </View>  
      <View style={styles.frame}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
          <View style={{gap:5}}>
            <Text style={{fontWeight:'400', color:'#222222', fontSize:16}}>Legend name</Text>
            <Text style={{fontSize:14, color:'#6A6A6A'}}>Faizan Atiq</Text>
          </View>
          <Text style= {{textDecorationLine:'underline', fontWeight: '500', color:'#222222', fontSize:16}}>Edit</Text>
        </View>
      </View>    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  headerContainer:{
    paddingHorizontal:20,
    marginTop: 20
  },
  title:{
    fontSize :32, 
    fontWeight:'500',
    
  },
  frame:{
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    paddingVertical: 20
  }
})