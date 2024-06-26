import { Link } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { onEnter } from "../../utils/util";
import { useLoginFn } from "../../features/auth/service";

const Login = () => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const loginFn = useLoginFn();
  console.log("loginFn: ", loginFn);
  const changeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    loginFn.mutate(login);
  };
  return (
    <div className="login">
      <input
        style={loginFn.isError ? { borderColor: "red" } : {}}
        type="text"
        placeholder="Account"
        name="username"
        onChange={changeLogin}
        onKeyDown={(e) => {
          onEnter(e, handleLogin);
        }}
      />
      <input
        style={loginFn.isError ? { borderColor: "red" } : {}}
        type="password"
        placeholder="Password"
        name="password"
        onChange={changeLogin}
        onKeyDown={(e) => {
          onEnter(e, handleLogin);
        }}
      />
      <button onClick={handleLogin}>Login</button>
      {loginFn.isError && (
        <p style={{ color: "red", textAlign: "center", margin: 0 }}>
          {loginFn?.error?.response?.data?.error_description}
        </p>
      )}
      <Link>Forgot Password ?</Link>
    </div>
  );
};

export default Login;
