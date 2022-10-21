import { Text, useSx, View, H1, P, Row, A, Container } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import Ionicons from '@expo/vector-icons/Ionicons'

type HomeProps = {
  text: string
}
export const HomeScreen: React.FC<HomeProps> = ({ text }) => {
  const sx = useSx()

  return (
    <View variant={'layout.background'}>
      <Container variant={'centered'}>
        <H1>Welcome to Solito.</H1>
        <View>
          <P sx={{ textAlign: 'center' }}>
            Here is a basic starter to show you how you can navigate from one
            screen to another. This screen uses the same code on Next.js and
            React Native.
          </P>
          <P sx={{ textAlign: 'center' }}>{text}</P>
          <P sx={{ textAlign: 'center' }}>
            Solito is made by{' '}
            <A
              href="https://twitter.com/fernandotherojo"
              // @ts-expect-error react-native-web only types
              hrefAttrs={{
                target: '_blank',
                rel: 'noreferrer',
              }}
              sx={{ color: 'blue' }}
            >
              Fernando Rojo
            </A>
            .
          </P>
          <P sx={{ textAlign: 'center' }}>
            Cross Platform Expo Vector Icon{' '}
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
          </P>
        </View>
        <View sx={{ height: 32 }} />
        <Row>
          <TextLink
            href="/fernando"
            textProps={{
              style: sx({
                variant: 'text.link',
              }),
            }}
          >
            Regular Link
          </TextLink>
          <View sx={{ width: 32 }} />
          <MotiLink
            href="/settings"
            animate={({ hovered, pressed }) => {
              'worklet'

              return {
                scale: pressed ? 0.95 : hovered ? 1.1 : 1,
                rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
              }
            }}
            transition={{
              type: 'timing',
              duration: 150,
            }}
          >
            <Text selectable={false} variant={'link'} sx={{ color: '$alert' }}>
              Moti Link
            </Text>
          </MotiLink>
        </Row>
      </Container>
    </View>
  )
}
