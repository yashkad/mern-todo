import {
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import MyContext from "../MyContext";
import { deleteTask, getTaskList, updateTask } from "../services/tasks";
import Action from "../Store/Action";

const TasksList = (props) => {
  const myState = useContext(MyContext);

  const data = myState.state.todoList;

  const handleDelete = async (item) => {
    const res = await deleteTask(item._id);
    myState.dispatch({ type: Action.REMOVE_TASK, payload: item._id });
  };

  const handleToggle = async (item) => {
    const res = await updateTask(item._id, {
      ...item,
      completed: !item.completed,
    });
    myState.dispatch({ type: Action.EDIT_TASK, payload: item._id });
  };

  const setInitialList = async () => {
    const res = await getTaskList();
    myState.dispatch({ type: Action.SET_INIT_LIST, payload: res.data.data });
  };

  useEffect(() => {
    setInitialList();
  }, []);

  return (
    <div className="task-container">
      <List>
        {data.map((item, index) => {
          return (
            <ListItem key={index}>
              <ListItemIcon>
                <Checkbox
                  checked={item.completed}
                  onChange={(e) => handleToggle(item)}
                />
              </ListItemIcon>
              <ListItemText
                onClick={() => handleToggle(item)}
                id={"labelId"}
                primary={`${item.task}`}
                style={{
                  textDecoration: item.completed ? "line-through" : "",
                }}
              />
              <Button variant="outlined" onClick={() => handleDelete(item)}>
                delete
              </Button>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default TasksList;
