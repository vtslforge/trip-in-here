import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@clerk/react";

const Auth = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isSignedIn) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Outlet />
    </div>
  );
};

export default Auth;