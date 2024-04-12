import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-[#06112A]">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal text-[#848093]">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 text-[#06112A]"
          >
            Your Name
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="Enter Your Name"
            className=" !border-[#06112A] focus:!border-[#5EA51D]"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 text-[#06112A]"
          >
            Your PhotoURL
          </Typography>
          <Input
            type="url"
            size="lg"
            placeholder="Enter Your PhotoURL"
            className=" !border-[#06112A] focus:!border-[#5EA51D]"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 text-[#06112A]"
          >
            Your Email
          </Typography>
          <Input
            size="lg"
            type="email"
            placeholder="Enter Your Email"
            className=" !border-[#06112A] focus:!border-[#5EA51D]"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 text-[#06112A]"
          >
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="Choose A Password"
            className=" !border-[#06112A] focus:!border-[#5EA51D]"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
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
        <Button
          className="mt-6 bg-[#06112A] hover:bg-[#5EA51D] transition duration-1000 ease-in-out"
          fullWidth
        >
          sign up
        </Button>
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
      </form>
    </Card>
  );
};

export default Register;
