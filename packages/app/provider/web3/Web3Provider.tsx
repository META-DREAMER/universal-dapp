import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
import { WagmiConfig } from 'wagmi';
import { chains } from './chains';
import { wagmiClient } from './wagmiClient';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

type Props = {
  session?: Session | null;
  children: React.ReactNode;
};

export const Web3Provider: React.FC<Props> = ({ children, session }) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <SessionProvider session={session} refetchInterval={0}>
        <RainbowKitSiweNextAuthProvider>
          <RainbowKitProvider chains={chains} modalSize="compact">
            {children}
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  );
};
