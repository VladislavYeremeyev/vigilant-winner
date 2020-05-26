import React from "react";
import "./ItemsList.css";

import { cn } from "@bem-react/classname";
import ListItem from "./ListItem/ListItem";

const b = cn("ItemsList");

export default function ItemsList({ addedItems }) {
  return (
    <ul className={b()}>
      {addedItems.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
