import { Link } from 'react-router-dom';

export default function PageHeader({ heading, subheading }) {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)' }}
      ></div>
      <div className="container">
        <div className="page-header__inner">
          <h3>{heading}</h3>
          <div className="thm-breadcrumb__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span className="icon-arrow-angle-pointing-to-right"></span>
              </li>
              <li>{subheading}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
