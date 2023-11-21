export const getListUser = () => {
  if (!localStorage["users"]) {
    localStorage["users"] = "[]";
  }

  let users = localStorage["users"];
  users = JSON.parse(users);
  return users;
};

export const addUser = (user) => {
  const users = getListUser();
  users.push(user);
  localStorage["users"] = JSON.stringify(users);
};


export const getUserById = (id) => {
  const users = getListUser();
  const user = users.find((user) => user.id === id);
  return user;
};

export const editUser = (id, newuser) => {
  let users = getListUser();
  users = users.filter((user) => user.id !== id);
  users.push(newuser);
  localStorage["users"] = JSON.stringify(users);
};
