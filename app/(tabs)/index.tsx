 import { StyleSheet, Text, View, TextInput, FlatList, Image,  Dimensions, TouchableOpacity, } from 'react-native'
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';  
import sectionData from '../../component/sectionData';
import Section from '../../component/section';
import headerData from '../../component/header'

 export default function Home() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(headerData[0].title);
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
      style={styles.quickLinks}
      horizontal
      showsHorizontalScrollIndicator={false}
            data={headerData}
      keyExtractor={(item) => item.id }
      renderItem={({item}) => (
        <TouchableOpacity
        style={[
              styles.tab,
              selected === item.title && styles.activeTab, 

            ]}
            onPress={() => setSelected(item.title)}
            >
          <Image source={item.Image}/>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}

      /> 
      <FlatList
      style={styles.section}
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
    marginTop:50,

  },
  input:{
    width:300,
    fontSize:16,
    color:'black',
    fontWeight:'500',
    backgroundColor:'#ffffff',

  },
  section:{
    paddingVertical:40,
  },
  quickLinks:{
    paddingVertical:40,
  },
  tab: {
  alignItems: "center",
  paddingVertical: 8,
  paddingHorizontal: 14,
  borderRadius: 12,
  marginRight: 12,
},
activeTab: {
},
icon: {
  width: 28,
  height: 28,
  resizeMode: "contain",
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