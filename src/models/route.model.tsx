import AboutUs from '../components/pages/AboutUs';
import Main from '../components/pages/Main';

type RouteComponent = typeof Main | typeof AboutUs;

export type Route = {
  id: number;
  title: string;
  path: string;
  component: RouteComponent;
};
