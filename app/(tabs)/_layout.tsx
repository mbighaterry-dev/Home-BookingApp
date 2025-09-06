import { Tabs } from "expo-router";

export default function Layout() {
    return(
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen name="index"/>
            <Tabs.Screen name="messages"/>
            <Tabs.Screen name="profile"/>
            <Tabs.Screen name="trips"/>
        </Tabs>
    )
}