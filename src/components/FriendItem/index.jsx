import { paleColors } from "../../utils/util";
import Avatar from "../Avatar";
import "./friendItem.css";
import PropTypes from "prop-types";
const FriendItem = ({ first_name, last_name, email }) => {
  return (
    <div className="friendItem">
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
    </div>
  );
};
FriendItem.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
};
export default FriendItem;
