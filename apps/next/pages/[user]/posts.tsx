import { SecondScreen } from 'app/features/home/SecondScreen';
import { useParam } from 'app/features/user/UserDetailScreen';

export default function Posts() {
  const [user] = useParam('user');

  return (
    <>
      <SecondScreen title={`Posts by ${user}`} />
    </>
  );
}
