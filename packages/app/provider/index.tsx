import { Dripsy } from './dripsy';
import { Fonts } from './fonts';

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <Fonts>
      <Dripsy>{children}</Dripsy>
    </Fonts>
  );
}
