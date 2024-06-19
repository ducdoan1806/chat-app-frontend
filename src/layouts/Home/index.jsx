import { Outlet } from "react-router-dom";
import "./home.css";
import Sidebar from "../../components/Sidebar";
const Home = () => {
  return (
    <div className="home">
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
