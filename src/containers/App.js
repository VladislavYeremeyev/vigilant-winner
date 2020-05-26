import { connect } from "react-redux";
import App from "../App";
import {
  selectLower,
  selectUpper,
  addItemToList,
} from "../actions/tableItemsActions";

const mapStateToProps = (state) => ({
  tableItems: state.tableItems,
  selectedRow: state.selectedRow,
  listItems: state.listItems,
});

const mapDispatchToProps = (dispatch) => ({
  handleUpperClick: () => dispatch(selectUpper()),
  handleLowerClick: () => dispatch(selectLower()),
  handleAddToListClick: (item) => dispatch(addItemToList(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
