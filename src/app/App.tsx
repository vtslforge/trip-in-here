import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "../auth/Auth";
import ProtectedRoute from "../auth/ProtectedRoute";
import Home from "../home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />
      <Route path="/auth" element={<Auth />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
