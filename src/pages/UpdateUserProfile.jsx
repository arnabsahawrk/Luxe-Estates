import { Helmet } from "react-helmet-async";
import UpdateProfile from "../components/Authentication/UpdateProfile";

const UpdateUserProfile = () => {
  return (
    <>
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <section className="py-10 flex justify-center items-center min-h-[80vh]">
        <UpdateProfile />
      </section>
    </>
  );
};

export default UpdateUserProfile;
