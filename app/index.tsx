 import { StyleSheet, Text, View, TextInput, FlatList, Image,  Dimensions } from 'react-native'
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';  
import sectionData from './component/sectionData';
import Section from './component/section';
 export default function Home() {
  const [search, setSearch] = useState('');
  
   return (
    <LinearGradient 
    colors={['#E0DEDD', '#FEFEFD', '#0000000A']}
    start={{ x: 0, y: 0.5 }} end={{ x:0, y: 0 }}
     style={styles.maincontainer}>
      <View style={styles.container}>
        <Ionicons style={{ alignSelf: 'center' }} name="search" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder='Start your search'
          value={search} 
          onChangeText={setSearch}
          placeholderTextColor={'black'}
        />
      </View>   
      <FlatList
      data = {sectionData}
      renderItem={({ item }) => (
        <Section title={item.title} data={item.data} />
      )}
      keyExtractor={(item) => item.id}
      />     
    </LinearGradient>
   )
 }
 
 const styles = StyleSheet.create({
  maincontainer:{
    flex:1,
    alignItems:'center',
    paddingTop:50,
    backgroundColor:'#FEFEFD'
  },
  container:{
    flexDirection:'row',
    backgroundColor:'#ffffff',
    gap:10,
    borderRadius: 16,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
  },
  input:{
    width:300,
    fontSize:16,
    color:'black',
    fontWeight:'500',
        backgroundColor:'#ffffff',

  },
  // flatlist:{
  //   marginTop:20,
  //   height:Dimensions.get('window').height*0.4,
  // },
  // homecard:{
  //   alignItems:'center',
  //   margin:10,
  // }
  
 })