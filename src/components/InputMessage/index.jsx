import PropTypes from "prop-types";
import sendIcon from "../../assets/images/send.svg";
import "./inputMessage.css";
import { useEffect, useRef } from "react";

const InputMessage = ({ sendMessage, message, setMessage }) => {
  const textareaRef = useRef(null);
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [message]);
  return (
    <div className="inputMessage">
      <div className="inputMessage__input">
        <textarea
          ref={textareaRef}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={message}
          placeholder="Type message ..."
          rows={1}
        ></textarea>
        <button onClick={sendMessage}>
          <img width={20} height={20} src={sendIcon} alt="" />
        </button>
      </div>
    </div>
  );
};
InputMessage.propTypes = {
  message: PropTypes.string,
  sendMessage: PropTypes.func,
  setMessage: PropTypes.func,
};
export default InputMessage;
