import { nanoid } from "nanoid";

export const addTask = (text, title) => {
  return {
    type: "tasks/addTask",
    payload: {
      id: nanoid(),
      completed: false,
      text,
      title,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: "tasks/deleteTask",
    payload: taskId,
  };
};

export const correctTask = (taskId, newText, newTitle) => {
  return {
    type: "tasks/correctTask",
    payload: {
      taskId,
      text: newText,
      title: newTitle,
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