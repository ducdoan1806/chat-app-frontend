import { Outlet } from "react-router-dom";
import "./home.css";
import Sidebar from "../../components/Sidebar";

import SpinLoading from "../../components/SpinLoading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserApi } from "../../features/auth/api";
import { loadingUserSelector } from "../../features/auth/userSlice";
import { roomApi } from "../../features/room/roomApi";
const Home = () => {
  const dispatch = useDispatch();
  const loadingUser = useSelector(loadingUserSelector);
  useEffect(() => {
    dispatch(getUserApi());
  }, [dispatch]);
  useEffect(() => {
    dispatch(roomApi({ page: 1, pageSize: 999 }));
  }, [dispatch]);
  return (
    <div className="home">
      {loadingUser && <SpinLoading />}
      <div className="home__sidebar">
        <Sidebar />
      </div>
      <div className="home__main">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
