import usePageTitle from '../layout/usePageTitle';
import PageHeader from '../layout/PageHeader';
import ContactContent from './ContactContent';

export default function Contact() {
  usePageTitle('Contact || Itzone');

  return (
    <>
      <PageHeader heading="Contact" subheading="Contact" />
      <ContactContent />
    </>
  );
}
