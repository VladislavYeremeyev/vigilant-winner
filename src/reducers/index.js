import {
  SELECT_UPPER,
  SELECT_LOWER,
  ADD_ITEM_TO_LIST,
} from "../actions/tableItemsActions";
import data from "./../MOCK_DATA.json";

const rootReducer = (
  state = { tableItems: data || [], selectedRow: 0, listItems: [] },
  action
) => {
  switch (action.type) {
    case SELECT_UPPER:
      return { ...state, selectedRow: --state.selectedRow };
    case SELECT_LOWER:
      return { ...state, selectedRow: ++state.selectedRow };
    case ADD_ITEM_TO_LIST:
      const { selectedRow, tableItems, listItems } = state;
      return {
        ...state,
        tableItems: tableItems.filter((el) => el.id !== action.payload.id),
        selectedRow:
          selectedRow === tableItems.length - 1 ? selectedRow - 1 : selectedRow,
        listItems: [...listItems, { ...action.payload, checked: false }],
      };
    default:
      return state;
  }
};

export default rootReducer;
