import { Tabs } from 'expo-router'

export default function Layout() {
  return (
    // <Stack>
    //   <Stack.Screen name="index" />
    // </Stack>
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{ title: 'Home', headerShown: false }}
      />
      <Tabs.Screen name="second" options={{ title: 'Second' }} />
    </Tabs>
  )
  //   return <Stack />;
}
