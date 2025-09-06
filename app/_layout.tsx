import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, headerStyle: { backgroundColor: '#E0DEDD' } }} />
    </Stack>
  )
  // return <Stack screenOptions={{ headerShown: false, headerStyle: { backgroundColor: '#E0DEDD' } }} />;
}
