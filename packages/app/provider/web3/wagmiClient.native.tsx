import { createClient, createStorage } from 'wagmi';
import { provider } from 'app/provider/web3/chains';
import { noopStorage } from '@wagmi/core';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import AsyncStorage from '@react-native-async-storage/async-storage';

const asyncStoragePersistor = createAsyncStoragePersister({
  storage: AsyncStorage,
});

export const wagmiClient = createClient({
  autoConnect: true,
  persister: asyncStoragePersistor,
  storage: createStorage({ storage: noopStorage }),
  provider,
});
