import Avatar from "../Avatar";
import "./header.css";
import PropTypes from "prop-types";

const Header = ({ reciever }) => {
  return (
    <div className="header">
      <Avatar
        size={44}
        fontSize={16}
        name={reciever?.user_profile?.profile?.last_name}
      />
      <div className="header__name">
        <span>
          {(reciever?.user_profile?.profile?.first_name || "--") +
            " " +
            (reciever?.user_profile?.profile?.last_name || "--")}
        </span>
        <p>{reciever?.user_profile?.email || "--"}</p>
      </div>
    </div>
  );
};
Header.propTypes = {
  reciever: PropTypes.object || PropTypes.undefined,
};
export default Header;
