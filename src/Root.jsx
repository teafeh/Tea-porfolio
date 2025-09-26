import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';


// This component ensures we scroll to the top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Root = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;