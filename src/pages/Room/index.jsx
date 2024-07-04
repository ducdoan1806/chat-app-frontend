import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";

import "./room.css";
import InputMessage from "../../components/InputMessage";
import MessageItem from "../../components/MessageItem";
import { useDispatch, useSelector } from "react-redux";
import roomSlice from "../../features/room/roomSlice";
import { useLocation } from "react-router-dom";
import {
  currentUserSelector,
  loadedUserSelector,
} from "../../features/auth/userSlice";
import { io } from "socket.io-client";
import { SOCKET_SERVER_URL } from "../../utils/const";
import { messageApi } from "../../features/message/messageApi";
import messageSlice from "../../features/message/messageSlice";

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
  const roomId = locationArr[locationArr.length - 1];
  const { room, loaded: roomLoaded } = useSelector((state) => state.room);

  const currentUser = useSelector(currentUserSelector);
  const loadedUser = useSelector(loadedUserSelector);

  useEffect(() => {
    if (roomLoaded) {
      dispatch(roomSlice.actions.getRoomById(Number(roomId)));
      dispatch(messageApi({ page: 1, pageSize: 100, roomId }));
    }
  }, [dispatch, roomId, roomLoaded]);

  useEffect(() => {
    const newSoket = io(SOCKET_SERVER_URL);
    setSocket(newSoket);
    if (loadedUser && roomLoaded) {
      newSoket.emit("join-room", {
        room: roomId,
        userId: currentUser?.data?.id,
      });
      newSoket.on("recieve-message", ({ userId, message }) => {
        dispatch(
          messageSlice.actions.addMessage({ user: userId, content: message })
        );
      });
    }
    return () => {
      newSoket.disconnect();
    };
  }, [loadedUser, currentUser, roomId, dispatch, roomLoaded]);
  useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTo(0, messageBoxRef.current.scrollHeight);
    }
  }, [messageData.length]);
  const sendMessage = () => {
    if (message && loadedUser && socket) {
      socket.emit("send-message", {
        room: roomId,
        message: message.trim().replace(/\n/g, "<br />"),
        userId: currentUser?.data?.id,
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
