import { Stack } from "expo-router";


export default function StackLayout(){
    return(
        <Stack>
            <Stack.Screen name="./(tabs)"/>
            <Stack.Screen name="./(pages)"/>
        </Stack>
    )
}