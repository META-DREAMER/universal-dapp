import { MotiLink } from 'solito/moti';
import { Box } from 'app/ui/Box';
import { H1, P, A, TextLink, Text } from 'app/ui/typography';
import { Row } from 'app/ui/layout';
import { useColorScheme } from 'nativewind';
import { Button } from 'app/ui/Button';
import { ConnectWalletButton } from 'app/lib/ConnectWalletButton';

export const HomeScreen: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Box className="flex-1 items-center justify-center p-3">
      <H1 className={'text-teal-6'}>Welcome to Solito.</H1>
      <Box className="max-w-xl">
        <P className="text-center">
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </P>
        <P className="text-center">
          Solito is made by{' '}
          <A
            href="https://twitter.com/fernandotherojo"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            Fernando Rojo
          </A>
          .
        </P>
        <P className="text-center">
          Cross Platform Expo Vector Icon{' '}
          {/*<Ionicons name="md-checkmark-circle" size={32} color="green" />*/}
        </P>
        <ConnectWalletButton />
        <Button
          className="mt-4"
          label={`Primary Button`}
          // onPress={toggleColorScheme}
        />

        <Button
          className="mt-4"
          intent="secondary"
          label={`Toggle Theme (${colorScheme})`}
          onPress={toggleColorScheme}
        />
      </Box>
      <Box className="h-[32px]" />
      <Row>
        <TextLink href="/fernando">Regular Link</TextLink>
        <Box className="w-[32px]" />
        <MotiLink
          href="/settings"
          animate={({ hovered, pressed }) => {
            'worklet';

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            };
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text
            selectable={false}
            className="text-green-10 text-base font-bold"
          >
            Moti Link
          </Text>
        </MotiLink>
      </Row>
    </Box>
  );
};
