import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "./roomItem.css";

import Avatar from "../Avatar";

const RoomItem = (props) => {
  let userIndex = 0;
  if (props.userId === props.user_created) {
    userIndex = 1;
  }
  const nameArr = props.name.split(", ");
  
  const location = useLocation();
  const active =
    location.pathname === "/room/" + props?.id ? " roomItem--active" : "";

  return (
    <Link to={"/room/" + props?.id} className={"roomItem" + active}>
      <Avatar
        size={56}
        name={
          nameArr[userIndex].split(" ")[
            nameArr[userIndex].split(" ").length - 1
          ]
        }
        fontSize={18}
      />
      <div className="roomItem__content">
        <span>{nameArr[userIndex] || "--"}</span>
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
