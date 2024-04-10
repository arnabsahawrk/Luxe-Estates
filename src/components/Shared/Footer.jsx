import { Typography } from "@material-tailwind/react";
import { FaMap, FaPhoneAlt } from "react-icons/fa";
import { BsSendFill, BsTwitterX } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { RiLinkedinLine } from "react-icons/ri";
import { LuGithub } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#06112A] px-8 py-2 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-2 text-center lg:text-left lg:flex lg:justify-between border-b border-[#848093] pb-4 container mx-auto">
        <div>
          <Typography
            as="h1"
            className="mr-4 cursor-pointer py-1.5 text-lg font-extrabold"
          >
            Luxe Estates
          </Typography>
          <Typography as="p" className="text-xs max-w-[300px] text-[#848093]">
            Luxe Estates: Redefining property management with excellence and
            personalized service. Trust us to prioritize your unique investment.
          </Typography>
          <ul className="flex items-center gap-4 mt-4 text-2xl text-white *:bg-[#5EA51D] *:p-2 *:rounded-full justify-center md:justify-normal">
            <li className="transition duration-300 ease-in-out hover:bg-[#06112A]">
              <a href="https://www.facebook.com/arnabwrk/" target="_blank">
                <SlSocialFacebook />
              </a>
            </li>
            <li className="transition duration-300 ease-in-out hover:bg-[#06112A]">
              <a href="https://twitter.com/arnabwrk/" target="_blank">
                <BsTwitterX />
              </a>
            </li>
            <li className="transition duration-300 ease-in-out hover:bg-[#06112A]">
              <a href="https://www.linkedin.com/in/arnabw/" target="_blank">
                <RiLinkedinLine />
              </a>
            </li>
            <li className="transition duration-300 ease-in-out hover:bg-[#06112A]">
              <a href="https://github.com/arnabw/" target="_blank">
                <LuGithub />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <Typography
            as="h2"
            className="mr-4 cursor-pointer py-1.5 text-lg font-extrabold"
          >
            Quick Links
          </Typography>

          {/* Nav Link  */}
          <ul className="my-2 flex  gap-2 lg:mb-0 lg:mt-0 flex-row lg:items-center lg:gap-4">
            <Typography
              as="li"
              variant="paragraph"
              color="blue-gray"
              className="font-bold hover:text-white text-[#848093]"
            >
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  `${isActive ? "text-white" : ""} ${isPending ? "text-red-700" : ""}`
                }
              >
                Home
              </NavLink>
            </Typography>
            <Typography
              as="li"
              variant="paragraph"
              color="blue-gray"
              className="font-bold hover:text-white text-[#848093]"
            >
              <NavLink
                to="/estates"
                className={({ isActive, isPending }) =>
                  `${isActive ? "text-white" : ""} ${isPending ? "text-red-700" : ""}`
                }
              >
                Estates
              </NavLink>
            </Typography>
            <Typography
              as="li"
              variant="paragraph"
              color="blue-gray"
              className="font-bold hover:text-white text-[#848093]"
            >
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  `${isActive ? "text-white" : ""} ${isPending ? "text-red-700" : ""}`
                }
              >
                About
              </NavLink>
            </Typography>
            <Typography
              as="li"
              variant="paragraph"
              color="blue-gray"
              className="font-bold hover:text-white text-[#848093]"
            >
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  `${isActive ? "text-white" : ""} ${isPending ? "text-red-700" : ""}`
                }
              >
                Contact
              </NavLink>
            </Typography>
          </ul>
        </div>

        <div className="md:col-span-2">
          <Typography
            as="h2"
            className="mr-4 cursor-pointer py-1.5 text-lg font-extrabold"
          >
            Have a questions?
          </Typography>

          <ul className="space-y-3 text-[#848093]">
            <li className="flex gap-2 items-center">
              <FaMap className="text-[#5EA51D]" />
              <span className="text-xs">
                Level-4, 34, Awal Centre, Banani, Dhaka
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <FaPhoneAlt className="text-[#5EA51D]" />
              <span className="text-xs">01322901105</span>
            </li>
            <li className="flex gap-2 items-center">
              <BsSendFill className="text-[#5EA51D]" />
              <span className="text-xs">web@programming-hero.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Typography as="p" className="text-xs text-center text-[#848093] py-3">
          Copyright ©2024 All rights reserved | This site is made with &#10084;
          by Arnab Saha
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
