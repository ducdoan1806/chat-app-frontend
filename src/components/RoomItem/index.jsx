import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "./roomItem.css";

import Avatar from "../Avatar";

const RoomItem = (props) => {
  const location = useLocation();

  const userProfile = props.member?.find(
    (item) => item?.user_profile?.id !== props?.userId
  )?.user_profile;
  const active =
    location.pathname === "/room/" + userProfile?.id ? " roomItem--active" : "";
  return (
    <Link to={"/room/" + userProfile?.id} className={"roomItem" + active}>
      <Avatar
        size={56}
        name={
          (userProfile?.profile?.first_name || "--") +
          " " +
          (userProfile?.profile?.last_name || "--")
        }
        fontSize={18}
      />
      <div className="roomItem__content">
        <span>
          {(userProfile?.profile?.first_name || "--") +
            " " +
            (userProfile?.profile?.last_name || "--")}
        </span>
        <p>{props?.messages}</p>
      </div>
    </Link>
  );
};
RoomItem.propTypes = {
  messages: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  member: PropTypes.array,
  userId: PropTypes.number,
  user_created: PropTypes.number,
};
export default RoomItem;
