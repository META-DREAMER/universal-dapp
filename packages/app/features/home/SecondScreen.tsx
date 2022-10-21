import { View, H1, P, Container } from 'dripsy'

type SecondScreenProps = {
  title?: string
}
export const SecondScreen: React.FC<SecondScreenProps> = ({
  title = 'Second Screen',
}) => {
  return (
    <View variant={'layout.background'}>
      <Container variant={'centered'}>
        <H1>{title}</H1>
        <P sx={{ textAlign: 'center', mb: 'md' }}>Another screen</P>
      </Container>
    </View>
  )
}
