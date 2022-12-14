import { WagmiConfig, createClient } from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import { ALCHEMY_ID } from 'app/config/env';

const client = createClient(
  getDefaultClient({
    appName: 'METADREAM',
    alchemyId: ALCHEMY_ID,
  })
);

type Props = {
  children: React.ReactNode;
};

export const Web3Provider: React.FC<Props> = ({ children }) => {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider
        customTheme={{
          '--ck-border-radius': 'var(--border-lg)',

          '--ck-connectbutton-color': 'var(--gray12)',
          '--ck-connectbutton-background': 'var(--gray4)',
          '--ck-connectbutton-hover-background': 'var(--gray5)',
          '--ck-connectbutton-active-background': 'var(--gray6)',
          '--ck-connectbutton-border-radius': 'var(--border-md)',

          '--ck-primary-button-color': 'var(--gray12)',
          '--ck-primary-button-background': 'var(--gray4)',
          '--ck-primary-button-hover-background': 'var(--gray5)',
          '--ck-primary-button-active-background': 'var(--gray6)',
          '--ck-primary-button-border-radius': 'var(--border-lg)',

          '--ck-secondary-button-color': 'var(--gray12)',
          '--ck-secondary-button-background': 'var(--gray4)',
          '--ck-secondary-button-hover-background': 'var(--gray5)',
          '--ck-secondary-button-active-background': 'var(--gray6)',
          '--ck-secondary-button-border-radius': 'var(--border-lg)',

          '--ck-body-color': 'var(--gray12)',
          '--ck-body-divider': 'var(--gray6)',
          '--ck-spinner-color': 'var(--teal9)',
          '--ck-focus-color': 'var(--teal9)',
          '--ck-body-color-muted': 'var(--gray11)',
          '--ck-body-color-danger': 'var(--red9)',
          '--ck-body-color-valid': 'var(--green9)',
          '--ck-body-action-color': 'var(--gray9)',
          '--ck-overlay-background': 'var(--blackA9)',
          '--ck-tooltip-color': 'var(--gray11)',
          '--ck-tooltip-background': 'var(--gray3)',
          '--ck-tooltip-background-secondary': 'var(--gray2)',
          '--ck-body-background': 'var(--gray2)',
          '--ck-body-background-secondary': 'var(--gray2)',
          '--ck-body-background-transparent': 'var(--grayA2)',
          '--ck-body-background-secondary-hover-outline': 'var(--grayA2)',
          '--ck-dropdown-active-background': 'var(--teal3)',
        }}
      >
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  );
};