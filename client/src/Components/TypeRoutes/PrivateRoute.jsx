import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Actions/Auth";

function PrivateRoute() {
  const admin = useSelector((state) => state.auth.user);
  const expires = useSelector((state) => state.auth.expires);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (expires) {
    if (new Date(Date.now()) > new Date(expires)) {
      dispatch(logout());
      alert("Session expired");
      return navigate("/admin/login");
    }
  }
  return admin?.email ? <Outlet /> : <Navigate to="/admin/login" />;
}

export default PrivateRoute;
