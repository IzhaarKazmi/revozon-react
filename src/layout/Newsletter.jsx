export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to your real newsletter provider
  };

  return (
    <section className="newsletter-one">
      <div className="container">
        <div className="newsletter-one__inner">
          <div className="newsletter-one__left">
            <h2 className="newsletter-one__title">Subcribe to Our Newsletter</h2>
            <p className="newsletter-one__text">Get the latest SEO tips and software insights straight to your inbox.</p>
          </div>
          <div className="newsletter-one__right">
            <form className="newsletter-one__form" onSubmit={handleSubmit}>
              <div className="newsletter-one__input">
                <input type="email" placeholder="Enter email address" required />
              </div>
              <button type="submit" className="thm-btn">
                Subscribe Now <span className="fas fa-arrow-right"></span>
              </button>
              <div className="checked-box">
                <input type="checkbox" name="skipper1" id="skipper" defaultChecked />
                <label htmlFor="skipper">
                  <span></span>by Subscribing. Your Accept Privacy policy
                </label>
              </div>
              <div className="result"></div>
            </form>
          </div>
        </div>
        <div id="particles-js-two"></div>
      </div>
    </section>
  );
}
