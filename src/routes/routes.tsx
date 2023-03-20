import AboutUs from '../components/pages/AboutUs';
import Main from '../components/pages/Main';
import { Route } from '../models/route.model';

const routes: Route[] = [
  {
    id: 1,
    title: 'Main',
    path: '/',
    component: Main,
  },
  {
    id: 2,
    title: 'About us',
    path: '/about-us',
    component: AboutUs,
  },
];

export default routes;
