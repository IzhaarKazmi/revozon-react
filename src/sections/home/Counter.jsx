export default function Counter() {
  return (
    <>
<section className="counter-one">
    <div className="counter-one__bg-shape float-bob-y"
        style={{backgroundImage: 'url(/assets/images/shapes/counter-one-bg-shape.png)'}}></div>
    <div className="container">
        <div className="row">
            
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="counter-one__single">
                    <div className="counter-one__icon">
                        <span className="icon-complete"></span>
                    </div>
                    <div className="counter-one__content count-box">
                        <h3 className="counter-one__count"><span className="count-text" data-stop="1.9"
                                data-speed="1500"></span>K</h3>
                        <p className="counter-one__text">Project Completed</p>
                    </div>
                </div>
            </div>
            
            
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                <div className="counter-one__single">
                    <div className="counter-one__icon">
                        <span className="icon-costumer"></span>
                    </div>
                    <div className="counter-one__content count-box">
                        <h3 className="counter-one__count"><span className="count-text" data-stop="25"
                                data-speed="1500"></span>M</h3>
                        <p className="counter-one__text">Happy Clients Review</p>
                    </div>
                </div>
            </div>
            
            
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                <div className="counter-one__single">
                    <div className="counter-one__icon">
                        <span className="icon-customer"></span>
                    </div>
                    <div className="counter-one__content count-box">
                        <h3 className="counter-one__count"><span className="count-text" data-stop="350"
                                data-speed="1500"></span> </h3>
                        <p className="counter-one__text">Expert Team Members</p>
                    </div>
                </div>
            </div>
            
            
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                <div className="counter-one__single">
                    <div className="counter-one__icon">
                        <span className="icon-trophy"></span>
                    </div>
                    <div className="counter-one__content count-box">
                        <h3 className="counter-one__count"><span className="count-text" data-stop="458"
                                data-speed="1500"></span> </h3>
                        <p className="counter-one__text">Creative Plus award</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <div id="particles-js"></div>
</section>
    </>
  );
}
