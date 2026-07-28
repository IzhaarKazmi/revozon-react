import { Link } from 'react-router-dom';

export default function AboutContent() {
  return (
    <>
<section className="about-one">
    <div className="about-one__shape-2 float-bob">
        <img src="/assets/images/shapes/about-one-shape-2.png" alt="not found" />
    </div>
    <div className="about-one__shape-3 float-bob-y">
        <img src="/assets/images/shapes/about-one-shape-3.png" alt="not found" />
    </div>
    <div className="container">
        <div className="row">
            <div className="col-xl-6">
                <div className="about-one__left">
                    <div className="section-title text-left sec-title-animation animation-style2">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">About Us</span>
                        </div>
                        <h2 className="section-title__title title-animation">Boost Business with Our <br /> Innovative
                            <span> IT Solutions</span>
                        </h2>
                    </div>
                    <p className="about-one__text">Innovating and empowering businesses with tailored solutions for
                        success<br /> and growth. Empowering businesses to create meaningful innovation.</p>
                    <ul className="about-one__points list-unstyled">
                        <li>
                            <div className="icon">
                                <span className="icon-award"></span>
                            </div>
                            <div className="content">
                                <h4>Award-Winning Company.</h4>
                                <p>Partner with us to unlock new possibilities, drive progress, and shape<br /> a
                                    future filled with success</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <span className="icon-certified"></span>
                            </div>
                            <div className="content">
                                <h4>Certified Company</h4>
                                <p>Partner with us to unlock new possibilities, drive progress, and shape<br /> a
                                    future filled with success</p>
                            </div>
                        </li>
                    </ul>
                    <div className="about-one__btn-and-client-info">
                        <div className="about-one__btn-box">
                            <Link to="/about" className="thm-btn">Learn More
                                <span className="fas fa-arrow-right"></span>
                            </Link>
                        </div>
                        <div className="about-one__client-info-inner">
                            <div className="about-one__client-info">
                                <div className="about-one__client-img-inner">
                                    <div className="about-one__client-img">
                                        <img src="/assets/images/resources/about-one-client-img-1.jpg" alt="not found" />
                                    </div>
                                </div>
                                <div className="about-one__client-details">
                                    <h5>Adam Smith</h5>
                                    <p>ceo,Itzone</p>
                                </div>
                            </div>
                            <div className="about-one__client-sign">
                                <img src="/assets/images/resources/about-one-client-sign.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="about-one__right wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                    <div className="about-one__img-box">
                        <div className="about-one__shape-1 float-bob-x">
                            <img src="/assets/images/shapes/about-one-shape-1.png" alt="" />
                        </div>
                        <div className="about-one__img">
                            <img src="/assets/images/resources/about-one-img-1.jpg" alt="" />
                        </div>
                        <div className="about-one__img-2">
                            <img src="/assets/images/resources/about-one-img-2.jpg" alt="" />
                        </div>
                        <div className="about-one__video-link">
                            <a href="https://www.youtube.com/watch?v=rbFoRH2deeY" className="video-popup">
                                <div className="about-one__video-icon">
                                    <span className="fa fa-play"></span>
                                    <i className="ripple"></i>
                                </div>
                            </a>
                        </div>
                        <div className="about-one__client-box">
                            <ul className="about-one__client-box-img-list list-unstyled">
                                <li>
                                    <div className="about-one__client-box-img">
                                        <img src="/assets/images/resources/about-one-client-img-1-1.jpg" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="about-one__client-box-img">
                                        <img src="/assets/images/resources/about-one-client-img-1-2.jpg" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="about-one__client-box-img">
                                        <img src="/assets/images/resources/about-one-client-img-1-3.jpg" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <Link to="/clients" className="about-one__client-box-img">
                                        <span className="fas fa-plus"></span>
                                    </Link>
                                </li>
                            </ul>
                            <p className="about-one__client-text"><span className="odometer" data-count="120">00</span><span
                                    className="about-one__client-text-letter">K</span> Satisfied Client</p>
                        </div>
                        <div className="about-one__experience-box">
                            <div className="about-one__experience-count-box">
                                <h3 className="odometer" data-count="25">00</h3>
                                <span> </span>
                            </div>
                            <p className="about-one__experience-text">Years of
                                Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<section className="service-one">
    <div className="services-one__shape-1"></div>
    <div className="services-one__shape-2 float-bob-x">
        <img src="/assets/images/shapes/services-one-shape-2.png" alt="" />
    </div>
    <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
                <span className="section-title__tagline">Our Services</span>
            </div>
            <h2 className="section-title__title title-animation">Innovative IT Services
                <br /> Tailored <span>For Your Success.</span>
            </h2>
        </div>
        <div className="service-one__carousel owl-theme owl-carousel">
            
            <div className="item">
                <div className="service-one__single-inner">
                    <div className="service-one__single-wrap">
                        <div className="service-one__single">
                            <div className="service-one__single-shape-1"></div>
                            <div className="service-one__icon">
                                <span className="icon-social-media-marketing"></span>
                            </div>
                            <h3 className="service-one__title"><a href="software-development.php">Software
                                    Development</a></h3>
                            <p className="service-one__text">Innovating and empowering businesses with tailored
                                solutions for success and growth.</p>
                        </div>
                    </div>
                    <div className="service-one__btn-box">
                        <a href="software-development.php" className="thm-btn">Read More
                            <span className="fas fa-arrow-right"></span>
                        </a>
                    </div>
                </div>
            </div>
            
            
            <div className="item">
                <div className="service-one__single-inner">
                    <div className="service-one__single-wrap">
                        <div className="service-one__single">
                            <div className="service-one__single-shape-1"></div>
                            <div className="service-one__icon">
                                <span className="icon-financial-risk"></span>
                            </div>
                            <h3 className="service-one__title"><a href="web-development.php">Risk
                                    Management</a></h3>
                            <p className="service-one__text">Innovating and empowering businesses with tailored
                                solutions for success and growth.</p>
                        </div>
                    </div>
                    <div className="service-one__btn-box">
                        <a href="web-development.php" className="thm-btn">Read More
                            <span className="fas fa-arrow-right"></span>
                        </a>
                    </div>
                </div>
            </div>
            
            
            <div className="item">
                <div className="service-one__single-inner">
                    <div className="service-one__single-wrap">
                        <div className="service-one__single">
                            <div className="service-one__single-shape-1"></div>
                            <div className="service-one__icon">
                                <span className="icon-ux-design"></span>
                            </div>
                            <h3 className="service-one__title"><a href="ui-ux-design.php">UI/UX Design</a></h3>
                            <p className="service-one__text">Innovating and empowering businesses with tailored
                                solutions for success and growth.</p>
                        </div>
                    </div>
                    <div className="service-one__btn-box">
                        <a href="ui-ux-design.php" className="thm-btn">Read More
                            <span className="fas fa-arrow-right"></span>
                        </a>
                    </div>
                </div>
            </div>
            
            
            <div className="item">
                <div className="service-one__single-inner">
                    <div className="service-one__single-wrap">
                        <div className="service-one__single">
                            <div className="service-one__single-shape-1"></div>
                            <div className="service-one__icon">
                                <span className="icon-promotion"></span>
                            </div>
                            <h3 className="service-one__title"><a href="digital-marketing.php">Digital
                                    Marketing</a></h3>
                            <p className="service-one__text">Innovating and empowering businesses with tailored
                                solutions for success and growth.</p>
                        </div>
                    </div>
                    <div className="service-one__btn-box">
                        <a href="digital-marketing.php" className="thm-btn">Read More
                            <span className="fas fa-arrow-right"></span>
                        </a>
                    </div>
                </div>
            </div>
            
            
            <div className="item">
                <div className="service-one__single-inner">
                    <div className="service-one__single-wrap">
                        <div className="service-one__single">
                            <div className="service-one__single-shape-1"></div>
                            <div className="service-one__icon">
                                <span className="icon-implement"></span>
                            </div>
                            <h3 className="service-one__title"><a href="software-development.php">Cloud
                                    Provider</a></h3>
                            <p className="service-one__text">Innovating and empowering businesses with tailored
                                solutions for success and growth.</p>
                        </div>
                    </div>
                    <div className="service-one__btn-box">
                        <a href="software-development.php" className="thm-btn">Read More
                            <span className="fas fa-arrow-right"></span>
                        </a>
                    </div>
                </div>
            </div>
            
            
            <div className="item">
                <div className="service-one__single-inner">
                    <div className="service-one__single-wrap">
                        <div className="service-one__single">
                            <div className="service-one__single-shape-1"></div>
                            <div className="service-one__icon">
                                <span className="icon-monitor"></span>
                            </div>
                            <h3 className="service-one__title"><a href="business-analysis.php">Data Analytics</a>
                            </h3>
                            <p className="service-one__text">Innovating and empowering businesses with tailored
                                solutions for success and growth.</p>
                        </div>
                    </div>
                    <div className="service-one__btn-box">
                        <a href="business-analysis.php" className="thm-btn">Read More
                            <span className="fas fa-arrow-right"></span>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>



<section className="sliding-text-one">
    <div className="sliding-text-one__wrap">
        <ul className="sliding-text-one__list list-unstyled marquee_mode-1">
            <li>
                <h2 data-hover="UI/UX Design" className="sliding-text-one__title">UI/UX Design</h2>
                <span className="icon-star"></span>
            </li>
            <li>
                <h2 data-hover="Product Design" className="sliding-text-one__title">Product Design</h2>
                <span className="icon-star"></span>
            </li>
            <li>
                <h2 data-hover="Web Development" className="sliding-text-one__title">Web Development</h2>
                <span className="icon-star"></span>
            </li>
            <li>
                <h2 data-hover="BRANDING" className="sliding-text-one__title">BRANDING</h2>
                <span className="icon-star"></span>
            </li>
            <li>
                <h2 data-hover="Cyber Security" className="sliding-text-one__title">Cyber Security</h2>
                <span className="icon-star"></span>
            </li>
            <li>
                <h2 data-hover="Website design" className="sliding-text-one__title">Website design</h2>
                <span className="icon-star"></span>
            </li>
            <li>
                <h2 data-hover="Digital Marketing" className="sliding-text-one__title">Digital Marketing</h2>
                <span className="icon-star"></span>
            </li>
            <li>
                <h2 data-hover="Website design" className="sliding-text-one__title">Website design</h2>
                <span className="icon-star"></span>
            </li>
        </ul>
    </div>
</section>



<section className="team-two">
    <div className="team-two__shape-1">
        <img src="/assets/images/shapes/team-two-shape-1.png" alt="" className="rotate-me" />
    </div>
    <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
                <span className="section-title__tagline">Our Expert Team</span>
            </div>
            <h2 className="section-title__title title-animation">See Our Skilled Expert <span>Team</span>
            </h2>
        </div>
        <div className="team-two__carousel owl-theme owl-carousel">
            
            <div className="item">
                <div className="team-two__single">
                    <div className="team-two__img-box">
                        <div className="team-two__img">
                            <img src="/assets/images/team/team-2-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="team-two__content-inner">
                        <div className="team-two__content">
                            <h3 className="team-two__title"><a href="team-details.php">Alisha Martin</a></h3>
                            <p className="team-two__sub-title">Cheif Expert</p>
                        </div>
                        <div className="team-two__arrow-and-social">
                            <div className="team-two__arrow">
                                <span className="icon-share"></span>
                            </div>
                            <ul className="team-two__social list-unstyled">
                                <li>
                                    <a href="#"><span className="icon-facebook-app-symbol"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-twitter-1"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-pinterest"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-linkedin"></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="item">
                <div className="team-two__single">
                    <div className="team-two__img-box">
                        <div className="team-two__img">
                            <img src="/assets/images/team/team-2-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="team-two__content-inner">
                        <div className="team-two__content">
                            <h3 className="team-two__title"><a href="team-details.php">Devid Coper</a></h3>
                            <p className="team-two__sub-title">Product Designer</p>
                        </div>
                        <div className="team-two__arrow-and-social">
                            <div className="team-two__arrow">
                                <span className="icon-share"></span>
                            </div>
                            <ul className="team-two__social list-unstyled">
                                <li>
                                    <a href="#"><span className="icon-facebook-app-symbol"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-twitter-1"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-pinterest"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-linkedin"></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="item">
                <div className="team-two__single">
                    <div className="team-two__img-box">
                        <div className="team-two__img">
                            <img src="/assets/images/team/team-2-3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="team-two__content-inner">
                        <div className="team-two__content">
                            <h3 className="team-two__title"><a href="team-details.php">Naila Dev</a></h3>
                            <p className="team-two__sub-title">UI/UX Designer</p>
                        </div>
                        <div className="team-two__arrow-and-social">
                            <div className="team-two__arrow">
                                <span className="icon-share"></span>
                            </div>
                            <ul className="team-two__social list-unstyled">
                                <li>
                                    <a href="#"><span className="icon-facebook-app-symbol"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-twitter-1"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-pinterest"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-linkedin"></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="item">
                <div className="team-two__single">
                    <div className="team-two__img-box">
                        <div className="team-two__img">
                            <img src="/assets/images/team/team-2-4.jpg" alt="" />
                        </div>
                    </div>
                    <div className="team-two__content-inner">
                        <div className="team-two__content">
                            <h3 className="team-two__title"><a href="team-details.php">Robert Martin</a></h3>
                            <p className="team-two__sub-title">CEO & Founder</p>
                        </div>
                        <div className="team-two__arrow-and-social">
                            <div className="team-two__arrow">
                                <span className="icon-share"></span>
                            </div>
                            <ul className="team-two__social list-unstyled">
                                <li>
                                    <a href="#"><span className="icon-facebook-app-symbol"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-twitter-1"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-pinterest"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-linkedin"></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="item">
                <div className="team-two__single">
                    <div className="team-two__img-box">
                        <div className="team-two__img">
                            <img src="/assets/images/team/team-2-5.jpg" alt="" />
                        </div>
                    </div>
                    <div className="team-two__content-inner">
                        <div className="team-two__content">
                            <h3 className="team-two__title"><a href="team-details.php">Kevin Martis </a></h3>
                            <p className="team-two__sub-title">Chief Officer</p>
                        </div>
                        <div className="team-two__arrow-and-social">
                            <div className="team-two__arrow">
                                <span className="icon-share"></span>
                            </div>
                            <ul className="team-two__social list-unstyled">
                                <li>
                                    <a href="#"><span className="icon-facebook-app-symbol"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-twitter-1"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-pinterest"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-linkedin"></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="item">
                <div className="team-two__single">
                    <div className="team-two__img-box">
                        <div className="team-two__img">
                            <img src="/assets/images/team/team-2-6.jpg" alt="" />
                        </div>
                    </div>
                    <div className="team-two__content-inner">
                        <div className="team-two__content">
                            <h3 className="team-two__title"><a href="team-details.php">Anila Koper</a></h3>
                            <p className="team-two__sub-title">Software Engineer</p>
                        </div>
                        <div className="team-two__arrow-and-social">
                            <div className="team-two__arrow">
                                <span className="icon-share"></span>
                            </div>
                            <ul className="team-two__social list-unstyled">
                                <li>
                                    <a href="#"><span className="icon-facebook-app-symbol"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-twitter-1"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-pinterest"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="icon-linkedin"></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>



<section className="counter-two">
    <div className="counter-two__bg-shape float-bob-y"
        style={{backgroundImage: 'url(/assets/images/shapes/counter-two-bg-shape.png)'}}></div>
    <div className="container">
        <div className="row">
            
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="counter-two__single">
                    <div className="counter-two__icon">
                        <span className="icon-trophy"></span>
                    </div>
                    <div className="counter-two__content">
                        <div className="counter-two__count-box">
                            <h3 className="odometer" data-count="120">00</h3>
                            <span> </span>
                        </div>
                        <p className="counter-two__text">award Winning</p>
                    </div>
                </div>
            </div>
            
            
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                <div className="counter-two__single">
                    <div className="counter-two__icon">
                        <span className="icon-costumer"></span>
                    </div>
                    <div className="counter-two__content">
                        <div className="counter-two__count-box">
                            <h3 className="odometer" data-count="99">00</h3>
                            <span>%</span>
                        </div>
                        <p className="counter-two__text">Satisfied client</p>
                    </div>
                </div>
            </div>
            
            
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                <div className="counter-two__single">
                    <div className="counter-two__icon">
                        <span className="icon-rating"></span>
                    </div>
                    <div className="counter-two__content">
                        <div className="counter-two__count-box">
                            <h3 className="odometer" data-count="10">00</h3>
                            <span>M</span>
                        </div>
                        <p className="counter-two__text">worldwide reviews</p>
                    </div>
                </div>
            </div>
            
            
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                <div className="counter-two__single">
                    <div className="counter-two__icon">
                        <span className="icon-customer"></span>
                    </div>
                    <div className="counter-two__content">
                        <div className="counter-two__count-box">
                            <h3 className="odometer" data-count="200">00</h3>
                            <span> </span>
                        </div>
                        <p className="counter-two__text">Happy Clients</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>



<section className="testimonial-two">
    <div className="testimonial-two-bg-shape"
        style={{backgroundImage: 'url(/assets/images/shapes/testimonial-two-bg-shape.png)'}}></div>
    <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
                <span className="section-title__tagline">Testimonials</span>
            </div>
            <h2 className="section-title__title title-animation">What Our Customer <span>Says?</span>
            </h2>
        </div>
        <div className="testimonial-two__carousel owl-theme owl-carousel">
            
            <div className="item">
                <div className="testimonial-two__single">
                    <div className="testimonial-two__single-bdr"></div>
                    <div className="testimonial-two__quote">
                        <span className="fas fa-quote-right"></span>
                    </div>
                    <div className="testimonial-two__client-info-box">
                        <div className="testimonial-two__client-info">
                            <div className="testimonial-two__client-img-box">
                                <div className="testimonial-two__client-img">
                                    <img src="/assets/images/testimonial/testimonial-2-1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="testimonial-two__client-content">
                                <h3 className="testimonial-two__client-name"><a href="testimonials.php">Adam
                                        Smith</a></h3>
                                <p className="testimonial-two__client-sub-title">Co-Founder</p>
                            </div>
                        </div>
                        <div className="testimonial-two__client-ratting">
                            <span className="icon-star-1"></span>
                            <span className="icon-star-1"></span>
                            <span className="icon-star-1"></span>
                            <span className="icon-star-1"></span>
                            <span className="icon-star-1"></span>
                        </div>
                    </div>
                    <p className="testimonial-two__text">“Adipiscing elit, sed do eiusmod tempor incididunt ut
                        labored etos dolore magna aliquant. Ut enim ad minim veniam nostrud exercitation
                        ullamco laboris nisi ut aliquip</p>
                </div>
            </div>
            
            
            <div className="item">
                <div className="testimonial-two__single">
                    <div className="testimonial-two__single-bdr"></div>
                    <div className="testimonial-two__quote">
                        <span className="fas fa-quote-right"></span>
                    </div>
                    <div className="testimonial-two__client-info-box">
                        <div className="testimonial-two__client-info">
                            <div className="testimonial-two__client-img-box">
                                <div className="testimonial-two__client-img">
                                    <img src="/assets/images/testimonial/testimonial-2-2.jpg" alt="" />
                                </div>
                            </div>
                            <div className="testimonial-two__client-content">
                                <h3 className="testimonial-two__client-name"><a href="testimonials.php">Robert
                                        Son</a></h3>
                                <p className="testimonial-two__client-sub-title">Co-Founder</p>
                            </div>
                        </div>
                        <div className="testimonial-two__client-ratting">
                            <span className="icon-star-1"></span>
                            <span className="icon-star-1"></span>
                            <span className="icon-star-1"></span>
                            <span className="icon-star-1"></span>
                            <span className="icon-star-1"></span>
                        </div>
                    </div>
                    <p className="testimonial-two__text">“Adipiscing elit, sed do eiusmod tempor incididunt ut
                        labored etos dolore magna aliquant. Ut enim ad minim veniam nostrud exercitation
                        ullamco laboris nisi ut aliquip</p>
                </div>
            </div>
            
            
            <div className="item">
                <div className="testimonial-two__single">
                    <div className="testimonial-two__single-bdr"></div>
                    <div className="testimonial-two__quote">
                        <span className="fas fa-quote-right"></span>
                    </div>
                    <div className="testimonial-two__client-info-box">
                        <div className="testimonial-two__client-info">
                            <div className="testimonial-two__client-img-box">
                                <div className="testimonial-two__client-img">
                                    <img src="/assets/images/testimonial/testimonial-2-3.jpg" alt="" />
                                </div>
                            </div>
                            <div className="testimonial-two__client-content">
                                <h3 className="testimonial-two__client-name"><a href="testimonials.php">Alisha
                                        Martin</a></h3>
                                <p className="testimonial-two__client-sub-title">Co-Founder</p>
                            </div>
                        </div>
                        <div className="testimonial-two__client-ratting">
                            <span className="icon-star-1"></span>
                            <span className="icon-star-1"></span>
                            <span className="icon-star-1"></span>
                            <span className="icon-star-1"></span>
                            <span className="icon-star-1"></span>
                        </div>
                    </div>
                    <p className="testimonial-two__text">“Adipiscing elit, sed do eiusmod tempor incididunt ut
                        labored etos dolore magna aliquant. Ut enim ad minim veniam nostrud exercitation
                        ullamco laboris nisi ut aliquip</p>
                </div>
            </div>
            
        </div>
    </div>
</section>



<section className="blog-one">
    <div className="blog-one__shape-1"></div>
    <div className="blog-one__shape-2"></div>
    <div className="blog-one__shape-3 float-bob">
        <img src="/assets/images/shapes/blog-one-shape-3.png" alt="" />
    </div>
    <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
                <span className="section-title__tagline">Our Blogs</span>
            </div>
            <h2 className="section-title__title title-animation">Latest News & Articles From
                <br /> The <span>Blog Posts</span>
            </h2>
        </div>
        <div className="row">
            
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="blog-one__single">
                    <div className="blog-one__img">
                        <img src="/assets/images/blog/blog-1-1.jpg" alt="" />
                        <div className="blog-one__tags">
                            <span>Digital</span>
                            <span>Technology</span>
                        </div>
                    </div>
                    <div className="blog-one__content">
                        <div className="blog-one__user">
                            <div className="blog-one__user-img">
                                <img src="/assets/images/blog/blog-one-user-1.jpg" alt="" />
                            </div>
                            <p className="blog-one__user-title">Malaika alise</p>
                        </div>
                        <ul className="blog-one__meta list-unstyled">
                            <li>
                                <a href="blog-details.php"><span className="far fa-calendar-alt"></span>April 5,
                                    2025</a>
                            </li>
                            <li>
                                <a href="blog-details.php"><span className="fal fa-comments"></span>80
                                    Comments</a>
                            </li>
                        </ul>
                        <h3 className="blog-one__title"><a href="blog-details.php">Improving Business Growth with
                                New<br /> Technology</a></h3>
                        <p className="blog-one__text">Winning the Digital business The 2025 Transformation
                            Roadmap. Holisticly leverage existing magnetic. Next-Gen Digital Transformation</p>
                        <div className="blog-one__btn-box">
                            <a href="blog-details.php" className="thm-btn">Reed More
                                <span className="fas fa-arrow-right"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-xl-6">
                
                <div className="blog-one__single-two wow fadeInUp" data-wow-delay="200ms">
                    <div className="blog-one__img-two">
                        <img src="/assets/images/blog/blog-1-2.jpg" alt="" />
                        <div className="blog-one__tags-two">
                            <span>Digital</span>
                            <span>Technology</span>
                        </div>
                    </div>
                    <div className="blog-one__content-two">
                        <div className="blog-one__user-two">
                            <div className="blog-one__user-two-img">
                                <img src="/assets/images/blog/blog-one-user-2.jpg" alt="" />
                            </div>
                            <p className="blog-one__user-two-title">John Smith</p>
                        </div>
                        <ul className="blog-one__meta-two list-unstyled">
                            <li>
                                <a href="blog-details.php"><span className="far fa-calendar-alt"></span>Feb 25,
                                    2025</a>
                            </li>
                            <li>
                                <a href="blog-details.php"><span className="fal fa-comments"></span>22
                                    Comments</a>
                            </li>
                        </ul>
                        <h3 className="blog-one__title-two"><a href="blog-details.php">Regional Manager & limited
                                management.</a></h3>
                        <p className="blog-one__text-two">Winning the Digital business The 2025 Transformation
                            Roadmap.</p>
                        <div className="blog-one__btn-box-two">
                            <a href="blog-details.php" className="thm-btn">Reed More
                                <span className="fas fa-arrow-right"></span>
                            </a>
                        </div>
                    </div>
                </div>
                
                
                <div className="blog-one__single-two wow fadeInUp" data-wow-delay="300ms">
                    <div className="blog-one__img-two">
                        <img src="/assets/images/blog/blog-1-3.jpg" alt="" />
                        <div className="blog-one__tags-two">
                            <span>Digital</span>
                            <span>Technology</span>
                        </div>
                    </div>
                    <div className="blog-one__content-two">
                        <div className="blog-one__user-two">
                            <div className="blog-one__user-two-img">
                                <img src="/assets/images/blog/blog-one-user-3.jpg" alt="" />
                            </div>
                            <p className="blog-one__user-two-title">Jerin jara</p>
                        </div>
                        <ul className="blog-one__meta-two list-unstyled">
                            <li>
                                <a href="blog-details.php"><span className="far fa-calendar-alt"></span>May 19,
                                    2025</a>
                            </li>
                            <li>
                                <a href="blog-details.php"><span className="fal fa-comments"></span>15
                                    Comments</a>
                            </li>
                        </ul>
                        <h3 className="blog-one__title-two"><a href="blog-details.php">Easy and Most Powerful
                                Server and Platform.</a></h3>
                        <p className="blog-one__text-two">Winning the Digital business The 2025 Transformation
                            Roadmap.</p>
                        <div className="blog-one__btn-box-two">
                            <a href="blog-details.php" className="thm-btn">Reed More
                                <span className="fas fa-arrow-right"></span>
                            </a>
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
