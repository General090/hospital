import { Navigate } from "react-router-dom";
import { auth } from "./firebase";

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser; // Firebase gives logged-in user

  if (!user) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return children; // If authenticated, render the route content
};

export default ProtectedRoute;
