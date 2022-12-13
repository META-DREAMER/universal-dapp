import { Button, Text } from 'react-native';
import { useWalletConnect } from 'app/lib/walletconnect';
import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi';
import { useEffect } from 'react';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

export const ConnectWalletButton = () => {
  const connector = useWalletConnect();

  const { connect } = useConnect({
    connector: new WalletConnectConnector({
      options: {
        qrcode: false,
        connector,
      },
    }),
  });
  const { disconnect } = useDisconnect();

  const account = useAccount();
  const { data: balance } = useBalance({ address: account?.address });

  useEffect(() => {
    if (connector?.accounts?.length && !account) {
      connect();
    } else {
      disconnect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connector]);

  if (account) {
    return (
      <>
        <Button title="Disconnect" onPress={() => connector?.killSession()} />
        <Text>Account address: {account?.address}</Text>
        <Text>
          Balance: {balance?.formatted} {balance?.symbol}
        </Text>
      </>
    );
  }

  return <Button title="Connect" onPress={() => connector?.connect()} />;
};
