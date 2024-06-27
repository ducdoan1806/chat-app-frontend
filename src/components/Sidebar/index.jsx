import "./sidebar.css";
import noteIcon from "../../assets/images/note.svg";
import RoomItem from "../RoomItem";
import Modal from "../Modal";
import { useState } from "react";
import FriendList from "../FriendList";
import { useSelector } from "react-redux";
import { currentUserSelector } from "../../features/auth/userSlice";

const Sidebar = () => {
  const [openNewMessage, setOpenNewMessage] = useState(false);
  const currentUser = useSelector(currentUserSelector);
  console.log("currentUser: ", currentUser);
  const handleOpen = () => {
    setOpenNewMessage(!openNewMessage);
  };

  return (
    <div className="sidebar">
      {openNewMessage && (
        <Modal close={handleOpen}>
          <FriendList />
        </Modal>
      )}
      <div className="sidebar__header">
        <span>
          {(currentUser?.data?.profile?.first_name || "--") +
            " " +
            (currentUser?.data?.profile?.last_name || "--")}
        </span>
        <button onClick={handleOpen}>
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
