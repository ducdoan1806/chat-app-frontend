import "./spinLoading.css";
import PropTypes from "prop-types";

const SpinLoading = ({ haveBackground = true, size }) => {
  return haveBackground ? (
    <div className="spinLoading__bg">
      <div style={{ width: size }} className="spinLoading"></div>
    </div>
  ) : (
    <div style={{ width: size }} className="spinLoading"></div>
  );
};
SpinLoading.propTypes = {
  size: PropTypes.number,
  haveBackground: PropTypes.bool,
};
export default SpinLoading;
