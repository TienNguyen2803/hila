import { RouteObject, useRoutes } from 'react-router-dom';
import { ROUTES } from '../constants/endpoint';
import App from '../pages/App';
import NotFound from '../pages/notFound';

const allRoutes: RouteObject[] = [
  {
    path: ROUTES.APP_ROOT,
    element: <App />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
];

export default function Router() {
  const route = useRoutes(allRoutes);
  return route;
}
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

// Lazy load pages
const Home = lazy(() => import('@/pages/Home'));
// Other pages will be added later

const Loading = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <CircularProgress />
  </Box>
);

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Additional routes will be added here */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
