import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Sleep from '../../component/sleep'

export default function Product() {
  return (
    <ScrollView style={styles.container}>
        <View>
          <Image
            source={require('../../assets/images/Beautiful Image of Karata Towers, drone shot.png')}
            style={styles.image}
          />

         
          <View style={styles.overlayRow}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="arrow-back" size={20} color="#000" />
            </TouchableOpacity>

            <View style={styles.rightIcons}>
              <TouchableOpacity style={styles.iconBtn}>
                <Ionicons name="share-outline" size={20} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBtn}>
                <Ionicons name="heart-outline" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>

       
          <View style={styles.indexBadge}>
            <Text style={styles.indexText}>1 / 32</Text>
          </View>
        </View>
        <View style={styles.bodyContainerContainer}>
              <View style={styles.detail}>
            <View style={{justifyContent: 'center', alignItems:'center', marginBottom:'10',}}>
              <Text style={{fontSize:20, fontWeight:'500', color:'#000000'}}>Magic Apt with Rooftop Pool && </Text>
              <Text style={{fontSize:20, fontWeight:'500', color:'#000000'}}>The Pearl View!</Text>
            </View>        
            <View style={{justifyContent: 'center', alignItems:'center', marginBottom:20}}>
              <Text style={{fontSize:14, color:'#6A6A6A', fontWeight:'400'}}>Entire rental unit in Dubai, United Ar Emirates</Text>
              <Text style={{fontSize:14, color:'#6A6A6A', fontWeight:'400'}}>4 guests - 1 beddroom - 2 beds - 1.5 baths  </Text>
            </View>    
            <View style={{flexDirection: "row" , justifyContent:'center', alignItems:'center',  gap:20, marginBottom:20}}>
              <Text style={{fontSize:'14', fontWeight:'500', color:'#000000'}}>8.83</Text>
              <View style={{width:1, height: 30, backgroundColor: "#D9D9D9",}}/>
              <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:'14', fontWeight:'500', color:'#000000'}}>Guest</Text>
                <Text style={{fontSize:'14',  color:'#000000'}}>favorite</Text>
              </View>
              <View style={{width:1, height: 30, backgroundColor: "#D9D9D9",}}/>        
              <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:'14', fontWeight:'500', color:'#000000'}}>78</Text>
                <Text style={{fontSize:'14', color:'#000000'}}>Reviews</Text>
              </View>
            </View>
          </View> 
          <View style={{ paddingHorizontal:20, gap:20 }}>
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
            <View style={{backgroundColor:'#F7F7F7', borderRadius:8, height: 74, width:350, padding:16}}>
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
          <View>
          </View>       
        </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:60,
    marginBottom: 20,

  },
  detail:{
    backgroundColo:'#ffffff',
    borderTopEndRadius:20,
    marginTop:50,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  bodyContainer:{

  },
  
  overlayRow: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconBtn: {
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 20,
    marginHorizontal: 4,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  rightIcons: {
    flexDirection: "row",
  },
  indexBadge: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#000",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  indexText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  
})