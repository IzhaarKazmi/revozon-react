import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path) => {
    // treat root as exact
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="main-header">
      <div className="main-menu__top">
        <div className="main-menu__top-inner">
          <ul className="list-unstyled main-menu__contact-list">
            <li>
              <div className="icon">
                <i className="icon-email"></i>
              </div>
              <div className="text">
                <p>
                  <a href="mailto:info@Itzone25.com">info@Itzone25.com</a>
                </p>
              </div>
            </li>
            <li>
              <div className="icon">
                <i className="icon-pin"></i>
              </div>
              <div className="text">
                <p>4124 Cimmaron Road, CA 92806</p>
              </div>
            </li>
          </ul>
          <p className="main-menu__top-welcome-text">Welcome to Revozon</p>
          <div className="main-menu__top-right">
            <p className="main-menu__social-title">Follow Us On:</p>
            <div className="main-menu__social">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="main-menu">
        <div className="main-menu__wrapper">
          <div className="main-menu__wrapper-inner">
            <div className="main-menu__left">
              <div className="main-menu__logo">
                <Link to="/">
                  <img src="/assets/images/resources/revozon-logo-2.png" alt="Revozon" />
                </Link>
              </div>
            </div>
            <div className="main-menu__main-menu-box">
              <a href="#" className="mobile-nav__toggler">
                <i className="fa fa-bars"></i>
              </a>
              <ul className="main-menu__list">
                <li className={isActive('/') ? 'current' : ''}>
                  <Link to="/">Home</Link>
                </li>
                <li className={isActive('/about') ? 'current' : ''}>
                  <Link to="/about">About</Link>
                </li>
                <li className={isActive('/services') ? 'current' : ''}>
                  <Link to="/services">Services</Link>
                </li>
                <li className={isActive('/contact') ? 'current' : ''}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="main-menu__right">
              <div className="main-menu__call">
                <div className="main-menu__call-icon">
                  <i className="icon-call"></i>
                </div>
                <div className="main-menu__call-content">
                  <p className="main-menu__call-sub-title">Call Anytime</p>
                  <h5 className="main-menu__call-number">
                    <a href="tel:9288006780">+92 ( 8800 ) - 6780</a>
                  </h5>
                </div>
              </div>
              <div className="main-menu__search-cart-box">
                <div className="main-menu__search-box">
                  <a href="#" className="main-menu__search searcher-toggler-box fal fa-search"></a>
                </div>
              </div>
              <div className="main-menu__btn-box">
                <Link to="/about" className="thm-btn">
                  Discover More
                  <span className="fas fa-arrow-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
    </header>
  );
}
