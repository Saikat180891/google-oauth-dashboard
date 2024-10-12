import { Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

const PrivateRoute = () => {
  const auth = JSON.parse(sessionStorage.getItem("auth") || "{}");

  return auth && auth.credential ? (
    <DashboardLayout />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
