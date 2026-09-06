import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/react";

import Auth from "../auth/Auth";
import ProtectedRoute from "../auth/ProtectedRoute";
import Task from "../pages/Task";
import Layout from "../layout/Layout";
import Dashboard from "../pages/Dashboard";

const App = () => {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/" element={<Navigate to="/sign-in" replace />} />

      <Route element={<Auth />}>
        <Route
          path="/sign-in"
          element={
            <SignIn
              appearance={{
                theme: "simple",
                variables: {
                  colorBackground: "#ffffff",
                },
                options: {
                  elevation: "flush",
                },
                elements: {
                  footerAction: "bg-white",
                  footerItem: "bg-white",
                },
              }}
            />
          }
        />

        <Route
          path="/sign-up"
          element={
            <SignUp
              appearance={{
                theme: "simple",
                variables: {
                  colorBackground: "#ffffff",
                },
                options: {
                  elevation: "flush",
                },
                elements: {
                  footerAction: "bg-white",
                  footerItem: "bg-white",
                },
              }}
            />
          }
        />
      </Route>

      {/* Protected Route */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/task" element={<Task />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/sign-in" replace />} />
    </Routes>
  );
};

export default App;
