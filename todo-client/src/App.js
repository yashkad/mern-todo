import { Button, Paper, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useReducer, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import MyContext from "./MyContext";
import initialState from "./Store/initialState";
import reducer from "./Store/reducer";


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div className="App flex">
        <AddTask />
        <TasksList />
      </div>
    </MyContext.Provider>
  );
};

export default App;
