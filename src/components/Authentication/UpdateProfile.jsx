import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const Register = () => {
  const { setUser, updateUserProfile } = useAuth();
  const [userInput, setUserInput] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  //Make Sure User Fill At Least One Input
  const userName = watch("name");
  const userPhoto = watch("photoURL");
  useEffect(() => {
    if (userName || userPhoto) setUserInput(false);
    else setUserInput(true);
  }, [userName, userPhoto]);

  //Update Profile
  const handleUpdate = (data) => {
    const { name, photoURL } = data;

    updateUserProfile(name, photoURL)
      .then(() => {
        toast.success("Your Profile Updated.");

        setUser((prevUser) => ({
          ...prevUser,
          displayName: name || prevUser.displayName,
          photoURL: photoURL || prevUser.photoURL,
        }));
      })
      .catch(() => {
        toast.error("Failed To Update Profile.");
      });

    reset();
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-[#06112A]">
        Update Your Profile
      </Typography>
      <form
        onSubmit={handleSubmit(handleUpdate)}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-3">
          {/* Name */}
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-1 text-[#06112A]"
            >
              Your Name
            </Typography>
            <Input
              {...register("name", {
                minLength: {
                  value: 4,
                  message: "Name must be at least 4 characters.",
                },
                maxLength: {
                  value: 16,
                  message: "Name must be in 16 characters.",
                },
              })}
              name="name"
              type="text"
              size="lg"
              placeholder="Enter Your Name"
              className=" !border-[#06112A] focus:!border-[#5EA51D]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.name && (
              <Typography
                variant="paragraph"
                color="blue-gray"
                className="text-red-700"
              >
                {errors.name?.message}
              </Typography>
            )}
          </div>
          {/* PhotoURL  */}
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-1 text-[#06112A]"
            >
              Your PhotoURL
            </Typography>
            <Input
              {...register("photoURL")}
              name="photoURL"
              type="url"
              size="lg"
              placeholder="Enter Your PhotoURL"
              className=" !border-[#06112A] focus:!border-[#5EA51D]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        </div>
        <Button
          disabled={userInput}
          type="submit"
          className="mt-6 bg-[#06112A] hover:bg-[#5EA51D] transition duration-1000 ease-in-out animate__animated animate__slideInUp"
          fullWidth
        >
          Update
        </Button>
      </form>
    </Card>
  );
};

export default Register;
