import {
  getDefaultWallets,
  createAuthenticationAdapter,
  RainbowKitAuthenticationProvider,
} from '@rainbow-me/rainbowkit';
import { chains } from 'app/provider/web3/chains';
import { GetSiweMessageOptions } from '@rainbow-me/rainbowkit-siwe-next-auth';
import { ReactNode, useMemo } from 'react';
import { getCsrfToken, signIn, signOut, useSession } from 'next-auth/react';
import { SiweMessage } from 'siwe';

type UnconfigurableMessageOptions = {
  address: string;
  chainId: number;
  nonce: string;
};

type ConfigurableMessageOptions = Partial<
  Omit<SiweMessage, keyof UnconfigurableMessageOptions>
> & {
  [Key in keyof UnconfigurableMessageOptions]?: never;
};

export const { connectors } = getDefaultWallets({
  appName: 'METADREAM',
  chains,
});

interface RainbowKitSiweNextAuthProviderProps {
  enabled?: boolean;
  getSiweMessageOptions?: GetSiweMessageOptions;
  children: ReactNode;
}

export function RainbowKitSiweNextAuthProvider({
  children,
  enabled,
  getSiweMessageOptions,
}: RainbowKitSiweNextAuthProviderProps) {
  const { status } = useSession();
  const adapter = useMemo(
    () =>
      createAuthenticationAdapter({
        createMessage: ({ address, chainId, nonce }) => {
          const defaultConfigurableOptions: ConfigurableMessageOptions = {
            domain: window.location.host,
            statement: 'Sign in with Ethereum to the app.',
            uri: window.location.origin,
            version: '1',
          };

          const unconfigurableOptions: UnconfigurableMessageOptions = {
            address,
            chainId,
            nonce,
          };

          return new SiweMessage({
            ...defaultConfigurableOptions,

            // Spread custom SIWE message options provided by the consumer
            ...getSiweMessageOptions?.(),

            // Spread unconfigurable options last so they can't be overridden
            ...unconfigurableOptions,
          });
        },

        getMessageBody: ({ message }) => message.prepareMessage(),

        getNonce: async () => {
          const nonce = await getCsrfToken();
          if (!nonce) throw new Error();
          return nonce;
        },

        signOut: async () => {
          await signOut({ redirect: false });
        },

        verify: async ({ message, signature }) => {
          const response = await signIn('credentials', {
            message: JSON.stringify(message),
            redirect: false,
            signature,
          });

          return response?.ok ?? false;
        },
      }),
    [getSiweMessageOptions]
  );

  return (
    <RainbowKitAuthenticationProvider
      adapter={adapter}
      enabled={enabled}
      status={status}
    >
      {children}
    </RainbowKitAuthenticationProvider>
  );
}
