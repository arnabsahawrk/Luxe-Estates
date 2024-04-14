import {
  Collapse,
  IconButton,
  Navbar,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/images/profile.png";
import useAuth from "../../hooks/useAuth";

function NavList() {
  //Auth
  const { user, signOutUser } = useAuth();

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
      <div className="lg:hidden grid">
        {user ? (
          <div className="flex gap-2 items-center">
            <Tooltip
              className="border-none rounded-lg bg-[#5EA51D] px-4 py-2 shadow-xl text-white"
              content={user?.displayName}
            >
              <img
                className="size-12 rounded-full object-cover bg-[#5EA51D]"
                src={user?.photoURL || profile}
                alt={user?.displayName || "Anonymous"}
              />
            </Tooltip>
            <Link to="/updateProfile">
              <button
                rel="noopener noreferrer"
                className="px-4 py-2 font-semibold text-sm md:text-base rounded-lg bg-[#5EA51D] text-white transition duration-1000 ease-in-out hover:bg-[#06112A] animate__animated animate__slideInDown"
              >
                Update Profile
              </button>
            </Link>
            <button
              onClick={signOutUser}
              rel="noopener noreferrer"
              className="px-4 py-2 font-semibold text-sm md:text-base rounded-lg bg-[#5EA51D] text-white transition duration-1000 ease-in-out hover:bg-[#06112A] animate__animated animate__slideInUp"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/signIn">
            <button
              rel="noopener noreferrer"
              className="px-4 py-2 font-semibold text-sm md:text-base rounded-lg bg-[#5EA51D] text-white transition duration-1000 ease-in-out hover:bg-[#06112A] animate__animated animate__slideInUp"
            >
              Sign In
            </button>
          </Link>
        )}
      </div>
    </ul>
  );
}

const Nav = () => {
  //Auth
  const { user, signOutUser } = useAuth();

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
    <Navbar className="shadow-none py-2 bg-[#06112A] backdrop-saturate-0 backdrop-blur-0 bg-opacity-100 border-none rounded-none max-w-full">
      <div className="flex items-center justify-between container mx-auto">
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
        <div className="hidden lg:grid">
          {user ? (
            <div className="flex gap-2 items-center">
              <Tooltip
                className="border-none rounded-lg bg-[#5EA51D] px-4 py-2 shadow-xl text-white"
                content={user?.displayName}
              >
                <img
                  className="size-12 rounded-full object-cover bg-[#5EA51D]"
                  src={user?.photoURL || profile}
                  alt={user?.displayName || "Anonymous"}
                />
              </Tooltip>
              <Link to="/updateProfile">
                <button
                  rel="noopener noreferrer"
                  className="lg:px-4 lg:py-2 font-semibold lg:text-base rounded-lg bg-[#5EA51D] text-white transition duration-1000 ease-in-out hover:bg-[#06112A] animate__animated animate__slideInDown"
                >
                  Update Profile
                </button>
              </Link>
              <button
                onClick={signOutUser}
                rel="noopener noreferrer"
                className="lg:px-4 lg:py-2 font-semibold lg:text-base rounded-lg bg-[#5EA51D] text-white transition duration-1000 ease-in-out hover:bg-[#06112A] animate__animated animate__slideInUp"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/signIn">
              <button
                rel="noopener noreferrer"
                className="lg:px-4 lg:py-2 font-semibold lg:text-base rounded-lg bg-[#5EA51D] text-white transition duration-1000 ease-in-out hover:bg-[#06112A] animate__animated animate__slideInUp"
              >
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Nav;
