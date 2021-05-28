const initialstate = { loggedin: false };
export const userdetails = (user = initialstate, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return { loggedin: true, user: payload };
    case "logout":
      return { loggedin: false };
    default:
      return user;
  }
};
