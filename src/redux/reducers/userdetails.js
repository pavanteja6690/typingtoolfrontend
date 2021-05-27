const initialstate = { loggedin: false };
export const userdetails = (user = initialstate, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return { loggedin: true, user: payload };
    default:
      return user;
  }
};
