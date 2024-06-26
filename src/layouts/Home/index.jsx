import { Outlet } from "react-router-dom";
import "./home.css";
import Sidebar from "../../components/Sidebar";
import { useUserQs } from "../../features/auth/service";
import SpinLoading from "../../components/SpinLoading";
const Home = () => {
  const userQs = useUserQs();

  return (
    <div className="home">
      {userQs.isPending && <SpinLoading />}
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
