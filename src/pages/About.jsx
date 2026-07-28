import usePageTitle from '../layout/usePageTitle';
import PageHeader from '../layout/PageHeader';
import AboutContent from './AboutContent';

export default function About() {
  usePageTitle('About || Itzone');

  return (
    <>
      <PageHeader heading="About" subheading="About" />
      <AboutContent />
    </>
  );
}