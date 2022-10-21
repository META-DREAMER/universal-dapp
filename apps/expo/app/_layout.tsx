import { Provider } from 'app/provider'
import { Stack, RootContainer } from 'expo-router'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { useColorScheme } from 'react-native'

export default function _layout() {
  const colorMode = useColorScheme()
  return (
    <Provider>
      <RootContainer theme={colorMode === 'dark' ? DarkTheme : DefaultTheme} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="settings"
          options={{ presentation: 'modal', title: 'Settings' }}
        />
      </Stack>
      {/*<Tabs>*/}
      {/*  <Tabs.Screen*/}
      {/*    name="(layout)"*/}
      {/*    options={{ headerShown: false, title: 'Home' }}*/}
      {/*  />*/}
      {/*  <Tabs.Screen name="second" options={{ title: 'Second' }} />*/}
      {/*</Tabs>*/}
    </Provider>
  )
}
