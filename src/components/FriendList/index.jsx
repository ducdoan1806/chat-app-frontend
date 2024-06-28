import { useEffect } from "react";
import FriendItem from "../FriendItem";
import "./friendList.css";
// import { SOCKET_SERVER_URL } from "../../utils/util";
// import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { userListApi } from "../../features/userList/api";
import friendSlice from "../../features/userList/friendSlice";
import { useDebounced } from "../../utils/util";
import SpinLoading from "../SpinLoading";

const FriendList = () => {
  const dispatch = useDispatch();

  const debouncedSearch = useDebounced((query) => {
    dispatch(friendSlice.actions.setSearchQuery({ searchQuery: query }));
  }, 500); // Adjust the debounce delay as needed

  const handleSearch = (e) => {
    debouncedSearch(e.target.value);
  };
  const friendSl = useSelector((state) => state.friend);
  const { page, pageSize, searchQuery, count, loading } = friendSl;

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    if (
      scrollHeight <= scrollTop + clientHeight &&
      count > friendSl?.friends?.length
    ) {
      if (!loading) {
        dispatch(
          friendSlice.actions.updatePagination({
            page: page + 1,
            pageSize,
          })
        );
        dispatch(userListApi({ page: page + 1, pageSize, searchQuery }));
      }
    }
  };

  useEffect(() => {
    if (page === 1) dispatch(userListApi({ page, pageSize, searchQuery }));
  }, [dispatch, page, pageSize, searchQuery]);
  // const socket = io(SOCKET_SERVER_URL, { transports: ["websocket"] });

  // useEffect(() => {
  //   socket.on("user-list", (data) => {
  //     dispatch(friendSlice.actions.addFriend(data));
  //   });

  //   return () => {
  //     socket.off("user-list");
  //   };
  // }, [socket, dispatch]);
  return (
    <div className="friendList">
      <div className="friendList__search">
        <label htmlFor="search">To:</label>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          autoFocus
          onChange={handleSearch}
        />
      </div>
      <div className="friendList__box">
        <div className="friendList__list" onScroll={handleScroll}>
          {friendSl.loaded &&
          friendSl.friends &&
          friendSl.friends.length === 0 ? (
            <i style={{ textAlign: "center", color: "#858585" }}>
              User not found
            </i>
          ) : (
            friendSl.friends.map((item) => (
              <FriendItem
                key={item.id}
                userId={item.id}
                first_name={item?.profile?.first_name}
                last_name={item?.profile?.last_name}
                email={item?.email}
              />
            ))
          )}
          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: 10,
              }}
            >
              <SpinLoading haveBackground={false} size={30} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendList;
