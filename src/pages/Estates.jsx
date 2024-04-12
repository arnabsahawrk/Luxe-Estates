import { Helmet } from "react-helmet-async";
import EstatesBanner from "../components/Banner/EstatesBanner";
import EstatesPage from "../components/Estates/EstatesPage";

const Estates = () => {
  return (
    <>
      <Helmet>
        <title>Estates</title>
      </Helmet>
      <section className="space-y-4 md:space-y-8 mb-8">
        <EstatesBanner />
        <EstatesPage />
      </section>
    </>
  );
};

export default Estates;
