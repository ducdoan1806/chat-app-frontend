import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <input type="text" placeholder="Account" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button>Login</button>
      <Link>Forgot Password ?</Link>
    </div>
  );
};

export default Login;
