import { Link, useLocation } from "react-router-dom";
import "./roomItem.css";
import { useId } from "react";

const RoomItem = () => {
  const id = useId();
  const location = useLocation();
  const active = location.pathname === "/" + id ? "roomItem--active" : "";
  return (
    <Link to={"/" + id} className={"roomItem " + active}>
      <div className="roomItem__img">Đ</div>
      <div className="roomItem__content">
        <span>Đức Đoàn</span>
        <p>Vâng cảm ơn bạn nhiều</p>
      </div>
    </Link>
  );
};

export default RoomItem;
