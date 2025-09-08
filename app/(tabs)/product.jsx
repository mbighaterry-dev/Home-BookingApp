import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Product() {
  return (
    <ScrollView>
      {/* <View style={styles.imageContainer}>
        <Image
          // source={require('../../assets/images/Beautiful Image of Karata Towers, drone shot.png')}
          style={styles.image}
        />
        <TouchableOpacity
          style={[styles.iconButton, { left: 15 }]}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="share-outline" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="heart-outline" size={22} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>1 / 32</Text>
        </View>
      </View> */}
      <View style={styles.detail}>
        <View style={{justifyContent: 'center', alignItems:'center', marginBottom:'10'}}>
          <Text style={{fontSize:24, fontWeight:'500', color:'#000000'}}>Magic Apt with Rooftop Pool && </Text>
          <Text style={{fontSize:24, fontWeight:'500', color:'#000000'}}>The Pearl View!</Text>
        </View>        
        <View style={{justifyContent: 'center', alignItems:'center'}}>
          <Text style={{fontSize:14, color:'#6A6A6A', fontWeight:'400'}}>Entire rental unit in Dubai, United Ar Emirates</Text>
          <Text style={{fontSize:14, color:'#6A6A6A', fontWeight:'400'}}>4 guests - 1 beddroom - 2 beds - 1.5 baths  </Text>
        </View>    
        <View style={{flexDirection: "row" , justifyContent:'center', alignItems:'center', gap:30, marginTop:30}}>
          <Text style={{fontSize:'18', fontWeight:'500', color:'#000000'}}>8.83</Text>
          <View style={{width:1, height: 30, backgroundColor: "#D9D9D9",}}/>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:'18', fontWeight:'500', color:'#000000'}}>Guest</Text>
            <Text style={{fontSize:'14', fontWeight:'500', color:'#000000'}}>favorite</Text>
          </View>
          <View style={{width:1, height: 30, backgroundColor: "#D9D9D9",}}/>        
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:'18', fontWeight:'500', color:'#000000'}}>78</Text>
            <Text style={{fontSize:'14', fontWeight:'500', color:'#000000'}}>Reviews</Text>
          </View>
        </View>
      </View>
      <View style={{ padding:20, gap:20 }}>
        <View style={{borderTopWidth:1, borderColor:'#D9D9D9',  borderBottomWidth:1,  }}/>
        <View style={{flexDirection:'row',  gap: 10 , }}>
          <View style={{height:40, width:40, borderRadius:20, backgroundColor:'#D9D9D9'}}/>
          <View>
            <Text style={{fontSize:14, fontWeight:'500', color:'#222222'}}>Host by Faizan</Text>
            <Text style={{fontSize:14, fontWeight:'400', color:'#6A6A6A'}}>Superhost 2 years hosting</Text>
          </View>
        </View>
                <View style={{borderTopWidth:1, borderColor:'#D9D9D9',  borderBottomWidth:1,  }}/>
      </View>
      <View >
        <View style={{padding:20, gap:20 }}>
          <View style={{flexDirection:'row', gap:20, alignItems:'center',}}>
            <Ionicons name='hand-left-outline' size={24}/>
            <View>
              <Text style={{fontSize:14, fontWeight:'500' , color : '#222222', marginBottom:'5'}}>Swim in the infinity pool</Text>
              <Text  style={{color:'#6A6A6A', fontWeight:'400'}}>it some of the many things that makes this</Text>
              <Text  style={{color:'#6A6A6A', fontWeight:'400'}}>home special.</Text>
            </View>         
          </View>
          <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
            <Ionicons name='hand-left-outline' size={24}/>
            <View>
              <Text style={{fontSize:14, fontWeight:'500' , color : '#222222', marginBottom:'5'}}>At-home special</Text>
              <Text  style={{color:'#6A6A6A', fontWeight:'400'}}>The treadmill, stationary bike, yoga mat and </Text>
              <Text  style={{color:'#6A6A6A', fontWeight:'400'}}>free weights are ready for workout.</Text>
            </View>         
          </View>
          <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
            <Ionicons name='hand-left-outline' size={24}/>
            <View>
              <Text style={{fontSize:14, fontWeight:'500', color : '#222222', marginBottom:'5'}}>Dive right in</Text>
              <Text style={{color:'#6A6A6A', fontWeight:'400'}}>Check your self in the smartlock.</Text>
            </View>         
          </View>
          <View style={{borderTopWidth:1, borderColor:'#D9D9D9',  borderBottomWidth:1,  }}/>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  detail:{
    backgroundColo:'#ffffff',
    borderTopEndRadius:20,
    marginTop:50,
    justifyContent: 'center',
    alignSelf: 'center'
  },
})