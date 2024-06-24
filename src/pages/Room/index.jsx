import { useState } from "react";
import Header from "../../components/Header";

import "./room.css";
import InputMessage from "../../components/InputMessage";

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
      <div className="room__box">
        <div className="room__content"></div>
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
