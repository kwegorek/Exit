/**
 * ACTION TYPES
 */
const DISABLE_BUTTONS = 'DISABLE_BUTTONS';
const GET_ALL_COMPLETED = 'GET_ALL_COMPLETED';

/**
 * INITIAL STATE
 */
const INITIAL_STATE = {
  bookButton: true,
  tableButton: false,
  hatButton: false,
  allCompleted: true
};

/**
 * ACTION CREATORS
 */
export const disableAllExcept = (buttonToEnable, buttonToDisable) => {
  return {
    type: DISABLE_BUTTONS,
    buttonToEnable,
    buttonToDisable,
  };
};
export const getAllCompleted = () => {
  return {
    type: GET_ALL_COMPLETED,
  }
}

/**
 * REDUCER
 */
export default function(buttons = INITIAL_STATE, action) {
  switch (action.type) {
    case DISABLE_BUTTONS:
      const newState = { ...buttons };
      newState[action.buttonToEnable] = true;
      newState[action.buttonToDisable] = false;
      return newState;
    case GET_ALL_COMPLETED:
      return {...buttons};
    default:
      return buttons;
  }
}
