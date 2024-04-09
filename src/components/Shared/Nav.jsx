import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
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
      <div className="lg:hidden flex items-center gap-4 flex-wrap">
        <button
          rel="noopener noreferrer"
          className="px-4 py-2 font-semibold text-sm md:text-base rounded-lg bg-[#5EA51D] text-white"
        >
          Sign In
        </button>
      </div>
    </ul>
  );
}

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="shadow-none py-2 bg-[#06112A] backdrop-saturate-0 backdrop-blur-0 bg-opacity-100 border-none rounded-none">
      <div className="flex items-center justify-between">
        <Link to="/">
          <Typography
            as="h1"
            className="mr-4 cursor-pointer py-1.5 text-white text-xl md:text-2xl font-extrabold"
          >
            Luxe Estates
          </Typography>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto size-7 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="size-7 text-[#06112A" strokeWidth={2} />
          ) : (
            <Bars3Icon
              className="size-7 bg-[#5EA51D] rounded"
              strokeWidth={2}
            />
          )}
        </IconButton>
        <div className="hidden lg:flex items-center gap-4 flex-wrap">
          <button
            rel="noopener noreferrer"
            className="lg:px-4 lg:py-2 font-semibold lg:text-base rounded-lg bg-[#5EA51D] text-white"
          >
            Sign In
          </button>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Nav;
