import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";

import "./room.css";
import InputMessage from "../../components/InputMessage";
import MessageItem from "../../components/MessageItem";

const messageData = [
  {
    content: "tsdfkasl; asdasd as sa[dsapkl as asdklsa asdsasa",
    isMine: false,
  },
  {
    content: "tsdfkasl; asdasd as sa[dsapkl as asdklsa asdsasa",
    isMine: false,
  },
  {
    content: "tsdfkasl; asdasd as sa[dsapkl as asdklsa asdsasa",
    isMine: false,
  },
  {
    content: "tsdfkasl; asdasd as sa[dsapkl as asdklsa asdsasa",
    isMine: false,
  },
  {
    content: "tsdfkasl; asdasd as sa[dsapkl as asdklsa asdsasa",
    isMine: false,
  },
  {
    content: "tsdfkasl; asdasd as sa[dsapkl as asdklsa asdsasa",
    isMine: false,
  },
  { content: "tsdfkasl; asdasd as sa[dsapkl as asdklsa asdsasa", isMine: true },
  { content: "tsdfkasl; asdasd as sa[dsapkl as asdklsa asdsasa", isMine: true },
];
const Room = () => {
  const [message, setMessage] = useState("");
  const [messageArr, setMessageArr] = useState(messageData);
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
        <Header />
      </div>
      <div className="room__box">
        <div className="room__content" ref={messageBoxRef}>
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
