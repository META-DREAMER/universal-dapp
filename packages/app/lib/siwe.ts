import { configureSIWE } from 'connectkit-next-siwe';
import { SESSION_SECRET } from 'app/config/env';

export const siwe = configureSIWE({
  session: { password: SESSION_SECRET },
  apiRoutePrefix: '/api/siwe',
});
