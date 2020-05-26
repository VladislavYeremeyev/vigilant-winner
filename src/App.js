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
}) {
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
            <Button key="btn-4" onClick={() => {}}>
              Выбрать все
            </Button>,
            <Button key="btn-5" onClick={() => {}}>
              Выбрать ничего
            </Button>,
            <Button key="btn-6" onClick={() => {}}>
              Удалить выделен.
            </Button>,
          ]}
        >
          <ItemsList addedItems={listItems} />
        </Container>
      </div>
    </div>
  );
}

export default App;
