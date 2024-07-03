import Avatar from "../Avatar";
import "./header.css";
import PropTypes from "prop-types";

const Header = ({ name, email }) => {
  return (
    <div className="header">
      <Avatar
        size={44}
        fontSize={16}
        name={name?.split(" ")[name?.split(" ").length - 1].charAt(0)}
      />
      <div className="header__name">
        <span>{name}</span>
        <p>{email}</p>
      </div>
    </div>
  );
};
Header.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};
export default Header;
