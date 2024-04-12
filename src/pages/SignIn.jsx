import { Helmet } from "react-helmet-async";
import LogIn from "../components/Authentication/LogIn";

const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <section className="py-10 flex justify-center items-center min-h-[80vh]">
        <LogIn />
      </section>
    </>
  );
};

export default SignIn;
