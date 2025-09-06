import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" options={{ headerShown: false, headerStyle: { backgroundColor: '#E0DEDD' } }} />
      <Stack.Screen name = './(tabs)/index.tsx'/>
    </Stack>
  )
  // return <Stack screenOptions={{ headerShown: false, headerStyle: { backgroundColor: '#E0DEDD' } }} />;
}
