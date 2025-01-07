import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/auth";

interface ProtectedRouteProps {
  element: React.ReactElement;
  isPrivate?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  isPrivate = false,
}) => {
  const { user } = useAuth();
  const location = useLocation();

  if (isPrivate && !user) {
    // Se a rota é privada e o usuário não está autenticado
    console.log('Redirecting to /');
    return <Navigate to="/" state={{ from: location }} />;
  }

  if (!isPrivate && user) {
    // Se a rota não é privada e o usuário está autenticado
    console.log('Redirecting to /dashboard');
    return <Navigate to='/dashboard' state={{ from: location }} />;
  }

  return element;
};

export default ProtectedRoute;
