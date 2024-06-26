import "./messageItem.css";
import PropTypes from "prop-types";
const MessageItem = ({
  message = "Helodasdasdas asdjaskjd asdaskjd asdasdj asdsad; asdas á;dsadjs Helodasdasdas asdjaskjd asdaskjd asdasdj asdsad; asdas á;dsadjs Helodasdasdas asdjaskjd asdaskjd asdasdj asdsad; asdas á;dsadjs",
  isMine,
}) => {
  return (
    <div className={"messageItem" + (isMine ? " isMine" : "")}>
      {!isMine && <span>Đ</span>}
      <p dangerouslySetInnerHTML={{ __html: message }} />
    </div>
  );
};
MessageItem.propTypes = {
  message: PropTypes.string,
  isMine: PropTypes.bool,
};
export default MessageItem;
