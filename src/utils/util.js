export const isAuthenticated = () => {
  const authToken = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith("authToken="));
  return !!authToken;
};
