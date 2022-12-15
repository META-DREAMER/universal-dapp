import { Box } from 'app/ui/Box';
import { ConnectWalletButton } from 'app/lib/ConnectWalletButton';

type SecondScreenProps = {
  title?: string;
};
export const SecondScreen: React.FC<SecondScreenProps> = () => {
  return (
    <Box className="flex-1 items-center justify-center">
      <ConnectWalletButton />
    </Box>
  );
};
