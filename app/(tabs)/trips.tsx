import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderTitle } from '@react-navigation/elements'

export default function trips() {
  return (
    <View style={styles.container}>
      <View>
         <Text style={styles.HeaderTitle}>Trips</Text>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontWeight:700, fontSize:16, marginBottom:20}}>Build the perfect trip</Text>
        <Text>Explore homes, experiences and services.</Text>
        <Text>When you book, your reservations will show up here</Text>
        <View style={styles.tripButton}>
          <Text style={{color:'white', fontSize:14 }}>Get started</Text>
        </View>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:50,
  },
  HeaderTitle:{
    fontSize :32, 
    fontWeight:'500',
  },
  tripButton:{
    backgroundColor: '#E31C5D',
    height:52,
    width: 118,
    borderRadius: 8,
    alignItems:'center',
    justifyContent: 'center',
    marginTop:20
  }
})