const userHelper = {
  findUserNameById: (users, user_id) => {
    const foundUser = users.find((u) => u.id == user_id);
    return foundUser ? foundUser.name : "";
  },
};
export default userHelper;
