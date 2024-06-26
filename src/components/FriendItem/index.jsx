import Avatar from "../Avatar";
import "./friendItem.css";

const FriendItem = () => {
  return (
    <div className="friendItem">
      <Avatar size={44} />
      <span>Test</span>
    </div>
  );
};

export default FriendItem;
