/**
 * ACTION TYPES
 */
const CHANGE_LOCATION = 'CHANGE_LOCATION';

/**
 * INITIAL STATE
 */
const INITIAL_STATE = 'tutorial';

/**
 * ACTION CREATORS
 */
export const changeLocation = location => {
  return {
    type: CHANGE_LOCATION,
    location,
  };
};

/**
 * REDUCER
 */
export default function(location = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_LOCATION:
      return action.location;
    default:
      return location;
  }
}
