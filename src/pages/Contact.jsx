import { Helmet } from "react-helmet-async";
import ContactBanner from "../components/Banner/ContactBanner";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <section className="space-y-4 md:space-y-8">
        <ContactBanner />
      </section>
    </>
  );
};

export default Contact;
