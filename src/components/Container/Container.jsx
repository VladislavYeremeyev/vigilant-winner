import React from "react";
import "./Container.css";
import { cn } from "@bem-react/classname";

const b = cn("Container");

export default function Container({ renderComponent, buttons }) {
  return (
    <div className={b()}>
      {renderComponent()}
      <div className={b("ActionButtons")}>
        {buttons.map((button) => button)}
      </div>
    </div>
  );
}
