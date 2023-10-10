import { nanoid } from "nanoid";

export const addTask = text => {
  return {
    type: "tasks/addTask",
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: "tasks/deleteTask",
    payload: taskId,
  };
};

export const correctTask = (taskId, newText) => {
  return {
    type: "tasks/correctTask",
    payload: {
      taskId,
      text: newText,
    },
  };
};

export const toggleCompleted = taskId => {
  return {
    type: "tasks/toggleCompleted",
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};