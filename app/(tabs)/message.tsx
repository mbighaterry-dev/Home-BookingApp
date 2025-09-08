import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import  { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Message() {
  const [activeIndex, setActiveIndex] = useState(0);
  const  categories = ["All", "Home", "Experences", "Traveling", "Support"]
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#dad8d8ff', padding:5, borderRadius:20, width:30, alignSelf:'flex-end'}}>
        <Ionicons name="notifications-outline" size={20}/>
      </View>
      <Text style={styles.title}>Message</Text>
      <View style={{marginTop:20}}>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollviewContainer}
        >
          {categories.map((item, index) => (
            <TouchableOpacity
            key={item}
            style={[
              styles.button,
              activeIndex === index && styles.activeButton,
            ]}
            onPress={() => setActiveIndex(index)}
            >
              <Text
              style={[
                styles.buttonText,
                activeIndex === index && styles.activeText
              ]}
              >{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={{gap:20, marginTop:30}}>
        <View style={styles.messagesContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/Vector.png')}/>
          </View>
          <View>
            <View style={{gap:7,}}>
              <View style={{gap:5}}>
                <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center'}}>
                  <Text style={{fontSize:14, fontWeight:'500', color:'#000000'}}>Airbnb Support</Text>
                  <Text style={{fontSize:14, fontWeight:'500', color:'#000000'}}>9:43</Text>
                </View>
                <Text style={{fontSize:14, fontWeight:'500', color:'#000000'}}>Airbnb: This conversation is closed. if you s...</Text>
              </View>          
              <Text style={{fontSize:12, fontWeight:'500', color:'#000000'}}>Closed</Text>
            </View>
          </View>        
        </View> 
        <View style={styles.messagesContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/Vector.png')}/>
          </View>
          <View>
            <View style={{gap:7,}}>
              <View style={{gap:5}}>
                <View style={{flexDirection:"row",gap:165 }}>
                  <Text style={{fontSize:14, fontWeight:'500', color:'#000000'}}>Airbnb Support</Text>
                  <Text style={{fontSize:14, fontWeight:'500', color:'#000000'}}>9:43</Text>
                </View>
                <Text style={{fontSize:14, fontWeight:'500', color:'#000000'}}>This conversation is closed</Text>
              </View>          
              <Text style={{fontSize:12, fontWeight:'500', color:'#000000'}}>Closed</Text>
            </View>
          </View>        
        </View>       
      </View>       
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:50 ,
    paddingHorizontal:20
    
  },
  title:{
        fontSize :32, 
        fontWeight:'500',
        
    },
    scrollviewContainer:{
      paddingHorizontal: 10,
    },
    button:{
      paddingVertical: 8,
      paddingHorizontal: 18,
      borderRadius: 20,
      marginRight: 10,
      backgroundColor:'#e0dfdfff'
    },
    activeButton:{
      backgroundColor:'#000000'
    },
    buttonText:{
      color:'#000000',
      fontWeight:'500'
    },
    activeText:{
      color: '#ffff'
    },
    messagesContainer:{
      flexDirection: 'row',
      gap: 10,
      width: 382,
    },
    imageContainer:{
      backgroundColor:'#222222',
      height: 64,
      width:64,
      borderRadius:32,
      alignItems:'center',
      justifyContent: 'center'
    },
})