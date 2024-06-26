import { useUserListQs } from "../../features/userList/service";
import FriendItem from "../FriendItem";
import "./friendList.css";

const FriendList = () => {
  const userList = useUserListQs();

  return (
    <div className="friendList">
      <div className="friendList__search">
        <label htmlFor="search">To:</label>
        <input id="search" type="text" placeholder="Search..." autoFocus />
      </div>
      <div className="friendList__box">
        <div className="friendList__list">
          {userList.isFetched &&
            userList.data.data.map((item) => (
              <FriendItem
                key={item.id}
                first_name={item?.profile?.first_name}
                last_name={item?.profile?.last_name}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FriendList;
