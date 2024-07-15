import { Link } from "react-router-dom";
import { paleColors } from "../../utils/const";
import Avatar from "../Avatar";
import "./friendItem.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/modalSlice";
import friendSlice from "../../features/userList/friendSlice";
const FriendItem = ({ first_name, last_name, email, userId }) => {
  const dispatch = useDispatch();

  return (
    <Link
      to={`/room/${userId}`}
      className="friendItem"
      onClick={() => {
        dispatch(closeModal("friend-list"));
        dispatch(friendSlice.actions.getFriendId(userId));
      }}
    >
      <Avatar
        color={paleColors[Math.floor(Math.random() * paleColors.length)]}
        name={last_name}
        size={44}
        fontSize={16}
      />
      <div className="friendItem__text">
        <span>{first_name + " " + last_name}</span>
        <p>{email}</p>
      </div>
    </Link>
  );
};
FriendItem.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
  userId: PropTypes.number,
};
export default FriendItem;
