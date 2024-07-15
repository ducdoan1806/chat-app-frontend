import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";

import "./room.css";
import InputMessage from "../../components/InputMessage";
import MessageItem from "../../components/MessageItem";
import { useDispatch, useSelector } from "react-redux";

import { useLocation } from "react-router-dom";
import {
  currentUserSelector,
  loadedUserSelector,
} from "../../features/auth/userSlice";
import { io } from "socket.io-client";
import { SOCKET_SERVER_URL } from "../../utils/const";
import { messageApi } from "../../features/message/messageApi";
import messageSlice from "../../features/message/messageSlice";
import { getCookie } from "../../utils/util";
import roomSlice from "../../features/room/roomSlice";

const Room = () => {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);

  const { messages: messageData, loaded: messageLoaded } = useSelector(
    (state) => state.message
  );

  const messageBoxRef = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const locationArr = location.pathname.split("/");
  const recieverId = locationArr[locationArr.length - 1];
  const { room, loaded: roomLoaded } = useSelector((state) => state.room);

  const currentUser = useSelector(currentUserSelector);
  const loadedUser = useSelector(loadedUserSelector);

  useEffect(() => {
    if (recieverId && socket) {
      socket.emit("create-room", {
        receiver_id: recieverId,
        token: getCookie("authToken"),
      });
      // dispatch(createRoomApi({ receiver_id: recieverId }));
    }
  }, [recieverId, dispatch, socket]);
  useEffect(() => {
    if (room?.id)
      dispatch(messageApi({ page: 1, pageSize: 1000, roomId: room?.id }));
  }, [room?.id, dispatch]);
  useEffect(() => {
    const newSoket = io(SOCKET_SERVER_URL, {
      transports: ["websocket", "polling"],
    });
    setSocket(newSoket);
    if (loadedUser && roomLoaded) {
      newSoket.emit("join-room", {
        room: room?.id,
        userId: currentUser?.data?.id,
      });
      newSoket.on("recieve-message", (data) => {
        dispatch(messageSlice.actions.addMessage(data));
      });
      newSoket.on("create-room", (data) => {
        if (data.status)
          dispatch(roomSlice.actions.createRoomSuccess(data.data));
        else dispatch(roomSlice.actions.createRoomFail(data.data));
      });
    }
    return () => {
      newSoket.disconnect();
    };
  }, [loadedUser, currentUser, room?.id, dispatch, roomLoaded]);
  useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTo(0, messageBoxRef.current.scrollHeight);
    }
  }, [messageData.length]);
  const sendMessage = () => {
    if (message && loadedUser && socket) {
      socket.emit("send-message", {
        room: room?.id,
        content: message.trim().replace(/\n/g, "<br />"),
        token: getCookie("authToken"),
      });
      setMessage("");
    }
  };
  return (
    <div className="room">
      <div className="room__header">
        <Header
          reciever={room?.member.find(
            (item) => item?.user_profile?.id !== currentUser?.data?.id
          )}
        />
      </div>
      <div className="room__box">
        <div className="room__main" ref={messageBoxRef}>
          <div className="room__content">
            {!messageData?.length && (
              <p
                style={{ textAlign: "center", fontSize: 14, marginTop: "auto" }}
              >
                Send first message
              </p>
            )}
            {loadedUser &&
              messageLoaded &&
              messageData.map((item, idx) => (
                <MessageItem
                  key={idx}
                  isMine={currentUser?.data?.id === item?.user}
                  message={item.content}
                />
              ))}
          </div>
        </div>

        <InputMessage
          sendMessage={sendMessage}
          message={message}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
};

export default Room;
