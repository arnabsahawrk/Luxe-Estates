import ContactForm from "../ContactForm/ContactForm";
import Map from "../Map/Map";
import ContactInformation from "./ContactInformation";

const ContactDisplay = () => {
  return (
    <section className="container mx-auto px-4 lg:px-0 space-y-6">
      <ContactInformation />
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:*:w-1/2 border border-gray-400 p-4">
        <Map />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactDisplay;
