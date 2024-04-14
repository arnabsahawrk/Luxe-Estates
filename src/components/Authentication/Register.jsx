import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { user, setUser, createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  //Register
  const handleRegister = (data) => {
    const { name, photoURL, email, password } = data;

    //Create
    createUser(email, password)
      .then(() => {
        toast.success("Successfully Registered.", {
          style: {
            border: "1px solid #06112A",
            padding: "16px",
            color: "#06112A",
          },
          iconTheme: {
            primary: "#5EA51D",
            secondary: "#FFFAEE",
          },
        });
        //Update Profile
        updateUserProfile(name, photoURL).then(() => {
          setUser((prevUser) => ({
            ...prevUser,
            displayName: name,
            photoURL: photoURL,
          }));
        });

        navigate("/");
      })
      .catch(() => {
        toast.error("Registered Denied.");
      });

    reset();
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-[#06112A]">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal text-[#848093]">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        onSubmit={handleSubmit(handleRegister)}
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
                required: {
                  value: true,
                  message: "Name is required.",
                },
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
          {/* Email  */}
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-1 text-[#06112A]"
            >
              Your Email
            </Typography>
            <Input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required.",
                },
              })}
              name="email"
              size="lg"
              type="email"
              placeholder="Enter Your Email"
              className=" !border-[#06112A] focus:!border-[#5EA51D]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.email && (
              <Typography
                variant="paragraph"
                color="blue-gray"
                className="text-red-700"
              >
                {errors.email?.message}
              </Typography>
            )}
          </div>
          {/* Password  */}
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-1 text-[#06112A]"
            >
              Password
            </Typography>
            <Input
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required.",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])/,
                  message: "Password must contain 1 upper & lower case letter.",
                },
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters.",
                },
                maxLength: {
                  value: 16,
                  message: "Password must be in 16 characters.",
                },
              })}
              name="password"
              type="password"
              size="lg"
              placeholder="Choose A Password"
              className=" !border-[#06112A] focus:!border-[#5EA51D]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.password && (
              <Typography
                variant="paragraph"
                color="blue-gray"
                className="text-red-700"
              >
                {errors.password?.message}
              </Typography>
            )}
          </div>
        </div>
        {/* Checkbox  */}
        <div>
          <Checkbox
            {...register("checkbox", {
              required: {
                value: true,
                message: "Agree to proceed.",
              },
            })}
            name="checkbox"
            className="checked:bg-[#06112A]"
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal text-[#848093]"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-[#5EA51D]"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          {errors.checkbox && (
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="text-red-700"
            >
              {errors.checkbox?.message}
            </Typography>
          )}
        </div>
        <Button
          type="submit"
          className="mt-6 bg-[#06112A] hover:bg-[#5EA51D] transition duration-1000 ease-in-out animate__animated animate__slideInUp"
          fullWidth
        >
          sign up
        </Button>
        {user ? null : (
          <Typography
            color="gray"
            className="mt-4 text-center font-normal text-[#848093]"
          >
            Already have an account?{" "}
            <Link
              to="/signIn"
              className="font-bold text-[#06112A] hover:text-[#5EA51D]"
            >
              Sign In
            </Link>
          </Typography>
        )}
      </form>
    </Card>
  );
};

export default Register;
