import axios from "axios";

const url = "http://127.0.0.1:8080/api/tasks";

export const getTaskList = async () => {
  return await axios.get(url);
};

export const addTask = async (task) => {
  return await axios.post(url, task);
};

export const updateTask = async (id, task) => {
  return await axios.put(url + "/" + id, task);
};

export const deleteTask = async (id) => {
  return await axios.delete(url + "/" + id);
};
