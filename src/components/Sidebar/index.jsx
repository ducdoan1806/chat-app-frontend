import "./sidebar.css";
import noteIcon from "../../assets/images/note.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <span>Chat App</span>
        <button>
          <img width={30} height={30} src={noteIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
