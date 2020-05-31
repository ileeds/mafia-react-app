import Router from 'next/router';

export const PAGES = {
  GAMES: '/games',
};

const routeToDynamic = (pattern, url) => {
  Router.push(pattern, url);
};

export const routeToGames = () => {
  Router.push(PAGES.GAMES);
};

export default {
  routeToGames
};