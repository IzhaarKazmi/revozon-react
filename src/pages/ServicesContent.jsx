import { Link } from 'react-router-dom';

export default function ServicesContent() {
  return (
    <>
<section className="services-page">
    <div className="container">
        <div className="row">
            
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="services-two__single">
                    <div className="services-two__img-box">
                        <div className="services-two__img">
                            <img src="/assets/images/services/services-2-1.jpg" alt="" />
                        </div>
                        <div className="services-two__icon">
                            <span className="icon-ux-design"></span>
                        </div>
                    </div>
                    <div className="services-two__content">
                        <h3 className="services-two__title"><a href="ui-ux-design.php">UI/UX Design</a>
                        </h3>
                        <p className="services-two__text">Comprehensive IT management, including network
                            monitoring, data backup,</p>
                        <div className="services-two__plus">
                            <Link to="/ui-ux-design">
                                <span className="fas fa-plus"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                <div className="services-two__single">
                    <div className="services-two__img-box">
                        <div className="services-two__img">
                            <img src="/assets/images/services/services-2-2.jpg" alt="" />
                        </div>
                        <div className="services-two__icon">
                            <span className="icon-software-development"></span>
                        </div>
                    </div>
                    <div className="services-two__content">
                        <h3 className="services-two__title"><a href="software-development.php">APP Development</a>
                        </h3>
                        <p className="services-two__text">Comprehensive IT management, including network
                            monitoring, data backup,</p>
                        <div className="services-two__plus">
                            <Link to="/software-development">
                                <span className="fas fa-plus"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="500ms">
                <div className="services-two__single">
                    <div className="services-two__img-box">
                        <div className="services-two__img">
                            <img src="/assets/images/services/services-2-3.jpg" alt="" />
                        </div>
                        <div className="services-two__icon">
                            <span className="icon-product-design"></span>
                        </div>
                    </div>
                    <div className="services-two__content">
                        <h3 className="services-two__title"><a href="product-design.php">Product Design</a>
                        </h3>
                        <p className="services-two__text">Comprehensive IT management, including network
                            monitoring, data backup,</p>
                        <div className="services-two__plus">
                            <Link to="/product-design">
                                <span className="fas fa-plus"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="700ms">
                <div className="services-two__single">
                    <div className="services-two__img-box">
                        <div className="services-two__img">
                            <img src="/assets/images/services/services-2-4.jpg" alt="" />
                        </div>
                        <div className="services-two__icon">
                            <span className="icon-code"></span>
                        </div>
                    </div>
                    <div className="services-two__content">
                        <h3 className="services-two__title"><a href="web-development.php">Website Design</a>
                        </h3>
                        <p className="services-two__text">Comprehensive IT management, including network
                            monitoring, data backup,</p>
                        <div className="services-two__plus">
                            <Link to="/web-development">
                                <span className="fas fa-plus"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="900ms">
                <div className="services-two__single">
                    <div className="services-two__img-box">
                        <div className="services-two__img">
                            <img src="/assets/images/services/services-2-5.jpg" alt="" />
                        </div>
                        <div className="services-two__icon">
                            <span className="icon-promotion-1"></span>
                        </div>
                    </div>
                    <div className="services-two__content">
                        <h3 className="services-two__title"><Link to="/business-analysis">Business Analysis</Link>
                        </h3>
                        <p className="services-two__text">Comprehensive IT management, including network
                            monitoring, data backup,</p>
                        <div className="services-two__plus">
                            <Link to="/business-analysis">
                                <span className="fas fa-plus"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="1100ms">
                <div className="services-two__single">
                    <div className="services-two__img-box">
                        <div className="services-two__img">
                            <img src="/assets/images/services/services-2-6.jpg" alt="" />
                        </div>
                        <div className="services-two__icon">
                            <span className="icon-social-media-marketing"></span>
                        </div>
                    </div>
                    <div className="services-two__content">
                        <h3 className="services-two__title"><Link to="/web-development">Web Development</Link>
                        </h3>
                        <p className="services-two__text">Comprehensive IT management, including network
                            monitoring, data backup,</p>
                        <div className="services-two__plus">
                            <Link to="/web-development">
                                <span className="fas fa-plus"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>



<section className="contact-three">
    <div className="contact-three__bg-color">
        <div className="contact-three__bg-shape"
            style={{backgroundImage: 'url(/assets/images/shapes/contact-three-bg-shape.png)'}}></div>
    </div>
    <ul className="contact-three__sliding-text-list list-unstyled marquee_mode-3">
        <li>
            <h2 data-hover="Branding" className="contact-three__sliding-text-title">GET IN TOUCH *</h2>
        </li>
        <li>
            <h2 data-hover="Branding" className="contact-three__sliding-text-title">GET IN TOUCH *</h2>
        </li>
        <li>
            <h2 data-hover="Branding" className="contact-three__sliding-text-title">GET IN TOUCH *</h2>
        </li>
    </ul>
    <div className="container">
        <div className="row">
            <div className="col-xl-6">
                <div className="contact-three__left">
                    <div className="section-title text-left sec-title-animation animation-style2">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Get In Touch</span>
                        </div>
                        <h2 className="section-title__title title-animation">Conversation
                            <span>– Reach</span><br /><span>Out Anytime</span>
                        </h2>
                    </div>
                    <p className="contact-three__text">We&apos;re here to listen! Whether you have questions,
                        feedback,<br />
                        or just want to say hello, feel free to reach out. </p>
                    <ul className="contact-three__contact-list list-unstyled">
                        <li>
                            <div className="icon">
                                <span className="icon-email"></span>
                            </div>
                            <div className="content">
                                <span>Email Us</span>
                                <p><Link to="mailto:info@domain.com">info@domain.com</Link></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <span className="icon-call"></span>
                            </div>
                            <div className="content">
                                <span>Contact US</span>
                                <p><Link to="tel:9900567780"> 99 (00) 567 780</Link></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <span className="icon-pin"></span>
                            </div>
                            <div className="content">
                                <span>Our Address</span>
                                <p>1629 N. Dixie Avenue,<br /> Kentucky, 42701</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="contact-three__right">
                    <div className="contact-three__img-1">
                        <img src="/assets/images/resources/contact-three-img-1.png" alt="" />
                    </div>
                    <div className="contact-one__right">
                        <form className="contact-form-validated contact-one__form" action="/assets/inc/sendemail.php"
                            method="post">
                            
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <h4 className="contact-one__input-title">Full Name</h4>
                                    <div className="contact-one__input-box">
                                        <div className="contact-one__input-icon">
                                            <span className="icon-user"></span>
                                        </div>
                                        <input type="text" name="name" placeholder="Thomas Alison"
                                            required />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <h4 className="contact-one__input-title">Email Address</h4>
                                    <div className="contact-one__input-box">
                                        <div className="contact-one__input-icon">
                                            <span className="icon-mail"></span>
                                        </div>
                                        <input type="email" name="email" placeholder="thomas@domain.com"
                                            required />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <h4 className="contact-one__input-title">Phone Number</h4>
                                    <div className="contact-one__input-box">
                                        <div className="contact-one__input-icon">
                                            <span className="icon-phone-call"></span>
                                        </div>
                                        <input type="text" name="Phone" placeholder=" 12 (00) 123 4567 890"
                                            required />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <h4 className="contact-one__input-title">Subject</h4>
                                    <div className="contact-one__input-box">
                                        <div className="contact-one__input-icon">
                                            <span className="icon-edit"></span>
                                        </div>
                                        <input type="text" name="subject" placeholder="Subject" required />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <h4 className="contact-one__input-title">Inquiry about </h4>
                                <div className="contact-one__input-box text-message-box">
                                    <div className="contact-one__input-icon">
                                        <span className="icon-edit"></span>
                                    </div>
                                    <textarea name="message" placeholder="Write your message" required></textarea>
                                </div>
                                <div className="contact-one__btn-box">
                                    <button type="submit" className="thm-btn">Submit
                                        Now
                                        <span className="fas fa-arrow-right"></span></button>
                                </div>
                            </div>
                            <div className="result"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<section className="process-two">
    <div className="process-two__bg-shape" style={{backgroundImage: 'url(/assets/images/shapes/process-two-bg-shape.png)'}}>
    </div>
    <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
                <span className="section-title__tagline">Working Process</span>
            </div>
            <h2 className="section-title__title title-animation">How we <span>works</span>
            </h2>
        </div>
        <ul className="row list-unstyled">
            
            <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                <div className="process-two__single">
                    <div className="process-two__single-shape-1"></div>
                    <div className="process-two__single-shape-2"></div>
                    <div className="process-two__icon">
                        <span className="icon-self-service"></span>
                    </div>
                    <div className="process-two__count"></div>
                    <h3 className="process-two__title">Choose a Service</h3>
                    <p className="process-two__text">Continua scale empowered metrics with cost effective
                        innovation.</p>
                </div>
            </li>
            
            
            <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="process-two__single process-two__single-margin">
                    <div className="process-two__single-shape-1"></div>
                    <div className="process-two__single-shape-2"></div>
                    <div className="process-two__icon">
                        <span className="icon-conference"></span>
                    </div>
                    <div className="process-two__count"></div>
                    <h3 className="process-two__title">Request a Meeting</h3>
                    <p className="process-two__text">Continua scale empowered metrics with cost effective
                        innovation.</p>
                </div>
            </li>
            
            
            <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="500ms" data-wow-duration="1500ms">
                <div className="process-two__single">
                    <div className="process-two__single-shape-1"></div>
                    <div className="process-two__single-shape-2"></div>
                    <div className="process-two__icon">
                        <span className="icon-execution"></span>
                    </div>
                    <div className="process-two__count"></div>
                    <h3 className="process-two__title">Receive Custom Plan</h3>
                    <p className="process-two__text">Continua scale empowered metrics with cost effective
                        innovation.</p>
                </div>
            </li>
            
            
            <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="700ms" data-wow-duration="1500ms">
                <div className="process-two__single process-two__single-margin">
                    <div className="process-two__single-shape-1"></div>
                    <div className="process-two__single-shape-2"></div>
                    <div className="process-two__icon">
                        <span className="icon-results"></span>
                    </div>
                    <div className="process-two__count"></div>
                    <h3 className="process-two__title">Let’s Make it Happen</h3>
                    <p className="process-two__text">Continua scale empowered metrics with cost effective
                        innovation.</p>
                </div>
            </li>
            
        </ul>
    </div>
</section>



<section className="pricing-one">
    <div className="pricing-one__shape-1"></div>
    <div className="pricing-one__shape-2 float-bob-y">
        <img src="/assets/images/shapes/pricing-one-shape-2.png" alt="" />
    </div>
    <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
                <span className="section-title__tagline">Our Pricing Plan</span>
            </div>
            <h2 className="section-title__title title-animation">Popular Pricing <span>Package</span>
            </h2>
        </div>
        <div className="row">
            
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="pricing-one__single">
                    <div className="pricing-one__price-box">
                        <div className="pricing-one__price-box-shape"
                            style={{backgroundImage: 'url(/assets/images/shapes/pricing-one-price-box-shape-1.png)'}}>
                        </div>
                        <span>Basic Plan</span>
                        <h3 className="pricing-one__price">$35.00</h3>
                        <p className="pricing-one__price-sub-title">Get Popular Plan From Us</p>
                    </div>
                    <div className="pricing-one__points-and-btn">
                        <ul className="pricing-one__price-points list-unstyled">
                            <li>
                                <div className="icon">
                                    <span className="icon-check"></span>
                                </div>
                                <p>Multi-Language Content</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-check"></span>
                                </div>
                                <p>Programmable Chatbots</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-check"></span>
                                </div>
                                <p>Digital Analysis</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-check"></span>
                                </div>
                                <p>Social Media Marketing</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-check"></span>
                                </div>
                                <p>Technical Support</p>
                            </li>
                        </ul>
                        <div className="pricing-one__btn-box">
                            <Link to="/pricing" className="thm-btn">Choose Plan
                                <span className="fas fa-arrow-right"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                <div className="pricing-one__single">
                    <div className="pricing-one__single-shape-1"></div>
                    <div className="pricing-one__price-box">
                        <div className="pricing-one__price-box-shape"
                            style={{backgroundImage: 'url(/assets/images/shapes/pricing-one-price-box-shape-1.png)'}}>
                        </div>
                        <div className="pricing-one__recomanded">
                            <span>Recommended</span>
                        </div>
                        <span>Standard Plan</span>
                        <h3 className="pricing-one__price">$75.00</h3>
                        <p className="pricing-one__price-sub-title">Get Popular Plan From Us</p>
                    </div>
                    <div className="pricing-one__points-and-btn">
                        <ul className="pricing-one__price-points list-unstyled">
                            <li>
                                <div className="icon">
                                    <span className="icon-check"></span>
                                </div>
                                <p>Multi-Language Content</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-check"></span>
                                </div>
                                <p>Programmable Chatbots</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-check"></span>
                                </div>
                                <p>Digital Analysis</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-check"></span>
                                </div>
                                <p>Social Media Marketing</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-check"></span>
                                </div>
                                <p>Technical Support</p>
                            </li>
                        </ul>
                        <div className="pricing-one__btn-box">
                            <Link to="/pricing" className="thm-btn">
                                Choose Plan
                                <span className="fas fa-arrow-right"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                <div className="pricing-one__single">
                    <div className="pricing-one__price-box">
                        <div className="pricing-one__price-box-shape"
                            style={{backgroundImage: 'url(/assets/images/shapes/pricing-one-price-box-shape-1.png)'}}>
                        </div>
                        <span>Premium Plan</span>
                        <h3 className="pricing-one__price">$93.00</h3>
                        <p className="pricing-one__price-sub-title">Get Popular Plan From Us</p>
                    </div>
                    <div className="pricing-one__points-and-btn">
                        <ul className="pricing-one__price-points list-unstyled">
                            <li>
                                <div className="icon">
                                    <span className="icon-check"></span>
                                </div>
                                <p>Multi-Language Content</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-check"></span>
                                </div>
                                <p>Programmable Chatbots</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-check"></span>
                                </div>
                                <p>Digital Analysis</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-check"></span>
                                </div>
                                <p>Social Media Marketing</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-check"></span>
                                </div>
                                <p>Technical Support</p>
                            </li>
                        </ul>
                        <div className="pricing-one__btn-box">
                            <Link to="/pricing" className="thm-btn">
                                Choose Plan
                                <span className="fas fa-arrow-right"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>
    </>
  );
}
