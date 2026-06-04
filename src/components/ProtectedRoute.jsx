import { useUser } from "@clerk/clerk-react";
import { Children } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  if (!user) {
    toast.warning("Please login to continue shopping");
    return <Navigate to="/" replace />;
  }

  return children;
};
export default ProtectedRoute;
