import { H3, Container, View, Text } from 'dripsy'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'

export const { useParam } = createParam<{ user: string }>()

export function UserDetailScreen() {
  const [user] = useParam('user')

  return (
    <View variant={'layout.background'}>
      <Container variant={'centered'}>
        <H3 sx={{ mb: 'lg' }}>{`User ID: ${user}`}</H3>

        <TextLink href="/">
          <Text variant={'link'}>👈 Go Home</Text>
        </TextLink>
        <TextLink href={`/${user}/posts`}>
          <Text variant={'link'}>Go to Posts</Text>
        </TextLink>
      </Container>
    </View>
  )
}
