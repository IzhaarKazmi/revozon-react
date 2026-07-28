import { Link } from 'react-router-dom';

export default function MobileNav() {
  return (
    <div className="mobile-nav__wrapper">
      <div className="mobile-nav__overlay mobile-nav__toggler"></div>
      <div className="mobile-nav__content">
        <span className="mobile-nav__close mobile-nav__toggler">
          <i className="fa fa-times"></i>
        </span>

        <div className="logo-box">
          <Link to="/" aria-label="logo image">
            <img src="/assets/images/resources/logo-2.png" width="150" alt="" />
          </Link>
        </div>

        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <a href="mailto:info@Itzone25.com">info@Itzone25.com</a>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <a href="tel:9288006780">+92 ( 8800 ) - 6780</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-facebook-square"></a>
            <a href="#" className="fab fa-pinterest-p"></a>
            <a href="#" className="fab fa-instagram"></a>
          </div>
        </div>
      </div>
    </div>
  );
}
