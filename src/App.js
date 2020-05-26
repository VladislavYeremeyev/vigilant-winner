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
            <Button onClick={() => {}} icon="arrow-down" />,
            <Button onClick={() => {}} icon="arrow-up" />,
            <Button onClick={() => {}}>Добавить</Button>,
          ]}
        />

        <Container
          renderComponent={() => <ItemsList addedItems={[]} />}
          buttons={[
            <Button onClick={() => {}}>Выбрать все</Button>,
            <Button onClick={() => {}}>Выбрать ничего</Button>,
            <Button onClick={() => {}}>Удалить выделен.</Button>,
          ]}
        />
      </div>
    </div>
  );
}

export default App;
