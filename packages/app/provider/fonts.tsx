import React from 'react'
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
  Inter_700Bold,
  Inter_300Light,
} from '@expo-google-fonts/inter'

type Props = {
  children: React.ReactNode
}

export const Fonts: React.FC<Props> = ({ children }) => {
  const [loaded] = useFonts({
    ['InterLight']: Inter_300Light,
    ['Inter']: Inter_400Regular,
    ['InterBold']: Inter_700Bold,
    ['InterBlack']: Inter_900Black,
  })
  if (!loaded) return null
  return <>{children}</>
}
