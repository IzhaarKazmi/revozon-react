import usePageTitle from '../layout/usePageTitle';
import Banner from '../sections/home/Banner';
import About from '../sections/home/About';
import Service from '../sections/home/Service';
import WhyChoose from '../sections/home/WhyChoose';
import Process from '../sections/home/Process';
import SlidingText from '../sections/home/SlidingText';
import Project from '../sections/home/Project';
import Counter from '../sections/home/Counter';
import Team from '../sections/home/Team';
import Brand from '../sections/home/Brand';
import Testimonial from '../sections/home/Testimonial';
import Contact from '../sections/home/Contact';
import Pricing from '../sections/home/Pricing';
import Faq from '../sections/home/Faq';
import Blog from '../sections/home/Blog';

export default function Home() {
  usePageTitle('Home || Revozon');

  return (
    <>
      <Banner />
      <About />
      <Service />
      <WhyChoose />
      <Process />
      <SlidingText />
      <Project />
      <Counter />
      <Team />
      <Brand />
      <Testimonial />
      <Contact />
      <Pricing />
      <Faq />
      <Blog />
    </>
  );
}
