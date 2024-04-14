import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Estates from "../pages/Estates";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import EstateDetails from "../pages/EstateDetails";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import UpdateUserProfile from "../pages/UpdateUserProfile";
import PrivateRoute from "../components/Private/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/estates",
        element: (
          <PrivateRoute>
            <Estates />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/estates/:id",
        element: (
          <PrivateRoute>
            <EstateDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateUserProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
