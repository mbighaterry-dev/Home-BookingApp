import { StyleSheet, Text, View, ScrollView, Platform, Pressable, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function DetailInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("m***e@airbnb.com");
  const [name, setName] = useState("Faizan Atiq")
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable style={{backgroundColor:'#dad8d8ff', padding:5, borderRadius:20, width:30, marginBottom:20}} onPress={() => router.push('/(tabs)/Profile')}>
          <Ionicons name='arrow-back' size={20} color={'gray'}/>
        </Pressable>
        <Text style={styles.title}>Personal info</Text>
      </View> 
      <View>
        <View style= {styles.frame}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
            <View>
              <Text style={{fontWeight:'400', color:'#222222', fontSize:16}}>Legend name</Text>
              {!isEditing ? (
                <TextInput
                value= {name}
                onChangeText={setName}
                autoFocus
                />
              ): (
                <Text style={{fontSize:14, color:'#6A6A6A'}}>{name}</Text>
              )}    
            </View>
              <Pressable onPress={() => setIsEditing(!isEditing)}>
                <Text style= {{textDecorationLine:'underline', fontWeight: '500', color:'#222222', fontSize:16}}>{isEditing ? "Save" : "Add"}</Text>
              </Pressable>     
          </View>
        </View>
        {/* <View style={styles.frame}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
            <View style={{gap:5}}>
              <Text style={{fontWeight:'400', color:'#222222', fontSize:16}}>Legend name</Text>
              <Text style={{fontSize:14, color:'#6A6A6A'}}>Faizan Atiq</Text>
            </View>
            <Text style= {{textDecorationLine:'underline', fontWeight: '500', color:'#222222', fontSize:16}}>Edit</Text>
          </View>
        </View> */}
        <View style={styles.frame}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
            <View style={{gap:5}}>
              <Text style={{fontWeight:'400', color:'#222222', fontSize:16}}>Preferred first name</Text>
              <Text style={{fontSize:14, color:'#6A6A6A'}}>Not provided</Text>
            </View>
            <Text style= {{textDecorationLine:'underline', fontWeight: '500', color:'#222222', fontSize:16}}>Add</Text>
          </View>
       </View>
       <View style={styles.frame}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
            <View style={{gap:5}}>
              <Text style={{fontWeight:'400', color:'#222222', fontSize:16}}>Host display name for experiences and</Text>
              <Text style={{fontWeight:'400', color:'#222222', fontSize:16}}>services</Text>
              <Text style={{fontSize:14, color:'#6A6A6A'}}>Show my first name only</Text>
            </View>
            <Text style= {{textDecorationLine:'underline', fontWeight: '500', color:'#222222', fontSize:16}}>Edit</Text>
          </View>
       </View>
       <View style={styles.frame}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
            <View style={{gap:5}}>
              <Text style={{fontWeight:'400', color:'#222222', fontSize:16}}>Phone number</Text>
              <Text style={{fontSize:14, color:'#6A6A6A'}}>Not Provided</Text>
            </View>
            <Text style= {{textDecorationLine:'underline', fontWeight: '500', color:'#222222', fontSize:16}}>Add</Text>
          </View>
       </View>
       <View style={styles.frame}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
            <View>
              <Text style={{fontWeight:'400', color:'#222222', fontSize:16}}>Email</Text>
              {!isEditing ? (
                <TextInput
                style={styles.input}
                value= {email}
                onChangeText={setEmail}
                autoFocus
                />
              ): (
                <Text style={{fontSize:14, color:'#6A6A6A'}}>{email}</Text>
              )}              
            </View>
            <Pressable onPress={() => setIsEditing(!isEditing)}>
              <Text style= {{textDecorationLine:'underline', fontWeight: '500', color:'#222222', fontSize:16}}>{isEditing ? "save" : "Edit"}</Text>
            </Pressable>
          </View>
       </View>
       {/* <View style={styles.frame}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
            <View style={{gap:5}}>
              <Text style={{fontWeight:'400', color:'#222222', fontSize:16}}>Email</Text>
              <Text style={{fontSize:14, color:'#6A6A6A'}}>m***e@airbnb.com</Text>
            </View>
            <Text style= {{textDecorationLine:'underline', fontWeight: '500', color:'#222222', fontSize:16}}>Edit</Text>
          </View>
       </View> */}
       <View style={styles.frame}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
            <View style={{gap:5}}>
              <Text style={{fontWeight:'400', color:'#222222', fontSize:16}}>Adress</Text>
              <Text style={{fontSize:14, color:'#6A6A6A'}}>Not provided</Text>
            </View>
            <Text style= {{textDecorationLine:'underline', fontWeight: '500', color:'#222222', fontSize:16}}>Add</Text>
          </View>
       </View>
       <View style={styles.frame}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
            <View style={{gap:5}}>
              <Text style={{fontWeight:'400', color:'#222222', fontSize:16}}>Emergency contact</Text>
              <Text style={{fontSize:14, color:'#6A6A6A'}}>Not provided</Text>
            </View>
            <Text style= {{textDecorationLine:'underline', fontWeight: '500', color:'#222222', fontSize:16}}>Add</Text>
          </View>
       </View>
       <View style={styles.frame}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
            <View style={{gap:5}}>
              <Text style={{fontWeight:'400', color:'#222222', fontSize:16}}>Identity verification</Text>
              <Text style={{fontSize:14, color:'#6A6A6A'}}>Not provided</Text>
            </View>
            <Text style= {{textDecorationLine:'underline', fontWeight: '500', color:'#222222', fontSize:16}}>Start</Text>
          </View>
       </View>   
      </View>       
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: Platform.OS === 'android' ? 30 : 40,
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
  },
  input:{}
})