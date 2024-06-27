import { Link, Navigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { isAuthenticated, onEnter } from "../../utils/util";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "../../features/auth/api";
import {
  loadedAuthSelector,
  errorSelector,
} from "../../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState({ username: "", password: "" });

  const loadedAuth = useSelector(loadedAuthSelector);
  const authError = useSelector(errorSelector);

  const changeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    dispatch(loginApi(login));
  };
  return (
    <div className="login">
      {(loadedAuth || isAuthenticated()) && <Navigate to="/" />}
      <input
        style={authError ? { borderColor: "red" } : {}}
        type="text"
        placeholder="Account"
        name="username"
        onChange={changeLogin}
        onKeyDown={(e) => {
          onEnter(e, handleLogin);
        }}
      />
      <input
        style={authError ? { borderColor: "red" } : {}}
        type="password"
        placeholder="Password"
        name="password"
        onChange={changeLogin}
        onKeyDown={(e) => {
          onEnter(e, handleLogin);
        }}
      />
      <button onClick={handleLogin}>Login</button>
      {authError?.error && (
        <p style={{ color: "red", textAlign: "center", margin: 0 }}>
          {authError?.error_description}
        </p>
      )}
      <Link>Forgot Password ?</Link>
    </div>
  );
};

export default Login;
