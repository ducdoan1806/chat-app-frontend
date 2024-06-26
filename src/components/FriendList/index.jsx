import FriendItem from "../FriendItem";
import "./friendList.css";

const FriendList = () => {
  return (
    <div className="friendList">
      <div className="friendList__search">
        <label htmlFor="search">To:</label>
        <input id="search" type="text" placeholder="Search..." autoFocus />
      </div>
      <div className="friendList__box">
        <div className="friendList__list">
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
        </div>
      </div>
    </div>
  );
};

export default FriendList;
