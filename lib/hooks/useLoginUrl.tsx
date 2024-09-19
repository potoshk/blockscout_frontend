import { useRouter } from 'next/router';

import { route } from 'nextjs-routes';

import config from 'configs/app';

const feature = config.features.account;

// TODO @tom2drum remove this hook
export default function useLoginUrl() {
  const router = useRouter();
  return feature.isEnabled ?
    feature.authUrl + route({ pathname: '/auth/auth0', query: { path: router.asPath } }) :
    undefined;
}
