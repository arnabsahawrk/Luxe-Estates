import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import useAuth from "../../hooks/useAuth";
import profile from "../../assets/images/profile.png";

const UserDetails = () => {
  const { user } = useAuth();

  return (
    <Card className="max-w-96 rounded p-2 border border-gray-400">
      <CardHeader floated={false} className=" rounded-full max-h-80">
        <img
          src={user?.photoURL || profile}
          alt={user?.displayName || "Anonymous"}
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2 text-[#06112A]"
        >
          Name: {user?.displayName || "Anonymous"}
        </Typography>
        <Typography
          color="blue-gray"
          className="font-medium text-[#848093]"
          textGradient
        >
          Email: {user?.email || "Not Given"}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default UserDetails;
