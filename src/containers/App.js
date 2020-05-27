import { connect } from "react-redux";
import App from "../App";
import {
  selectLower,
  selectUpper,
  addItemToList,
  selectRowByClick,
} from "../actions/tableItemsActions";
import {
  selectAllInList,
  unselectAllInList,
  deleteSelectedFromList,
  checkListItem,
} from "../actions/listItemsActions";

const mapStateToProps = (state) => ({
  tableItems: state.tableItems,
  selectedRow: state.selectedRow,
  listItems: state.listItems,
});

const mapDispatchToProps = (dispatch) => ({
  handleUpperClick: (cb) => {
    dispatch(selectUpper());
    cb();
  },
  handleLowerClick: (cb) => {
    dispatch(selectLower());
    cb();
  },
  handleTableRowClick: (index) => dispatch(selectRowByClick(index)),
  handleAddToListClick: (item) => dispatch(addItemToList(item)),
  handleSelectAllClick: () => dispatch(selectAllInList()),
  handleUnselectAllClick: () => dispatch(unselectAllInList()),
  handleDeleteSelectedClick: (item) => dispatch(deleteSelectedFromList()),
  handleCheckListItem: (id) => dispatch(checkListItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
