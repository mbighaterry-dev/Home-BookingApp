import { Tabs } from "expo-router";
import { View, StatusBar, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Layout() {
    return(
        <Tabs
         screenOptions={{
            headerShown:false, 
            tabBarStyle:{
                backgroundColor:'#e3e0e0ff',
                borderTopWidth: 1,
                borderTopColor: '#D9D9D9'
            }
            }}>
            <StatusBar backgroundColor={'#eee'}/>
            <Tabs.Screen name="index"  
            options={{
                title:'Explore',
                tabBarIcon: () => (
                    <Ionicons name="search-outline" size={20}  color= '#000000'/>
                )
            }}
            />
            <Tabs.Screen name="product" 
            options={{
                title:'Wishlists', 
                tabBarIcon: () => (
                    <Ionicons name="heart-outline" size={20} color= '#000000'/>
                )
            }}
            />
            <Tabs.Screen name="trips"
            options={{
                title: 'Airbnb',
                tabBarIcon: () => (
                    <Image source={require('../../assets/images/Vector.png')} style={{tintColor:"#000000", }}/>
                )
            }}
            />
            <Tabs.Screen name="message"
            options={{
                title:'Message',
                tabBarIcon: () => (
                    <Ionicons name="mail-outline" size={20}  color= '#000000'/>
                )
               
            }}
            />
            <Tabs.Screen name="Profile"
            options={{
                title:'Profile',
                tabBarIcon: () => (
                    <Ionicons name="person-outline" size={20}  color= '#000000'/>
                )
            }}
            />
            
        </Tabs>
    )
}