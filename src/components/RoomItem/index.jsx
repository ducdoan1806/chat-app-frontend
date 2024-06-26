import { Link, useLocation } from "react-router-dom";
import "./roomItem.css";
import { useId } from "react";
import Avatar from "../Avatar";

const RoomItem = () => {
  const id = useId();
  const location = useLocation();
  const active = location.pathname === "/" + id ? " roomItem--active" : "";

  return (
    <Link to={"/" + id} className={"roomItem" + active}>
      <Avatar size={56} name={"Đức"} fontSize={18} />
      <div className="roomItem__content">
        <span>Đức Đoàn</span>
        <p>Vâng cảm ơn bạn nhiều</p>
      </div>
    </Link>
  );
};

export default RoomItem;
