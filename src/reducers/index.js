import {
  SELECT_UPPER,
  SELECT_LOWER,
  ADD_ITEM_TO_LIST,
} from "../actions/tableItemsActions";
import {
  SELECT_ALL_IN_LIST,
  UNSELECT_ALL_IN_LIST,
  DELETE_SELECTED_FROM_LIST,
  CHECK_LIST_ITEM,
} from "../actions/listItemsActions";
import data from "./../MOCK_DATA.json";

const rootReducer = (
  state = { tableItems: data || [], selectedRow: 0, listItems: [] },
  action
) => {
  const { selectedRow, tableItems, listItems } = state;

  switch (action.type) {
    case SELECT_UPPER:
      return { ...state, selectedRow: selectedRow - 1 };
    case SELECT_LOWER:
      return { ...state, selectedRow: selectedRow + 1 };
    case ADD_ITEM_TO_LIST:
      return {
        ...state,
        tableItems: tableItems.filter((el) => el.id !== action.payload.id),
        selectedRow:
          selectedRow === tableItems.length - 1 ? selectedRow - 1 : selectedRow,
        listItems: [...listItems, { ...action.payload, checked: false }],
      };
    case SELECT_ALL_IN_LIST:
      return {
        ...state,
        listItems: listItems.map((el) => ({ ...el, checked: true })),
      };
    case UNSELECT_ALL_IN_LIST:
      return {
        ...state,
        listItems: listItems.map((el) => ({ ...el, checked: false })),
      };
    case DELETE_SELECTED_FROM_LIST:
      const checkedItems = listItems.filter((el) => el.checked);

      return {
        ...state,
        tableItems: [
          ...tableItems,
          ...checkedItems.map((el) => {
            const { checked, ...rest } = el;
            return { ...rest };
          }),
        ],
        listItems: listItems.filter((el) => !el.checked),
      };
    case CHECK_LIST_ITEM:
      return {
        ...state,
        listItems: listItems.map((el) => {
          if (el.id === action.payload) {
            return { ...el, checked: !el.checked };
          }

          return el;
        }),
      };
    default:
      return state;
  }
};

export default rootReducer;
