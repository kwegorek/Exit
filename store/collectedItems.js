/**
 * ACTION TYPES
 */
const GET_COLLECTED_ITEMS = 'GET_COLLECTED_ITEMS';
const ADD_COLLECTED_ITEM = 'ADD_COLLECTED_ITEM';

/**
 * INITIAL STATE
 */
const INITIAL_STATE = [];

/**
 * ACTION CREATORS
 */
export const getCollectedItems = () => {
  return {
    type: GET_COLLECTED_ITEMS,
  };
};

export const addCollectedItem = collectedItem => {
  return {
    type: ADD_COLLECTED_ITEM,
    collectedItem,
  };
};

/**
 * REDUCER
 */
export default function(collectedItems = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_COLLECTED_ITEM:
      return [...collectedItems, action.collectedItem];
    case GET_COLLECTED_ITEMS:
      return collectItems;
    default:
      return collectedItems;
  }
}
