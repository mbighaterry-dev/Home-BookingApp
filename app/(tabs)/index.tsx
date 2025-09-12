 import { StyleSheet, Text, View, TextInput, FlatList, Image,  Dimensions, TouchableOpacity, } from 'react-native'
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';  
import sectionData from '../../component/sectionData';
import Section from '../../component/section';
import headerData from '../../component/header'
 export default function Home() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState("Homes");
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
      contentContainerStyle={styles.quickLinks}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={headerData}
      keyExtractor={(item) => item.title }
      renderItem={({item}) => (
        <TouchableOpacity
        style={styles.tab }
            onPress={() => setSelected(item.title)}
        >
          <View>
            <Image source={item.Image} style={styles.icon} resizeMode= "contain"/>
            {item.badge && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>NEW</Text>
              </View>
            )}
          </View>
          <Text
          style={[
            styles.label,
            selected === item.title && styles.selectedLabel
          ]}
          >{item.title}</Text>
            {selected === item.title && <View style={styles.underline} />}
        </TouchableOpacity>
      )}

      /> 
      <FlatList
      showsVerticalScrollIndicator={false}
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
    borderRadius: 30,
    padding:10,
    alignItems:'center',
    marginTop:50,
    width:'90%',
    alignSelf:'center'

  },
  input:{
    flex:1,
    fontSize:16,
    color:'black',
    fontWeight:'500',
    marginLeft:10,

  },
  section:{
    paddingVertical:20,
  },
  quickLinks:{
    marginTop: 30,
    marginBottom:30,
    paddingHorizontal: 20,
  },
  tab: {
  alignItems: "center",
   marginRight: 30,
   width: 70,
   height: 80,
   justifyContent:'flex-start'
},
icon: {
  width: 35,
  height: 35,
  marginBottom:2
},
label:{
  fontSize: 12,
  color: "#000000",
  fontWeight: "500",
  
},
selectedLabel:{
  color: "black",
  fontWeight: "bold",
},
badge: {
    position: "absolute",
    top: -8,
    right: -20,
    backgroundColor: "#334155",
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  underline: {
    height: 3,
    backgroundColor: "#000000",
    width: 35,
    marginTop: 3,
    borderTopLeftRadius:5,
    borderTopRightRadius:5    
  },
 
  
 })