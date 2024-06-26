import "./sidebar.css";
import noteIcon from "../../assets/images/note.svg";
import RoomItem from "../RoomItem";
import { useUserQs } from "../../features/auth/service";
import Modal from "../Modal";
import { useState } from "react";
import FriendList from "../FriendList";

const Sidebar = () => {
  const [openNewMessage, setOpenNewMessage] = useState(false);
  const handleOpen = () => {
    setOpenNewMessage(!openNewMessage);
  };
  const userQs = useUserQs();

  return (
    <div className="sidebar">
      {openNewMessage && (
        <Modal close={handleOpen}>
          <FriendList />
        </Modal>
      )}
      <div className="sidebar__header">
        <span>
          {(userQs?.data?.data?.profile?.first_name || "--") +
            " " +
            (userQs?.data?.data?.profile?.last_name || "--")}
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
