import { statusFilters } from "./constants";
import { combineReducers } from "redux";

const tasksInitialState = [
  { id: 0, title: "Test", text: "Make tech test", completed: true },
  { id: 1, title: "Task", text: "Make code task: ToDo", completed: true },
  { id: 2, title: "HR", text: "Meet with HR", completed: false },
  { id: 3, title: "Offer", text: "Discuss job offer", completed: false },
  { id: 4, title: "Job", text: "Start to work", completed: false },
];

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return [...state, action.payload];
    case "tasks/deleteTask":
      return state.filter(task => task.id !== action.payload);
      case "tasks/correctTask": {
          const { taskId, text, title } = action.payload;
          return state.map(task =>
              task.id === taskId ? { ...task, text, title } : task
          )
      }  
      case "tasks/toggleCompleted":
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
    tasks: tasksReducer,
    filters: filtersReducer,
});
