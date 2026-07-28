import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from './Loader';
import ChatPopup from './ChatPopup';
import Header from './Header';
import Footer from './Footer';
import Newsletter from './Newsletter';
import MobileNav from './MobileNav';
import SearchPopup from './SearchPopup';
import ScrollToTop from './ScrollToTop';
import useLegacyScripts from './useLegacyScripts';

export default function MainLayout() {
  const location = useLocation();

  useLegacyScripts();

  useEffect(() => {
    if (window && window.AOS && typeof window.AOS.refresh === 'function') {
      window.AOS.refresh();
    }

    if (window && typeof window.WOW === 'function') {
      try {
        new window.WOW().sync();
      } catch (e) {
        try {
          new window.WOW().init();
        } catch (err) {
          // ignore
        }
      }
    }

    if (window && window.jQuery) {
      try {
        window.jQuery(window).trigger('load');
      } catch (e) {
        // ignore
      }
    }

    if (window && typeof window.updateHeaderMenuState === 'function') {
      window.updateHeaderMenuState();
    }
  }, [location.pathname]);

  return (
    <div className="custom-cursor">
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>

      <Loader />
      <ChatPopup />

      <div className="page-wrapper">
        <Header />
        <Outlet key={location.pathname} />
        <Newsletter />
        <Footer />
      </div>

      <MobileNav />
      <SearchPopup />
      <ScrollToTop />
    </div>
  );
}
