import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ redirectPath = '/' }) => {
  const user = useSelector(state => state.user.access);
  
  if (!user) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
}