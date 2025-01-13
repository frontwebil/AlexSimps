import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './UserContext';

export const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { currentUser } = useContext(UserContext);
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(currentUser.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};