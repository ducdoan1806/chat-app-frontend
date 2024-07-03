import "./sidebar.css";
import noteIcon from "../../assets/images/note.svg";
import RoomItem from "../RoomItem";
import Modal from "../Modal";

import FriendList from "../FriendList";
import { useDispatch, useSelector } from "react-redux";
import { currentUserSelector } from "../../features/auth/userSlice";
import {
  closeModal,
  modalSelector,
  openModal,
} from "../../features/modalSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const modal = useSelector(modalSelector);
  const currentUser = useSelector(currentUserSelector);
  const { rooms: roomList, loaded: roomListLoaded } = useSelector(
    (state) => state.room
  );

  const handleOpen = () => {
    dispatch(
      openModal({
        name: "friend-list",
        modal: (
          <Modal
            close={() => {
              dispatch(closeModal("friend-list"));
            }}
          >
            <FriendList />
          </Modal>
        ),
      })
    );
  };

  return (
    <div className="sidebar">
      {modal.find((item) => item.name === "friend-list")?.modal || ""}
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
        {roomListLoaded &&
          roomList.map((item) => (
            <RoomItem key={item?.id} {...item} userId={currentUser?.data?.id} />
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
