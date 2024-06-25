import { Navigate, Outlet } from "react-router-dom";
import bg from "../../assets/images/fb_bg.png";
import logo from "../../assets/images/mes-logo.png";
import { isAuthenticated } from "../../utils/util";
import "./auth.css";

const Auth = () => {
  return (
    <div className="auth">
      {isAuthenticated() && <Navigate to="/" />}
      <div className="auth__picture">
        <img width={1920} height={1080} src={bg} alt="" />
      </div>
      <div className="auth__main">
        <div className="auth__box">
          <img width={2500} height={1000} src={logo} alt="" />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Auth;
