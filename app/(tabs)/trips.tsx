import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import React from 'react'

export default function trips() {
  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.HeaderTitle}>Trips</Text>
          <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center', gap:20, marginBottom:50, marginTop:30}}>
        <View style={{alignItems:'center', gap: 2}}>
          <View style={{width:1, height: 42, backgroundColor: "#D9D9D9", marginHorizontal: 10, }}/>
          <View style={{backgroundColor:'#D9D9D9', borderRadius:24, height:15, width:15}}/>
          <View style={{width:1, height: 42, backgroundColor: "#D9D9D9", marginHorizontal: 10, }}/>
          <View style={{backgroundColor:'#D9D9D9', borderRadius:24, height:15, width:15}}/>
          <View style={{width:1, height: 42, backgroundColor: "#D9D9D9", marginHorizontal: 10, }}/>
          <View style={{backgroundColor:'#D9D9D9', borderRadius:24, height:15, width:15}}/>
          <View style={{width:1, height: 42, backgroundColor: "#D9D9D9", marginHorizontal: 10, }}/>
        </View>
        <View>
          <View style={styles.frame1}>
            <View style={{backgroundColor:'#D9D9D9', height:48, width:48, borderRadius:8}}/> 
            <View style={{backgroundColor:'#F5F4F4', height:12, width:128, borderRadius:4}}/>
          </View>
          <View style={styles.frame1}>
            <View style={{backgroundColor:'#D9D9D9', height:48, width:48, borderRadius:8}}/> 
            <View style={{backgroundColor:'#D9D9D9', height:12, width:128, borderRadius:4}}/>
          </View>
          <View style={styles.frame1}>
            <View style={{backgroundColor:'#D9D9D9', height:48, width:48, borderRadius:8}}/> 
            <View style={{backgroundColor:'#F5F4F4', height:12, width:128, borderRadius:4}}/>
          </View>
        </View>
      </View>     
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontWeight:700, fontSize:16, marginBottom:20}}>Build the perfect trip</Text>
          <Text style={{color:'#6A6A6A'}}>Explore homes, experiences and services.</Text>
          <Text style={{color:'#6A6A6A'}}>When you book, your reservations will show up here</Text>
          <TouchableOpacity style={styles.tripButton}>
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
   paddingTop: Platform.OS === 'android' ? 80 : 80,
  },
  HeaderTitle:{
    fontSize :32, 
    fontWeight:'500',
    marginHorizontal:20
  },
  tripButton:{
    backgroundColor: '#E31C5D',
    height:52,
    width: 118,
    borderRadius: 8,
    alignItems:'center',
    justifyContent: 'center',
    marginTop:20
  },
  frame1:{
    flexDirection:'row',  
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    shadowColor: '#232323',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    marginBottom:20,
    borderRadius: 16,
    alignItems:'center',
    gap:8,
    width:208,
    height: 64,
    padding:8
  },
})