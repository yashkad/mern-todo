import { addTask } from "../services/tasks";
import Action from "./Action";

const reducer = (state, action) => {
  switch (action.type) {
    case Action.ADD_TASK: {
      return { todoList: [action.payload, ...state.todoList] };
    }
    case Action.REMOVE_TASK: {
      const data = state.todoList.filter((item) => {
        return item._id != action.payload;
      });
      return { todoList: data };
    }
    case Action.EDIT_TASK: {
      const data = state.todoList.map((item) => {
        if (item._id == action.payload) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      return { todoList: data };
    }
    case Action.SET_INIT_LIST: {
      return { todoList: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
