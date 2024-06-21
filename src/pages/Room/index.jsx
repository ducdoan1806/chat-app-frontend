import Header from "../../components/Header";
import sendIcon from "../../assets/images/send.svg";
import "./room.css";
import InputMessage from "../../components/InputMessage";
import { useState } from "react";
const Room = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    setMessage("");
  };
  return (
    <div className="room">
      <div className="room__header">
        <Header />
      </div>
      <div className="room__box"></div>
      <div className="room__input">
        <InputMessage
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
        <button onClick={sendMessage}>
          <img width={20} height={20} src={sendIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Room;
