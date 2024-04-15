import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleContact = () => {
    toast.success("We Will Contact You Soon.", {
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
    reset();
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex flex-col justify-center items-center"
    >
      <Typography
        variant="h4"
        color="blue-gray"
        className="text-[#06112A] text-center"
      >
        Get in Touch
      </Typography>
      <Typography
        color="gray"
        className="mt-1 font-normal text-[#848093] text-center"
      >
        Send us your message and we will get back to you soon.
      </Typography>
      <form
        onSubmit={handleSubmit(handleContact)}
        className="mt-3 mb-2 w-80 max-w-screen-lg sm:w-96"
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
        </div>
        {/* Subject  */}
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-1 text-[#06112A]"
          >
            Subject
          </Typography>
          <Input
            {...register("subject")}
            name="subject"
            size="lg"
            type="text"
            placeholder="Subject"
            className=" !border-[#06112A] focus:!border-[#5EA51D]"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        {/* Text Box  */}
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-1 text-[#06112A]"
          >
            Message
          </Typography>
          <Textarea label="Message" />
        </div>
        <Button
          type="submit"
          className="mt-6 bg-[#06112A] hover:bg-[#5EA51D] transition duration-1000 ease-in-out animate__animated animate__slideInUp"
          fullWidth
        >
          Send Message
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
