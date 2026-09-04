import { useAuth } from "@clerk/react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
