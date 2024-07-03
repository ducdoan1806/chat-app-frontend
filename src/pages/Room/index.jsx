import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";

import "./room.css";
import InputMessage from "../../components/InputMessage";
import MessageItem from "../../components/MessageItem";
import { useDispatch, useSelector } from "react-redux";
import roomSlice from "../../features/room/roomSlice";
import { useLocation } from "react-router-dom";
import { currentUserSelector } from "../../features/auth/userSlice";

const Room = () => {
  const [message, setMessage] = useState("");
  const [messageArr, setMessageArr] = useState([]);
  const messageBoxRef = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const locationArr = location.pathname.split("/");
  const roomId = locationArr[locationArr.length - 1];
  const { room, loaded: roomLoaded } = useSelector((state) => state.room);

  const currentUser = useSelector(currentUserSelector);

  const sendMessage = () => {
    if (message) {
      setMessageArr([
        ...messageArr,
        { content: message.trim().replace(/\n/g, "<br />"), isMine: true },
      ]);
      setMessage("");
    }
  };
  useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTo(0, messageBoxRef.current.scrollHeight);
    }
  }, [messageArr]);
  useEffect(() => {
    if (roomLoaded) dispatch(roomSlice.actions.getRoomById(Number(roomId)));
  }, [dispatch, roomId, roomLoaded]);
  return (
    <div className="room">
      <div className="room__header">
        <Header
          name={
            roomLoaded
              ? currentUser?.id === room?.user_created
                ? room?.name?.split(", ")[0]
                : room?.name?.split(", ")[1]
              : "--"
          }

          // email={friend?.email || "--"}
        />
      </div>
      <div className="room__box">
        <div className="room__content" ref={messageBoxRef}>
          {!messageArr.length && (
            <p style={{ textAlign: "center", fontSize: 14, marginTop: "auto" }}>
              Send first message
            </p>
          )}
          {messageArr.map((item, idx) => (
            <MessageItem
              key={idx}
              isMine={item.isMine}
              message={item.content}
            />
          ))}
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
