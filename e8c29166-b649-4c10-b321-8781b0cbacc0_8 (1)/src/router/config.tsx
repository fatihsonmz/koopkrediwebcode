
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const HowItWorksPage = lazy(() => import('../pages/how-it-works/page'));
const CooperativesPage = lazy(() => import('../pages/cooperatives/page'));
const InvestorsPage = lazy(() => import('../pages/investors/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/hakkimizda',
    element: <AboutPage />,
  },
  {
    path: '/nasil-calisir',
    element: <HowItWorksPage />,
  },
  {
    path: '/kooperatifler',
    element: <CooperativesPage />,
  },
  {
    path: '/yatirimcilar',
    element: <InvestorsPage />,
  },
  {
    path: '/iletisim',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
