import { Button, Paper, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";

import MyContext from "../MyContext";
import { addTask } from "../services/tasks";
import Action from "../Store/Action";

function AddTask(props) {
  const myState = useContext(MyContext);

  const [todoText, setTodoText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await addTask({ task: todoText });
    const data = res.data;

    myState.dispatch({
      type: Action.ADD_TASK,
      payload: data,
    });

    setTodoText("");
  };

  return (
    <div className="">
      <Paper elevation={4} className="container">
        <div className="heading">TaskList App</div>
        <form onSubmit={handleSubmit} className="">
          <TextField
            value={todoText}
            variant="outlined"
            size="small"
            style={{ width: "80%" }}
            value={todoText}
            required={true}
            onChange={(e) => {
              setTodoText(e.target.value);
            }}
            placeholder="Add Todo here"
          />

          <Button variant="outlined" color="primary" type="submit">
            ADD
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default AddTask;
