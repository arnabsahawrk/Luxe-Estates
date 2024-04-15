import { Helmet } from "react-helmet-async";
import ContactBanner from "../components/Banner/ContactBanner";
import ContactDisplay from "../components/ContactDisplay/ContactDisplay";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <section className="space-y-4 md:space-y-8 mb-4">
        <ContactBanner />
        <ContactDisplay />
      </section>
    </>
  );
};

export default Contact;
