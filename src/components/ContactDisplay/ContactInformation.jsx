const ContactInformation = () => {
  return (
    <section>
      <div className="space-y-4 md:space-y-6">
        <h1
          id="featured-estates"
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#5EA51D] text-center"
        >
          Contact Information
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-center *:bg-[#06112A] text-white *:p-8">
          <p>
            Address: <span>Level-4, 34, Awal Centre, Banani, Dhaka</span>
          </p>
          <p>
            Phone: <span>01322901105</span>
          </p>
          <p>
            Email: <span>web@programming-hero.com</span>
          </p>
          <p>
            Website:{" "}
            <a href="https://arnabw-luxe-estates.web.app/" target="_blank">
              https://arnabw-luxe-estates.web.app/
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
