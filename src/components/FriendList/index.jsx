import { useEffect } from "react";
import FriendItem from "../FriendItem";
import "./friendList.css";
import { SOCKET_SERVER_URL } from "../../utils/util";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { userListApi } from "../../features/userList/api";
import friendSlice, {
  friendsSelector,
  loadedFriendSelector,
  loadingFriendSelector,
} from "../../features/userList/friendSlice";

const FriendList = () => {
  const dispatch = useDispatch();
  const friends = useSelector(friendsSelector);

  const loadedFriend = useSelector(loadedFriendSelector);
  const loadingFriend = useSelector(loadingFriendSelector);
  console.log("loadingFriend: ", loadingFriend);
  const socket = io(SOCKET_SERVER_URL, { transports: ["websocket"] });
  useEffect(() => {
    dispatch(userListApi());
  }, [dispatch]);
  useEffect(() => {
    socket.on("user-list", (data) => {
      dispatch(friendSlice.actions.addFriend(data));
    });

    return () => {
      socket.off("user-list");
    };
  }, [socket, dispatch]);
  return (
    <div className="friendList">
      <div className="friendList__search">
        <label htmlFor="search">To:</label>
        <input id="search" type="text" placeholder="Search..." autoFocus />
      </div>
      <div className="friendList__box">
        <div className="friendList__list">
          {loadedFriend &&
            friends.results &&
            friends.results.map((item) => (
              <FriendItem
                key={item.id}
                first_name={item?.profile?.first_name}
                last_name={item?.profile?.last_name}
                email={item?.email}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FriendList;
