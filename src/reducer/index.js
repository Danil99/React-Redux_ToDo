import { MENU_ACTIVE, EDIT_TASK, CHANGE_COMPLETED, CHANGE_ADDPOP, ADD_TASK, DELETE_TASK, FILTER } from '../action';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case CHANGE_COMPLETED:
      let tasks = [...state.tasks];
      let task = tasks.find(t => t.id === action.id);
      task.completed = !task.completed;
      return {...state, tasks};

    case CHANGE_ADDPOP:
      return {...state, changePop: !state.changePop};

    case MENU_ACTIVE:
      return {...state, menuActive: !state.menuActive};

    case ADD_TASK:
      let newState = {...state};
      newState.tasks.push({id: newState.tasks.length + 1, title: action.title, completed: false, bgColor: action.color});
      return {...newState};

    case DELETE_TASK:
      let newState2 = {...state};
      newState2.tasks = newState2.tasks.filter(task => task.id !== action.id);
      return {...newState2};

    case EDIT_TASK:
      let newState3 = {...state};
      let task1 = newState3.tasks.find(t => t.id === action.id);
      task1.title = action.title;
      if(action.color !== '') task1.bgColor = action.color;
      return newState3;

    case FILTER:
      return {...state, filter: action.filter};

    default:
      return state;
  }
}

export function onStateFilter(state, filter) {
  switch(filter) {
    case "ALL":
      return state;

    case "COMPLETED":
      let newState = {...state};
      newState.tasks = newState.tasks.filter(task => task.completed);
      return {...newState};

    case "UNCOMPLETED":
      let newState2 = {...state};
      newState2.tasks = newState2.tasks.filter(task => !task.completed);
      return {...newState2};

    default:
      return state;
  }
}
