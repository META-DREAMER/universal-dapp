// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ConnectKitButton } from 'connectkit';

export const ConnectWalletButton = () => {
  // return <ConnectButton chainStatus="icon" showBalance={false} />;
  return <ConnectKitButton />;
};
