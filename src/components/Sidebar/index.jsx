import "./sidebar.css";
import noteIcon from "../../assets/images/note.svg";
import RoomItem from "../RoomItem";
import { useUserQs } from "../../features/auth/service";

const Sidebar = () => {
  const userQs = useUserQs();
  console.log("userQs: ", userQs?.data?.data?.profile?.first_name);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <span>
          {(userQs?.data?.data?.profile?.first_name || "--") +
            " " +
            (userQs?.data?.data?.profile?.last_name || "--")}
        </span>
        <button>
          <img width={30} height={30} src={noteIcon} alt="" />
        </button>
      </div>
      <div className="sidebar__title">Messages</div>
      <div className="sidebar__messages">
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
      </div>
    </div>
  );
};

export default Sidebar;
