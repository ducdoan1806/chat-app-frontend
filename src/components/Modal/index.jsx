import { useRef } from "react";
import "./modal.css";
import PropTypes from "prop-types";
import { useOutside } from "../../utils/util";
const Modal = ({ children, close }) => {
  const modalRef = useRef();
  useOutside(modalRef, close);
  return (
    <div className="modal">
      <div className="modal__box" ref={modalRef}>
        <div className="modal__header">
          <span>New message</span>
          <button onClick={close}>✕</button>
        </div>
        {children}
      </div>
    </div>
  );
};
Modal.propTypes = {
  children: PropTypes.element,
  close: PropTypes.func,
};
export default Modal;
