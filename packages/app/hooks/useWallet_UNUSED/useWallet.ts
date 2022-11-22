import { useEffect, useMemo, useRef, useState } from 'react';

import { useConnectModal } from '@rainbow-me/rainbowkit';
import {
  useAccount,
  useDisconnect,
  useNetwork,
  useSigner,
  useSignMessage,
} from 'wagmi';

import { useLatestValueRef } from '../useLatestValueRef';
import { ConnectResult, UseWalletReturnType } from './types';

const useWallet = (): UseWalletReturnType => {
  const walletConnectedPromiseResolveCallback = useRef<any>(null);
  const walletDisconnectedPromiseResolveCallback = useRef<any>(null);
  const wagmiData = useAccount({
    onConnect: ({ connector, ...rest }) => {
      const walletName = connector?.name;
      walletConnectedPromiseResolveCallback.current?.({
        ...rest,
        connector: connector,
        walletName,
      });
      walletConnectedPromiseResolveCallback.current = null;
    },
    onDisconnect: () => {
      walletDisconnectedPromiseResolveCallback.current?.();
      walletDisconnectedPromiseResolveCallback.current = null;
    },
  });
  const { signMessageAsync } = useSignMessage();
  const { data: wagmiSigner } = useSigner();
  const { chain } = useNetwork();
  const { openConnectModal } = useConnectModal();
  const { disconnect } = useDisconnect();

  const networkChanged = useMemo(() => !!chain && chain.id !== 137, [chain]);
  const [address, setAddress] = useState<string | undefined>();

  // we use this hook to prevent stale values in closures
  const openConnectModalRef = useLatestValueRef(openConnectModal);

  useEffect(() => {
    (async function fetchUserAddress() {
      if (wagmiData?.address) {
        setAddress(wagmiData?.address);
      } else {
        setAddress(undefined);
      }
    })();
  }, [wagmiData?.address]);

  const connected = wagmiData.isConnected && !!wagmiSigner?.provider && !!chain;

  return useMemo(() => {
    return {
      address,
      connect: async () => {
        openConnectModalRef.current?.();
        return new Promise<ConnectResult>((resolve) => {
          walletConnectedPromiseResolveCallback.current = resolve;
        });
      },
      connected,
      disconnect: async () => {
        localStorage.removeItem('walletconnect');
        disconnect();
        return new Promise<any>((resolve) => {
          if (wagmiData.isConnected) {
            walletDisconnectedPromiseResolveCallback.current = resolve;
          } else {
            resolve(true);
          }
        });
      },
      networkChanged,
      signMessageAsync,
    };
  }, [
    address,
    connected,
    networkChanged,
    signMessageAsync,
    openConnectModalRef,
    disconnect,
    wagmiData.isConnected,
  ]);
};

export { useWallet };
