import { Provider } from 'app/provider'
import { Stack, RootContainer } from 'expo-router'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { useColorScheme } from 'react-native'

export default function _layout() {
  const colorMode = useColorScheme()
  return (
    <Provider>
      <RootContainer theme={colorMode === 'dark' ? DarkTheme : DefaultTheme} />
      <Stack />
    </Provider>
  )
}
