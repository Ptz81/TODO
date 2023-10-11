import { nanoid } from "nanoid";

export const addTask = (text, title) => {
  return {
    type: "tasks/addTask",
    payload: {
      id: nanoid(),
      completed: false,
      title,
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

export const correctTask = (taskId, newText, newTitle) => {
  return {
    type: "tasks/correctTask",
    payload: {
      taskId,
      title: newTitle,
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

export const toggleFavorites = taskId => {
  return {
    type: "tasks/toggleFavorites",
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};