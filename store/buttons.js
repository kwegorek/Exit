/**
 * ACTION TYPES
 */
const DISABLE_BUTTONS = 'DISABLE_BUTTONS';
const UPDATEL_COMPLETED = 'UPDATEL_COMPLETED';

/**
 * INITIAL STATE
 */
const INITIAL_STATE = {
  bookButton: true,
  tableButton: false,
  hatButton: false,
  allCompleted: true //set to true temporarily 
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

//use update in the last component to just update allCpomplted to true 
export const updateCompleted = () => {
  return {
    type: UPDATE_COMPLETED ,
   
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
    case UPDATEL_COMPLETED:
      return {...buttons,allCompleted:true };
    default:
      return buttons;
  }
}
