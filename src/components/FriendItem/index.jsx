import { paleColors } from "../../utils/util";
import Avatar from "../Avatar";
import "./friendItem.css";
import PropTypes from "prop-types";
const FriendItem = ({ first_name, last_name }) => {
  return (
    <div className="friendItem">
      <Avatar
        color={paleColors[Math.floor(Math.random() * paleColors.length)]}
        name={last_name}
        size={44}
        fontSize={16}
      />
      <span>{first_name + " " + last_name}</span>
    </div>
  );
};
FriendItem.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
};
export default FriendItem;
