
import { Navigate } from "react-router-dom";
import { SignIn, useAuth } from "@clerk/react";


const Auth = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isSignedIn) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SignIn   appearance={{
    theme: 'simple',
  }} />
    </div>
  );
};

export default Auth;
