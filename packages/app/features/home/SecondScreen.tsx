import { View } from 'app/ui/view';
import { H1, P } from 'app/ui/typography';

type SecondScreenProps = {
  title?: string;
};
export const SecondScreen: React.FC<SecondScreenProps> = ({
  title = 'Second Screen',
}) => {
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1>{title}</H1>
      <P className="mb-4 text-center">Another screen</P>
    </View>
  );
};
