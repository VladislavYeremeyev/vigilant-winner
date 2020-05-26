import React from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import ItemsTable from "./components/ItemsTable/ItemsTable";
import ItemsList from "./components/ItemsList/ItemsList";
import { cn } from "@bem-react/classname";

const b = cn("App");

function App({
  tableItems,
  listItems,
  selectedRow,
  handleUpperClick,
  handleLowerClick,
  handleAddToListClick,
  handleCheckListItem,
  handleSelectAllClick,
  handleUnselectAllClick,
  handleDeleteSelectedClick,
}) {
  const isSomeUnchecked = listItems.some((el) => !el.checked);
  const isSomeChecked = listItems.some((el) => el.checked);

  return (
    <div className={b()}>
      <div className={b("Content")}>
        <Container
          buttons={[
            <Button
              disabled={
                !tableItems.length || selectedRow === tableItems.length - 1
              }
              key="btn-1"
              onClick={handleLowerClick}
              icon="arrow-down"
            />,
            <Button
              disabled={!tableItems.length || selectedRow === 0}
              key="btn-2"
              onClick={handleUpperClick}
              icon="arrow-up"
            />,
            <Button
              disabled={!tableItems.length}
              key="btn-3"
              onClick={() => handleAddToListClick(tableItems[selectedRow])}
            >
              Добавить
            </Button>,
          ]}
        >
          <ItemsTable items={tableItems} selectedRow={selectedRow} />
        </Container>

        <Container
          buttons={[
            <Button
              disabled={!listItems.length || !isSomeUnchecked}
              key="btn-4"
              onClick={handleSelectAllClick}
            >
              Выбрать все
            </Button>,
            <Button
              disabled={!listItems.length || !isSomeChecked}
              key="btn-5"
              onClick={handleUnselectAllClick}
            >
              Выбрать ничего
            </Button>,
            <Button
              disabled={!listItems.length || !isSomeChecked}
              key="btn-6"
              onClick={handleDeleteSelectedClick}
            >
              Удалить выделен.
            </Button>,
          ]}
        >
          <ItemsList addedItems={listItems} handleCheck={handleCheckListItem} />
        </Container>
      </div>
    </div>
  );
}

export default App;
