import api from "../api";

//CRUD
const getUsers = async (usersId) => {
  return await api.get(`Users?Id=${usersId}`).then((res) => res.data);
};

const getUserById = async (id, userId) => {
  return await api
    .get(`UserById?id=${id}&userId=${userId}`)
    .then((res) => res.data);
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

export { getUsers, getUserById, addUser, updateUser, deleteUser };
