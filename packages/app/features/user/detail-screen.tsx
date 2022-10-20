import { H3, Container, View, Text } from 'dripsy'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <View variant={'layout.background'}>
      <Container variant={'centered'}>
        <H3 sx={{ mb: 'lg' }}>{`User ID: ${id}`}</H3>

        <TextLink href="/">
          <Text variant={'link'}>👈 Go Home</Text>
        </TextLink>
      </Container>
    </View>
  )
}
