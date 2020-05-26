/*
 * Action types
 */
export const SELECT_LOWER = "SELECT_LOWER";
export const SELECT_UPPER = "SELECT_UPPER";
export const ADD_ITEM_TO_LIST = "ADD_ITEM_TO_LIST";

/*
 * Action creators
 */
export function selectLower(id) {
  return { type: SELECT_LOWER, payload: id };
}

export function selectUpper(id) {
  return { type: SELECT_UPPER, payload: id };
}

export function addItemToList(item) {
  return { type: ADD_ITEM_TO_LIST, payload: item };
}
