function getEnvValue<T extends string | number>(
  v: string | undefined,
  defaultVal: T
): T {
  if (v) {
    return typeof defaultVal === 'number' ? (Number(v) as T) : (v as T);
  }
  console.warn(`Using default ENV variable: ${defaultVal}`);
  return defaultVal;
}

export const ALCHEMY_ID = getEnvValue(
  process.env.NEXT_PUBLIC_ALCHEMY_ID,
  'missing-alchemy-id'
);

export const NEXTAUTH_URL = getEnvValue(
  process.env.NEXTAUTH_URL,
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'missing-nextauth-url'
);

export const NEXTAUTH_SECRET = getEnvValue(process.env.NEXTAUTH_SECRET, '');
export const SESSION_SECRET = getEnvValue(process.env.SESSION_SECRET, '');
