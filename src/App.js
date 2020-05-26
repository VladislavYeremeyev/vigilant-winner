import React from "react";
import "./App.css";
import ItemsTable from "./components/ItemsTable/ItemsTable";
import data from "./MOCK_DATA.json";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import ItemsList from "./components/ItemsList/ItemsList";
import { cn } from "@bem-react/classname";

const b = cn("App");

function App() {
  return (
    <div className={b()}>
      <div className={b("Content")}>
        <Container
          renderComponent={(items) => <ItemsTable items={data} />}
          buttons={[
            <Button key="btn-1" onClick={() => {}} icon="arrow-down" />,
            <Button key="btn-2" onClick={() => {}} icon="arrow-up" />,
            <Button key="btn-3" onClick={() => {}}>
              Добавить
            </Button>,
          ]}
        />

        <Container
          renderComponent={() => <ItemsList addedItems={[]} />}
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
        />
      </div>
    </div>
  );
}

export default App;
