import { HomeScreen } from 'app/features/home/HomeScreen'
import { useContextKey } from 'expo-router/build/Route'
import { useNavigation } from 'expo-router'
import { useLayoutEffect } from 'react'

export default function Home() {
  const k = useContextKey()
  const nav = useNavigation()

  useLayoutEffect(() => {
    nav.setOptions({
      title: 'Home',
    })
  }, [])

  return <HomeScreen text={k} />
}
