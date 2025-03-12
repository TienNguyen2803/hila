
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from '../components/Common/Loading';
import AppLayout from '../layout/AppLayout';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));
// const Services = lazy(() => import('../pages/Services'));
const Contact = lazy(() => import('../pages/contact/Contact'));
const NotFound = lazy(() => import('../pages/notFound/index'));

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="services" element={<Services />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
