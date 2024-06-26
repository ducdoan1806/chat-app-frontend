import "./avatar.css";
import PropTypes from "prop-types";
const Avatar = ({ name, color, size, fontSize }) => {
  return (
    <div
      className="avatar"
      style={{ background: color, width: size, height: size, fontSize }}
    >
      {name?.charAt(0)}
    </div>
  );
};
Avatar.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  name: PropTypes.string,
  fontSize: PropTypes.number,
};
export default Avatar;
