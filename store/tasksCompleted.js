/**
 * ACTION TYPES
 */
const GET_COMPLETED_TASKS = 'GET_COMPLETED_TASKS';
const ADD_MUSIC_TASK = 'ADD_MUSIC_TASK';

/**
 * INITIAL STATE
 */
const INITIAL_STATE = {musisctable:false}

/**
 * ACTION CREATORS
 */
export const getCompletedTasks = () => {
  return {
    type: GET_COMPLETED_TASKS,
  };
};

export const addCompletedTasks = bool => {
  return {
    type: ADD_MUSIC_TASK,
    bool,
  };
};

/**
 * REDUCER
 */
export default function(tasksCompleted = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_MUSIC_TASK :
      return {...tasksCompleted, musisctable:action.bool};
    case GET_COMPLETED_TASKS:
      return tasksCompleted 
    default:
      return tasksCompleted;
  }
}
