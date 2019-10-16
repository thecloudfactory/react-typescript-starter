import { lazy } from 'react';

const Home = lazy(() => import(/* webpackChunkName: "home" */ './Home'));

export {
  Home
}