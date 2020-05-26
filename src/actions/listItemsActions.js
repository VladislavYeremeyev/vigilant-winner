/*
 * Action types
 */
export const SELECT_ALL_IN_LIST = "SELECT_ALL_IN_LIST";
export const UNSELECT_ALL_IN_LIST = "UNSELECT_ALL_IN_LIST";
export const DELETE_SELECTED_FROM_LIST = "DELETE_SELECTED_FROM_LIST";
export const CHECK_LIST_ITEM = "CHECK_LIST_ITEM";

/*
 * Action creators
 */
export function selectAllInList() {
  return { type: SELECT_ALL_IN_LIST };
}

export function unselectAllInList() {
  return { type: UNSELECT_ALL_IN_LIST };
}

export function deleteSelectedFromList() {
  return { type: DELETE_SELECTED_FROM_LIST };
}

export function checkListItem(id) {
  return { type: CHECK_LIST_ITEM, payload: id };
}
