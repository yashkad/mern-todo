import { getTaskList } from "../services/tasks";

const getAllTodos = async () => {
  const res = await getTaskList();
  return res.data;
};

const initialState = {
  //   todoList: await getAllTodos(),
  todoList: [],
};

export default initialState;
