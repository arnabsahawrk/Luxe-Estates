import { Helmet } from "react-helmet-async";
import UpdateProfile from "../components/Authentication/UpdateProfile";
import UserDetails from "../components/UserDetails/UserDetails";

const UpdateUserProfile = () => {
  return (
    <>
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <section className="container mx-auto px-4 lg:px-0 py-10 flex flex-col lg:flex-row justify-evenly items-center gap-4 min-h-[80vh]">
        <UserDetails />
        <UpdateProfile />
      </section>
    </>
  );
};

export default UpdateUserProfile;
