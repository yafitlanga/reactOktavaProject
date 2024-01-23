import api from "../api";

//CRUD
const getUsers = async () => {
  return await api.get("Users/GetUsers").then((res) => res.data);
};
const getUserById = async (userId) => {
  return await api
    .get(`Users/GetUserById?userId=${userId}`)
    .then((res) => res.data);
};
const login = async (userId, password) => {
  return await api
    .get(`Users/Login?userId=${userId}&password=${password}`)
    .then((res) => res);
};
const addUser = async (user) => {
  return await api.post("InsertUser", user).then((res) => res.data);
};
const updateUser = async (user) => {
  return await api.put("UpdateUser", user).then((res) => res.data);
};
const deleteUser = async (id, userId) => {
  return await api
    .delete(`DeleteUser?id=${id}&userId=${userId}`)
    .then((res) => res.data);
};
export { getUsers, getUserById, addUser, updateUser, deleteUser, login };
