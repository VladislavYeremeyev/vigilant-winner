import { connect } from "react-redux";
import App from "../App";
import {
  selectLower,
  selectUpper,
  addItemToList,
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
  handleUpperClick: () => dispatch(selectUpper()),
  handleLowerClick: () => dispatch(selectLower()),
  handleAddToListClick: (item) => dispatch(addItemToList(item)),
  handleSelectAllClick: () => dispatch(selectAllInList()),
  handleUnselectAllClick: () => dispatch(unselectAllInList()),
  handleDeleteSelectedClick: (item) => dispatch(deleteSelectedFromList()),
  handleCheckListItem: (id) => dispatch(checkListItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
