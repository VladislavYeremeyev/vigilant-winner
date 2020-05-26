import React from "react";
import "./ListItem.css";

import { cn } from "@bem-react/classname";

const b = cn("ListItem");

export default function ListItem({ item, handleCheck }) {
  return (
    <li className={b()}>
      <div className={b("Info")}>
        <div className={b("VendorCode")}>{`Арт.: ${item.artNo}`}</div>
        <div className={b("Name")}>{item.name}</div>
        <div className={b("Description")}>{item.description}</div>
      </div>
      <div className={b("Action")}>
        <input
          onChange={() => handleCheck(item.id)}
          className={b("Checkbox")}
          type="checkbox"
          checked={item.checked}
        />
      </div>
    </li>
  );
}
