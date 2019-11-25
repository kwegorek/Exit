/**
 * ACTION TYPES
 */
const CHANGE_LOCATION = 'CHANGE_LOCATION';

/**
 * INITIAL STATE
 */
const INITIAL_STATE = 'cabin';

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
export default function(collectedItems = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_LOCATION:
      return location;
    default:
      return collectedItems;
  }
}
