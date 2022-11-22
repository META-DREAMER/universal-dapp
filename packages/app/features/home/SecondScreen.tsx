import { View } from 'app/ui/view';
import { ConnectWalletButton } from 'app/lib/ConnectWalletButton';

type SecondScreenProps = {
  title?: string;
};
export const SecondScreen: React.FC<SecondScreenProps> = ({
  title = 'Second Screen',
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <ConnectWalletButton />
    </View>
  );
};
