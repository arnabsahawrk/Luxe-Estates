import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-[#06112A]">
        Sign In
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
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
        <Button
          className="mt-6 bg-[#06112A] hover:bg-[#5EA51D] transition duration-1000 ease-in-out"
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
    </Card>
  );
};

export default LogIn;
