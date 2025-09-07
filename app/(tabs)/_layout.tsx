import { Tabs } from "expo-router";
import { View, StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Layout() {
    return(
        <Tabs screenOptions={{headerShown:false}}>
            <StatusBar backgroundColor={'#eee'}/>
            <Tabs.Screen name="index" 
            options={{
                headerRight: () => (
                    <View style={{flexDirection: 'row', gap: 10}}>
                        <View style={{backgroundColor:'#F2F2F2', padding:5, borderRadius:20}}>
                            <Ionicons name="search" size={20}/>
                        </View>
                        <View style={{backgroundColor:'#F2F2F2', padding:5, borderRadius:20}}>
                        <Ionicons name="settings" size={20}/>
                        </View>
                    </View>
                )
            }}
            />
            <Tabs.Screen name="messages"/>
            <Tabs.Screen name="profile"/>
            <Tabs.Screen name="trips"/>
        </Tabs>
    )
}