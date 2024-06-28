import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";

import "./room.css";
import InputMessage from "../../components/InputMessage";
import MessageItem from "../../components/MessageItem";
import { useSelector } from "react-redux";

const Room = () => {
  const { friend } = useSelector((state) => state.friend);

  const [message, setMessage] = useState("");
  const [messageArr, setMessageArr] = useState([]);
  const messageBoxRef = useRef(null);
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
  return (
    <div className="room">
      <div className="room__header">
        <Header
          first_name={friend?.profile?.first_name || "--"}
          last_name={friend?.profile?.last_name || "--"}
          email={friend?.email || "--"}
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
