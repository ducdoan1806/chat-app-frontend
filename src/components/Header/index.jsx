import Avatar from "../Avatar";
import "./header.css";
import PropTypes from "prop-types";

const Header = ({ first_name, last_name, email }) => {
  return (
    <div className="header">
      <Avatar size={44} fontSize={16} name={last_name.charAt(0)} />
      <div className="header__name">
        <span>{first_name + " " + last_name}</span>
        <p>{email}</p>
      </div>
    </div>
  );
};
Header.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
};
export default Header;
