import { Helmet } from "react-helmet-async";
import Register from "../components/Authentication/Register";

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <section className="py-10 flex justify-center items-center min-h-[80vh]">
        <Register />
      </section>
    </>
  );
};

export default SignUp;
