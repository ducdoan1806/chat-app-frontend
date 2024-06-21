import PropTypes from "prop-types";
import "./inputMessage.css";
import ContentEditable from "react-contenteditable";

const InputMessage = ({ sendMessage, message, setMessage }) => {
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() !== "") {
        console.log("Send message:", message);
        sendMessage();
        setMessage("");
      }
    } else if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      setMessage(message + "\n");
    }
  };

  return (
    <ContentEditable
      html={message} // Set HTML initial value
      onChange={handleChange} // Handle onChange event
      onKeyDown={handleKeyDown}
      placeholder="Type your message..." // Add placeholder
      className="inputMessage"
    />
  );
};
InputMessage.propTypes = {
  message: PropTypes.string,
  sendMessage: PropTypes.func,
  setMessage: PropTypes.func,
};
export default InputMessage;
