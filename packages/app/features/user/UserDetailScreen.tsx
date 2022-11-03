import { createParam } from 'solito';
import { H3, TextLink } from 'app/ui/typography';
import { View } from 'app/ui/view';

export const { useParam } = createParam<{ user: string }>();

export function UserDetailScreen() {
  const [user] = useParam('user');

  return (
    <View className="flex-1 items-center justify-center p-3">
      <H3>{`User ID: ${user}`}</H3>

      <TextLink href="/">👈 Go Home</TextLink>
      <TextLink href={`/${user}/posts`}>Go to Posts</TextLink>
    </View>
  );
}
