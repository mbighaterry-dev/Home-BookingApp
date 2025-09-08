import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Sleep from '../component/sleep'

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
      <View style={{gap:20, padding:20}}>
        <View style={{backgroundColor:'#F7F7F7', borderRadius:8, height: 74, width:384, padding:16}}>
          <Text style={{fontSize:14, fontStyle:400, color: '#6A6A6A'}}>Some info has automatically been translatd.</Text>
          <Text style={{textDecorationLine:'underline', fontSize:14, fontWeight:'500', color:""}}>Show original</Text>
        </View>
        <View style={{gap:5}}>
          <Text style={{color:'#222222', fontSize:14, fontWeight:'400'}}>One Bedroom Apartment in Downtown Doha, Next</Text>
          <Text style={{color:'#222222', fontSize:14, fontWeight:'400'}}>to National Meuseum. Rooftop wimming Pool.</Text>
          <Text style={{color:'#222222', fontSize:14, fontWeight:'400'}}>King Size Bed. Free Wifi, Free Parking && Free Gym</Text>
          <Text style={{marginBottom:20,color:'#222222', fontSize:14, fontWeight:'400'}}>Close to Meto.</Text>

          <Text style={{color:'#222222', fontSize:14, fontWeight:'400'}}>Welcome to Paramount - your home away from</Text>
          <Text style={{color:'#222222', fontSize:14, fontWeight:'400'}}>home. This stylish, modern apartment has it all to</Text>
        </View>
      </View>
      <View style={{borderTopWidth:1, borderColor:'#D9D9D9',  borderBottomWidth:1, margin:20  }}/>
      <View style={{paddingHorizontal:20}}>
        <Text style={{fontSize:18, fontWeight:700, color:'#000000', marginBottom:20,}}>Where you will sleep</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatlist}
        data={Sleep}
        renderItem={({item}) => (
        <View key={item.id} style={{marginRight:20}}>
        <Image source={item.Image}/>
        <Text style={{color:'#000000', fontSize: 14, fontWeight:'500', marginTop:5}}>{item.title}</Text>
        <Text style={{fontSize:12, fontWeight:'400', color:'#6A6A6A', marginTop:3}}>{item.price}</Text>
        </View>
        )}
        />
      </View>
      <View style={{borderTopWidth:1, borderColor:'#D9D9D9',  borderBottomWidth:1, margin:20  }}/>
      <View style={{paddingHorizontal:20, gap: 20}}>
        <Text style={{color:'#000000', fontSize:18, fontWeight:'500'}}>What this place offers</Text>
        <View style={{gap:20}}>
          <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
            <Ionicons name='hand-left-outline' size={24}/>
            <Text style={{fontSize:14, fontWeight:'400'}}>City skyline view</Text>
          </View>
          <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
            <Ionicons name='hand-left-outline' size={24}/>
            <Text style={{fontSize:14, fontWeight:'400'}}>Search beach access</Text>
          </View>
          <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
            <Ionicons name='hand-left-outline' size={24}/>
            <Text style={{fontSize:14, fontWeight:'400'}}>Kitchen</Text>
          </View>
          <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
            <Ionicons name='hand-left-outline' size={24}/>
            <Text style={{fontSize:14, fontWeight:'400'}}>Wifi</Text>
          </View>
          <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
            <Ionicons name='hand-left-outline' size={24}/>
            <Text style={{fontSize:14, fontWeight:'400'}}>Fitness center access</Text>
          </View>
          <TouchableOpacity style={{backgroundColor:'#c9c9c9ff', width: 382, height: 52, justifyContent:'center', alignItems:'center', borderRadius:8}}>
            <Text style={{ color:'#222222', fontSize:16, fontWeight:'500'}}>Show all 70 amenities</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{borderTopWidth:1, borderColor:'#D9D9D9',  borderBottomWidth:1, margin:20 , marginTop:20 }}/>
      <View style={{ gap: 20}}>
        <Text style={{color:'#000000', fontSize:18, fontWeight:'500',paddingHorizontal:20,}}>Map</Text>
        <View style={{gap:20,paddingHorizontal:20,}}>
          <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
            <Ionicons name='hand-left-outline' size={24}/>
            <Text style={{fontSize:14, fontWeight:'400'}}>City skyline view</Text>
          </View>
          <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
            <Ionicons name='hand-left-outline' size={24}/>
            <Text style={{fontSize:14, fontWeight:'400'}}>Search beach access</Text>
          </View>
          <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
            <Ionicons name='hand-left-outline' size={24}/>
            <Text style={{fontSize:14, fontWeight:'400'}}>Kitchen</Text>
          </View>
          <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
            <Ionicons name='hand-left-outline' size={24}/>
            <Text style={{fontSize:14, fontWeight:'400'}}>Wifi</Text>
          </View>
          <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
            <Ionicons name='hand-left-outline' size={24}/>
            <Text style={{fontSize:14, fontWeight:'400'}}>Fitness center access</Text>
          </View>         
        </View>
         <TouchableOpacity style={{backgroundColor:'#c9c9c9ff', width: 400, height: 42, justifyContent:'center', alignItems:'center', borderRadius:8,paddingRight:2 }}>
            <Text style={{ color:'#222222', fontSize:14, fontWeight:'500'}}>Rare find! This place is usually booked</Text>
          </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', padding: 20}}>
        <View style={{gap:5}}>
          <View style={{flexDirection:'row', gap: 3}}>
            <Text style={{textDecorationLine:'line-through', color:'#6A6A6A', fontWeight:'500', fontSize:'16'}}>$271</Text>
            <Text style={{ color:'#000000', fontWeight:'500', fontSize:'16'}}>$230</Text>
          </View>
          <View style={{flexDirection:'row', gap: 3}}>
            <Text style={{color:'#6A6A6A', fontSize:12, fontWeight:'400'}}>For 2 nights</Text>
            <Text style={{color:'#6A6A6A', fontSize:12, fontWeight:'400'}}>Aug 1-3</Text>
          </View>
        </View>
        <TouchableOpacity style={{backgroundColor:'#E31C5D', borderRadius:24, height:49, width:144, justifyContent:'center', alignItems:'center'}}>
          <Text style={{ color:'#FFFFFF', fontSize:14, fontWeight:'500'}}>Remove</Text>
        </TouchableOpacity>
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