import { View, H1, P, Container } from 'dripsy'
import { StatusBar } from 'expo-status-bar'

export const SettingsScreen: React.FC = () => {
  return (
    <View variant={'layout.background'}>
      <Container variant={'centered'}>
        <H1>Settings</H1>
        <P sx={{ textAlign: 'center' }}>Settings screen</P>
      </Container>
      <StatusBar style="light" />
    </View>
  )
}
