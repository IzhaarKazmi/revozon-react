import usePageTitle from '../layout/usePageTitle';
import PageHeader from '../layout/PageHeader';
import ServicesContent from './ServicesContent';

export default function Services() {
  usePageTitle('Services || Itzone');

  return (
    <>
      <PageHeader heading="Services" subheading="Services" />
      <ServicesContent />
    </>
  );
}
