import { useEffect } from "react";
import { useUserListQs } from "../../features/userList/service";
import FriendItem from "../FriendItem";
import "./friendList.css";
import { SOCKET_SERVER_URL } from "../../utils/util";
import { io } from "socket.io-client";
import { useQueryClient } from "@tanstack/react-query";

const FriendList = () => {
  const queryClient = useQueryClient();
  const userList = useUserListQs();
  const socket = io(SOCKET_SERVER_URL, { transports: ["websocket"] });
  useEffect(() => {
    socket.on("user-list", (data) => {
      if (userList.isFetched) {
        userList.data.results.push(data);
        queryClient.setQueryData(["userList"], (prev) => {
          return prev;
        });
      }
    });

    return () => {
      socket.off("user-list");
    };
  }, [queryClient, socket, userList?.isFetched, userList?.data?.results]);
  return (
    <div className="friendList">
      <div className="friendList__search">
        <label htmlFor="search">To:</label>
        <input id="search" type="text" placeholder="Search..." autoFocus />
      </div>
      <div className="friendList__box">
        <div className="friendList__list">
          {userList?.isFetched &&
            userList?.data?.results &&
            userList?.data?.results.map((item) => (
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
