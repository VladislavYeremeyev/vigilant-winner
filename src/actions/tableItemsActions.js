/*
 * Action types
 */
export const SELECT_LOWER = "SELECT_LOWER";
export const SELECT_UPPER = "SELECT_UPPER";
export const ADD_ITEM_TO_LIST = "ADD_ITEM_TO_LIST";

/*
 * Action creators
 */
export function selectLower() {
  return { type: SELECT_LOWER };
}

export function selectUpper() {
  return { type: SELECT_UPPER };
}

export function addItemToList(item) {
  return { type: ADD_ITEM_TO_LIST, payload: item };
}
