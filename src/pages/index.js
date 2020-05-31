import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { routeToGames } from '../router/actions';

const Index = () => {
  const router = useRouter();
  const route = router.route;
  useEffect(() => {
    if (route === '/') {
      routeToGames();
    }
  });
  return null;
};

export default Index;