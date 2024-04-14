import {
  Card,
  Input,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const LogIn = () => {
  const { signInWithMedium, signInUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //Sign In
  const handleLogIn = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then(() => {
        toast.success("Sign In Successfully.");
      })
      .catch(() => {
        toast.error("Invalid User.");
      });
    reset();
  };

  //Google
  const googleUser = () => {
    signInWithMedium("google")
      .then(() => {
        toast.success("Authenticate Successfully.");
      })
      .catch(() => {
        toast.error("Failed To Authenticate.");
      });
  };

  //Facebook
  const facebookUser = () => {
    signInWithMedium("facebook")
      .then(() => {
        toast.success("Authenticate Successfully.");
      })
      .catch(() => {
        toast.error("Failed To Authenticate.");
      });
  };

  //Github
  const githubUser = () => {
    signInWithMedium("github")
      .then(() => {
        toast.success("Authenticate Successfully.");
      })
      .catch(() => {
        toast.error("Failed To Authenticate.");
      });
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-[#06112A]">
        Sign In
      </Typography>
      <form
        onSubmit={handleSubmit(handleLogIn)}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-3">
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
                  value: /^(?=.*[A-Z])(?=.*[a-z]).{6,16}$/,
                  message: "Invalid password.",
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
        <Button
          type="submit"
          className="mt-6 bg-[#06112A] hover:bg-[#5EA51D] transition duration-1000 ease-in-out animate__animated animate__slideInUp"
          fullWidth
        >
          sign in
        </Button>
        <Typography
          color="gray"
          className="mt-4 text-center font-normal text-[#848093]"
        >
          Not have an account yet?{" "}
          <Link
            to="/signUp"
            className="font-bold text-[#06112A] hover:text-[#5EA51D]"
          >
            Sign Up
          </Link>
        </Typography>
      </form>

      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-[2px] my-5 bg-[#06112A] border-0" />
        <span className="absolute px-3 font-medium text-[#06112A] -translate-x-1/2 bg-white left-1/2 text-lg">
          or
        </span>
      </div>

      <div className="flex gap-4 mx-auto">
        <IconButton
          onClick={googleUser}
          className="transition duration-1000 ease-in-out hover:bg-[#06112A] rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10 text-lg animate__animated animate__slideInLeft"
        >
          <FaGoogle />
        </IconButton>
        {/* <IconButton className="transition duration-1000 ease-in-out hover:bg-[#06112A] rounded bg-[#14171A] hover:shadow-[#14171A]/20 focus:shadow-[#14171A]/20 active:shadow-[#14171A]/10 text-lg animate__animated animate__slideInUp">
          <FaXTwitter />
        </IconButton> */}
        <IconButton
          onClick={facebookUser}
          className="transition duration-1000 ease-in-out hover:bg-[#06112A] rounded bg-[#4267B2] hover:shadow-[#4267B2]/20 focus:shadow-[#4267B2]/20 active:shadow-[#4267B2]/10 text-lg animate__animated animate__slideInDown"
        >
          <FaFacebookF />
        </IconButton>
        <IconButton
          onClick={githubUser}
          className="transition duration-1000 ease-in-out hover:bg-[#06112A] rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10 text-lg animate__animated animate__slideInRight"
        >
          <FaGithub />
        </IconButton>
      </div>
    </Card>
  );
};

export default LogIn;
