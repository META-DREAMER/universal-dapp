import { useEffect, useMemo, useRef, useState } from 'react';

import type { Bytes } from '@ethersproject/bytes';

import { useLatestValueRef } from 'app/hooks/useLatestValueRef';

import { ConnectResult, UseWalletReturnType } from './types';
import { useWalletConnect } from 'app/lib/walletconnect';

const useWallet = (): UseWalletReturnType => {
  const walletConnectedPromiseResolveCallback = useRef<any>(null);
  const walletDisconnectedPromiseResolveCallback = useRef<any>(null);
  const connector = useWalletConnect();
  const [address, setAddress] = useState<string | undefined>();

  // we use this hook to prevent stale values in closures
  const walletConnectInstanceRef = useLatestValueRef(connector);

  const walletConnected = connector.connected;

  useEffect(() => {
    (async function fetchUserAddress() {
      if (connector.session?.accounts?.[0]) {
        const getAddress = (await import('@ethersproject/address')).getAddress;
        setAddress(getAddress(connector.session.accounts[0]));
      } else {
        setAddress(undefined);
      }
    })();
  }, [connector.session]);

  // WalletConnect connected
  useEffect(() => {
    if (walletConnectedPromiseResolveCallback.current && connector.connected) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const getAddress = require('@ethersproject/address').getAddress;
      walletConnectedPromiseResolveCallback.current({
        address: getAddress(connector.session?.accounts?.[0]),
        walletName: connector.peerMeta?.name,
      });
      walletConnectedPromiseResolveCallback.current = null;
    }
  }, [connector]);

  // WalletConnect disconnected
  useEffect(() => {
    if (
      walletDisconnectedPromiseResolveCallback.current &&
      !connector.connected
    ) {
      walletDisconnectedPromiseResolveCallback.current();
      walletDisconnectedPromiseResolveCallback.current = null;
    }
  }, [connector]);

  return useMemo(() => {
    const wcConnected = connector.connected;

    let walletName: string | undefined;
    if (wcConnected) {
      walletName = connector.peerMeta?.name;
    }
    return {
      address,
      connect: async () => {
        walletConnectInstanceRef.current.connect();
        return new Promise<ConnectResult>((resolve) => {
          walletConnectedPromiseResolveCallback.current = resolve;
        });
      },
      disconnect: async () => {
        if (walletConnectInstanceRef.current.connected) {
          walletConnectInstanceRef.current.killSession();
        }

        return new Promise<ConnectResult>((resolve) => {
          walletDisconnectedPromiseResolveCallback.current = resolve;
        });
      },
      name: walletName,
      connected: walletConnected,
      networkChanged: undefined,
      signMessageAsync: async (args: { message: string | Bytes }) => {
        if (walletConnectInstanceRef.current.connected) {
          const getAddress = (await import('@ethersproject/address'))
            .getAddress;

          const signature =
            await walletConnectInstanceRef.current.signPersonalMessage([
              args.message,
              getAddress(walletConnectInstanceRef.current.session.accounts[0]),
            ]);
          return signature;
        }
      },
    };
  }, [
    connector.connected,
    connector.peerMeta?.name,
    address,
    walletConnected,
    walletConnectInstanceRef,
  ]);
};

export { useWallet };
