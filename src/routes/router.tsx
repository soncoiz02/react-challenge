import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/index'))
const DetailPage = lazy(() => import('../pages/detail/index'))

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/detail/:id',
    Component: DetailPage
  },
  {
    path: "*",
    Component: () => <Navigate to="/" replace />,
  },
])