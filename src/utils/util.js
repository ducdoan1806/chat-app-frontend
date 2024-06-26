import { useEffect } from "react";

export const isAuthenticated = () => {
  const authToken = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith("authToken="));
  return !!authToken;
};
export const onEnter = (e, func) => {
  if (e.key === "Enter") func();
};
export const setCookie = ({ value, days }) => {
  const expires = new Date(Date.now() + days * 1000).toUTCString();
  document.cookie = `authToken=${value}; path=/; expires=${expires};`;
};

// Hàm để lấy giá trị cookie
export const getCookie = (name) => {
  let cookieStr = document.cookie;
  cookieStr.split("; ").forEach((item) => {
    if (item.search(name) !== -1) {
      cookieStr = item.split("=")[1];
    }
  });
  return cookieStr;
};
export const useOutside = (ref, func) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        func();
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, func]);
};
