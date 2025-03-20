import { Navigate } from 'react-router-dom';
import { toast } from 'sonner';
import useAppSelector from "@core/hooks/useSelector";
import useAppDispatch from '@core/hooks/useDispatch';
import { UserRoles } from "@core/types/user.interface";
import { clearCredential } from '@core/store/authslice';


interface ProtectedRouteProps {
    allowedRoles: (UserRoles)[];
    children: React.ReactNode;
}

const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
  const user = useAppSelector((state) => state.auth.user);

  const dispatch = useAppDispatch();

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/auth?page=login" replace/>;
  }

  if(user.isBlocked){
    dispatch(clearCredential());
    toast.error("You have been blocked")
    return <Navigate to="/auth?page=login" replace/>;
  }

  return children;
};

export default ProtectedRoute;
